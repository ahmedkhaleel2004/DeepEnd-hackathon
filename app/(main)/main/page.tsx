"use client";

import React from "react";
import { CardOfTimeline } from "@/components/component/Main/Card/card";
import { ModeToggle } from "@/components/component/mode-toggle";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Main = () => {
  const [curStep, setCurStep] = useState(0);
  const [step2Data, setStep2Data] = useState("");

  const values: { title: string; description: string }[] = [
    {
      title: "Timeline",
      description: "Select a date range to view the timeline",
    },
    {
      title: "Select a date range",
      description: "Select a date range to view the timeline",
    },
    {
      title: "Select a date range",
      description: "Select a date range to view the timeline",
    },
  ];

  return (
    <>
      <div className="mx-8 mt-8 flex items-center justify-between">
        <div className="flex items-center">
          <Image
            src="/deependlogo.svg"
            alt="DeepEnd Logo"
            width={40}
            height={40}
            className="dark:invert"
          />
          <Link className="ml-4 text-3xl font-semibold" href="/">
            DeepEnd
          </Link>
        </div>
        <ModeToggle />
      </div>
      <main>
        <CardOfTimeline
          Title={values[curStep].title}
          Description={values[curStep].description}
        />
      </main>
    </>
  );
};

export default Main;
