"use client";

import React from "react";
import { ModeToggle } from "@/components/component/mode-toggle";
import Image from "next/image";
import Link from "next/link";

import { CardOfTimeline } from "@/components/component/Main/CardTimeline";
import { ProgressBar } from "@/components/component/Main/ProgressBar";

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
      <main className="flex items-center justify-center p-10">
        <div className="flex w-3/4 flex-col items-center">
          <CardOfTimeline
            Title="Timeline"
            Description="Select a date range to view the timeline"
          />
          <ProgressBar />
        </div>
      </main>
    </>
  );
};

export default Main;
