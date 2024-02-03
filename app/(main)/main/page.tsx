"use client";

import React from "react";
import { Stepper, Step } from "@/components/component/Main/Line/Stepper";
import { ModeToggle } from "@/components/component/mode-toggle";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Main = () => {
  const [curStep, setCurStep] = useState(0);

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

      <main className="flex h-screen w-full">
        <Stepper
          className="flex w-full flex-col items-center justify-start"
          curStep={curStep}
          setCurStep={setCurStep}
        >
          <Step label="Step 1" />
          <Step label="Step 2" />
          <Step label="Step 3" />
          <Step label="Step 4" />
        </Stepper>
      </main>
    </>
  );
};

export default Main;
