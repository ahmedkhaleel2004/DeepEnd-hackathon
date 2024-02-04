"use client";

import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { getDoc, doc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react";
import questions from "@/lib/questions";
import { ModeToggle } from "@/components/component/mode-toggle";
import Image from "next/image";
import Link from "next/link";

export function ThankSurvey() {
  const router = useRouter();
  const [surveyAnswers, setSurveyAnswers] = useState([""]);

  const nextPage = () => {
    router.push("/main");
  };

  async function fetchAnswers(userId: string) {
    const docRef = doc(db, "questions", userId);
    const docSnap = await getDoc(docRef);

    let username = "";
    const auth = getAuth();
    const user = auth.currentUser;

    if (user !== null) {
      username = user.displayName || "No Name";
    }

    if (docSnap.exists()) {
      const data = docSnap.data();
      const qaArray = [
        username,
        data.Q1 || "No answer",
        data.Q2 || "No answer",
        data.Q3 || "No answer",
        data.Q4 || "No answer",
        data.Q5 || "No answer",
      ];

      return qaArray;
    } else {
      console.log("No such document!");
      return null;
    }
  }

  useEffect(() => {
    const fetchAndSetAnswers = async () => {
      const auth = getAuth();
      const user = auth.currentUser;
      if (user) {
        const userId = user.uid;
        const answers = await fetchAnswers(userId);
        setSurveyAnswers(answers || []);
      }
    };

    fetchAndSetAnswers();
  }, []);

  return (
    <>
      <div className="space-y-8 p-10">
        <Card>
          <CardHeader>
            <CardTitle>Submitted Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {surveyAnswers.map((answer, index) => (
              <div key={index} className="space-y-2">
                <div className="font-medium">
                  {index === 0 ? "Name" : `${questions[index - 1]?.title}`}
                </div>
                <div className="text-gray-500">{answer}</div>
              </div>
            ))}
          </CardContent>
        </Card>
        <div className="flex items-center justify-center">
          <Button variant="outline" onClick={nextPage}>
            Go To Main
          </Button>
        </div>
        <div className="rounded-md bg-green-100 p-4 text-green-900">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  clipRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  fillRule="evenodd"
                />
              </svg>
            </div>
            <p className="ml-3">
              Your responses have been successfully submitted.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
