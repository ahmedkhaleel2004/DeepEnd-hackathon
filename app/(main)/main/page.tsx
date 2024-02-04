"use client";

import React from "react";
import { ModeToggle } from "@/components/component/mode-toggle";
import Image from "next/image";
import Link from "next/link";
import Timeline from "@/components/component/timeline/timeline";

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
      <main className="flex justify-center">
        <Timeline uid="test" projectIndex={0} />
      </main>
    </>
  );
};

export default Main;
