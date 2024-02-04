import React from "react";
import { Button } from "@/components/ui/button";
import ConversationsList from "./conversations-list";

interface SidebarContentProps {
  loggedIn: boolean;
  userId: string;
}

const SidebarContent: React.FC<SidebarContentProps> = ({
  loggedIn,
  userId,
}) => {
  const handleGenerateTimeline = () => () => {
    fetch("/api/generate-timeline", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: userId,
        summary:
          "A chatbot utilizing large language models (LLMs) to address customer inquiries in real time, reducing wait times and increasing satisfaction. Tailored for e-commerce websites.",
        title: "AI Customer Service Chatbot",
        languages: ["JavaScript", "Python"],
        tools: ["TensorFlow", "React", "Socket.IO"],
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div className="relative z-10 flex h-full w-full min-w-[20vw] max-w-xs flex-col justify-between overflow-hidden bg-transparent py-6 lg:border-r lg:bg-background lg:p-6">
      {loggedIn && userId && (
        <ConversationsList loggedIn={loggedIn} userId={userId} />
      )}
      <Button onClick={handleGenerateTimeline()}>Generate Timeline</Button>
    </div>
  );
};

export default SidebarContent;
