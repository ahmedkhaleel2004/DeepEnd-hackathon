# DeepEnd: Lower the entry barrier for a career in tech


<div align="center">
  <hr>
  <strong>🏆 Best Overall Hack for GDSC McMaster Solution Challenge! 🏆</strong>
  <hr>
</div>


<div align="center">
    <img src="https://github.com/ahmedkhaleel2004/DeepEnd-hackathon/assets/111161052/686113a0-0b5d-4d16-9451-091cca47d9fb" alt="DeepEnd example timeline" width="1000"/>
</div>

## Introduction
DeepEnd asks aspiring software engineers to enter their experience and goals through a survey, which are then used to generate realistic project recommendations followed by in-depth technical timelines.

## Key Features

- **Project Recommendation**: Provides personalized project recommendations tailored to users' experience, technology stack preferences, and goals. The system ensures recommendations are aligned with their skill level so that it is always realistic.
- **In-Depth Project Timelines**:
  - **Detailed Steps**: Generates a comprehensive timeline for each recommended project, including technical steps detailed in markdown with actionable calls to action for the user. Each step is accompanied by relevant code snippets enclosed in code blocks to facilitate understanding and implementation.
  - **All-Inclusive Code**: Ensures users have all necessary code at their fingertips, formatted and ready to be implemented directly from the timeline.
- **Progress Tracking Feature**: Empowers users with the ability to track their progress across different project timelines. This feature provides insights into completed steps, pending actions, and overall progress, enabling users to stay on track and motivated throughout their learning journey.
- **Technology Stack**: Built with Next.js, Firebase, OpenAI, TypeScript, React, Tailwind CSS, and Framer Motion. Deployed on Vercel.

## Next Steps
Instead of simply asking GPT for project recommendations, the plan was to use TensorFlow with a Siamese model that takes in a concatenated user vector containing all the features of a user profile, and compares it with a given input project from a GitHub repos dataset. This would theoretically generate more accurate and in depth real projects, however this is to be built for the actual project in the GDSC Global Solution Challenge. This is the hackathon repo, which was used for hackathon submission only. DeepEnd will launch soon with this feature.

## Local Development
- **Prerequisites**: Ensure you have Node.js and npm installed.
- **Setup**:
  1. Clone the repository: `https://github.com/ahmedkhaleel2004/DeepEnd-hackathon.git`
  2. Change directory: `cd DeepEnd-hackathon`
  3. Install dependencies: `npm i`
  4. Create a `.env.local` in the root directory with your Firebase variables and OpenAI API key.
  5. Start the local development server: `npm run dev`
