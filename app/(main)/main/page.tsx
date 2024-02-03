"use client";

import React from "react";
import { Stepper, Step } from "@/components/component/Main/Line/Stepper";
import { ModeToggle } from "@/components/component/mode-toggle";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Main = () => {
  const [curStep, setCurStep] = useState(0);
  const [step2Data, setStep2Data] = useState("");

  const renderContent = () => {
    switch (curStep) {
      case 0:
        return (
          <div style={{ display: "flex", justifyContent: "center" }}>
            First Step
          </div>
        );
      case 1:
        return (
          <div style={{ display: "flex", justifyContent: "center" }}></div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className="min-h-screen">
        <header className="mx-8 mt-8 flex items-center justify-between">
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
          <nav>
            <ModeToggle />
          </nav>
        </header>
      </div>
      <main>
        <div className="flex h-screen items-center justify-center"></div>
      </main>

      <Stepper
        style={{ display: "flex", padding: 10, flexDirection: "column" }}
        curStep={curStep}
        setCurStep={setCurStep}
      >
        <Step label="Step 1">1</Step>
        <Step label="Step 2">2</Step>
        <Step label="Step 3">3</Step>
        <Step label="Step 4">4</Step>
      </Stepper>
      {renderContent()}
    </>
  );
};

export default Main;
