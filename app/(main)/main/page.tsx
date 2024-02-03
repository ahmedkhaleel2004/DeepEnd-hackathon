"use client";

import React from "react";
import { Stepper, Step } from "@/components/component/Main/Line/Stepper";
import { ModeToggle } from "@/components/component/mode-toggle";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Main = () => {
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
    </>
  );
};

export default Main;
