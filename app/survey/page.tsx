"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import SurveyQuestions from "@/components/component/survey/survey-questions";
import SurveyComplete from "@/components/component/survey/survey-complete";
import { useAuth } from "@/lib/hooks/use-auth";
import { getProjects } from "@/lib/get-projects";
import Modal from "@/components/component/modal";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Survey = () => {
  const router = useRouter();
  const user = useAuth(router);
  const [surveyCompleted, setSurveyCompleted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSurveyComplete = async () => {
    setIsLoading(true);
    await getProjects(user?.uid);
    setSurveyCompleted(true);
    setIsLoading(false);
  };

  return (
    <main className="mx-auto max-w-2xl">
      {!surveyCompleted ? (
        <div className="mb-4 px-4">
          <h1 className="text-3xl font-bold">Survey</h1>
          <p>Please answer the following questions</p>
          <SurveyQuestions onSurveyComplete={handleSurveyComplete} />
          <Modal isOpen={isLoading} handleClose={() => {}}>
            <Card className="flex flex-col items-center justify-center">
              <CardHeader>
                <CardTitle>Generating Your Projects</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center">
                <CardDescription>
                  Your projects are being generated. This will take a few
                  seconds.
                </CardDescription>
                <div className="mt-8 h-16 w-16 animate-spin  rounded-full border-t-2 border-foreground" />
              </CardContent>
            </Card>
          </Modal>
        </div>
      ) : (
        <SurveyComplete />
      )}
    </main>
  );
};

export default Survey;
