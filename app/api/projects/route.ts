import { db } from "@/lib/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function fetchAnswers(userId: string) {
    const docRef = doc(db, "questions", userId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        const data = docSnap.data();
        const qaText = [
            `Q1: ${data.Q1 || 'No answer'}`,
            `Q2: ${data.Q2 || 'No answer'}`,
            `Q3: ${data.Q3 || 'No answer'}`,
            `Q4: ${data.Q4 || 'No answer'}`,
            `Q5: ${data.Q5 || 'No answer'}`,
        ].join("\n");

        return qaText;
    } else {
        console.log("No such document!");
        return null;
    }
}

async function getProjects(surveyAnswers: string, userId: string) {
	const completion = await openai.chat.completions.create({
		messages: [
			{
				role: "system",
				// prompt
				content: `
        Generate a JSON object containing five unique software development project ideas. Each project 
        entry should include a title, a brief summary of less than 100 words, the programming languages 
        used, and any significant tools or frameworks employed. Ensure each project is distinct, covers 
        a variety of use cases or industries, and incorporates different technologies. Format the output
        as follows:

        {
          "projects": [
            {
              "title": "Title of Project 1",
              "summary": "A concise summary of what the project does, its target audience, and its unique features. Keep this summary under 100 words.",
              "languages": ["List", "Of", "Languages", "Used"],
              "tools": ["List", "Of", "Tools/FrameWorks", "Used"]
            },
            {
              "title": "Title of Project 2",
              "summary": "A concise summary of what the project does, including its purpose and key functionalities. Ensure this is also under 100 words.",
              "languages": ["List", "Of", "Languages", "Used"],
              "tools": ["List", "Of", "Tools/FrameWorks", "Used"]
            },
            // Include 3 more projects following the same structure.
          ]
        }
        
        Focus on creating diverse projects that span different types of software development, such as 
        web development, mobile app development, game development, data analysis, and machine learning 
        projects. The technologies listed should be realistic and appropriate for the project's requirements.
        `,
			},
			{ role: "user", content: surveyAnswers },
		],
		model: "gpt-4-1106-preview",
		max_tokens: 1000,
		response_format: { type: "json_object" },
	});

  if (completion.choices[0].message.content) {
    const projects = JSON.parse(completion.choices[0].message.content);
    const userDocRef = doc(db, "projects", userId);

    try {
      await setDoc(userDocRef, { projects });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  } else {
    console.log("No content found in the completion choices");
    return null;
  }
}

export async function POST(request: NextRequest) {
	const { userId } = await request.json();
    const surveyAnswers = await fetchAnswers(userId);
    if (surveyAnswers !== null) {
      const projects = await getProjects(surveyAnswers, userId);
      return NextResponse.json({ success: "Projects generated", projects });
    } else {
      console.log("No survey answers found for the given user ID");
    }

    return NextResponse.json({ error: "No survey answers found for the given user ID" });

}