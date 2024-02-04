import { db } from "@/lib/firebase";
import { doc, setDoc } from "firebase/firestore";
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function generateTimeline(
  summary: string,
  title: string,
  languages: string[],
  tools: string[],
  userId: string,
) {
  console.log("Generating timeline");
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        // prompt
        content: `
        Generate a JSON object containing detailed technical steps to complete a software
        development project from start to finish. Provide full technical details and especially code as much as possible.
        The project is described as follows:
        Title: ${title}
        Summary: ${summary}
        Languages: ${languages.join(", ")}
        Tools: ${tools.join(", ")}
        Format your JSON output as follows:

        {
          "${title}": [
            step: [
              "step": "Title of the step",
              "description": "This is the first step",
              "actions": [
                "action 1",
                "action 2"
                // more actions
              ]
            ]
            // more steps
          ]
        }
        
        Focus on creating well formatted outputs using markdown, codeblocks, and inline code in each step.
        Each step should be detailed and contain a call to action for the developer to complete.
        `,
      },
    ],
    model: "gpt-4-1106-preview",
    max_tokens: 2000,
    response_format: { type: "json_object" },
  });

  if (completion.choices[0].message.content) {
    const timeline = JSON.parse(completion.choices[0].message.content);
    const userDocRef = doc(db, "timelines", userId);

    try {
      await setDoc(userDocRef, { timeline }, { merge: true });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  } else {
    console.log("No content found in the completion choices");
    return null;
  }
}
