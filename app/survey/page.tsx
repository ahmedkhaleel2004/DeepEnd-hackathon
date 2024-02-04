"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import SurveyQuestions from "@/components/component/survey/survey-questions";
import SurveyComplete from "@/components/component/survey/survey-complete";
import { useAuth } from "@/lib/hooks/use-auth";
import { getProjects } from "@/lib/get-projects";

const Survey = () => {
  const router = useRouter();
  const user = useAuth(router);
  const [surveyCompleted, setSurveyCompleted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSurveyComplete = async () => {
    console.log("Setting loading to true");
    setIsLoading(true);
    console.log("Getting projects");
    await getProjects(user?.uid);
    console.log("Setting survey completed to true");
    setSurveyCompleted(true);
    console.log("Setting loading to false");
    setIsLoading(false);
  };

  return (
    <main className="mx-auto max-w-2xl">
      {!surveyCompleted ? (
        <div className="mb-4 px-4">
          <h1 className="text-3xl font-bold">Survey</h1>
          <p>Please answer the following questions</p>
          <SurveyQuestions onSurveyComplete={handleSurveyComplete} />
        </div>
      ) : (
        <SurveyComplete />
      )}
    </main>
  );
};

export default Survey;
