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
          <div style={{ display: "flex", justifyContent: "center" }}>
            <p style={{ marginRight: 2 }}>My Validation: </p>
            <input
              style={{ border: "2px solid red" }}
              onChange={(e) => setStep2Data(e.currentTarget.value)}
              value={step2Data}
            />
          </div>
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
        style={{ padding: 10 }}
        curStep={curStep}
        setCurStep={setCurStep}
      >
        <Step label="Step 0 " />
        <Step label="Step 1" />
        <Step locked={step2Data === ""}>??</Step>
        <Step locked={curStep < 2} />
        <Step locked={curStep < 3} />
        <Step locked={curStep < 4} />
        <Step locked={curStep < 5} />
      </Stepper>
      {renderContent()}
    </>
  );
};

export default Main;
