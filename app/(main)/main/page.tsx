"use client";

import React from "react";
import { ModeToggle } from "@/components/component/mode-toggle";
import Image from "next/image";
import Link from "next/link";
<<<<<<< HEAD
import Timeline from "@/components/component/timeline/timeline";
=======

import { CardOfTimeline } from "@/components/component/Main/CardTimeline";
import { ProgressBar } from "@/components/component/Main/ProgressBar";
>>>>>>> 02078ffc0febead79fb7be01040320f8797d0a54

const Main = () => {
  return (
    <>
      <div className="m-8 flex items-center justify-between">
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
<<<<<<< HEAD
      <main className="flex justify-center">
        <Timeline uid="test" projectIndex={0} />
=======
      <main className="flex items-center justify-center p-10">
        <div className="flex w-3/4 flex-col items-center">
          <CardOfTimeline
            Title="Timeline"
            Description="Select a date range to view the timeline"
          />
          <ProgressBar />
        </div>
>>>>>>> 02078ffc0febead79fb7be01040320f8797d0a54
      </main>
    </>
  );
};

export default Main;
