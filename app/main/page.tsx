"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/hooks/use-auth";
import SidebarContainer from "@/components/component/sidebar/sidebar-container";
import { ModeToggle } from "@/components/component/mode-toggle";
import Image from "next/image";
import Link from "next/link";
import Timeline from "@/components/component/timeline/timeline";

interface Project {
  id: string;
  title: string;
  summary: string;
  languages: string[];
  tools: string[];
}

function Page() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();
  const userData = useAuth(router, true);
  const divRef = React.useRef<HTMLDivElement | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    setLoggedIn(!!userData?.uid);
  }, [userData?.uid]);

  useEffect(() => {
    console.log("selectedProject", selectedProject);
  });

  return (
    <div className="flex h-screen">
      <SidebarContainer
        userId={userData?.uid}
        loggedIn={loggedIn}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        isHovered={isHovered}
        setIsHovered={setIsHovered}
        onProjectSelect={setSelectedProject}
      />
      <div className=" flex grow overflow-hidden pl-0">
        <div
          className="flex h-full w-full flex-col overflow-y-auto"
          ref={divRef}
        >
          <>
            <div className="m-8 flex items-center justify-between ">
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
            <main className="flex w-full flex-col items-center justify-center">
              {selectedProject?.title ? (
                <h1 className="mb-4 text-4xl font-semibold">
                  {selectedProject.title}
                </h1>
              ) : (
                <h1 className="mb-4 text-4xl font-semibold">
                  Project Timeline Generator
                </h1>
              )}

              {selectedProject?.title ? (
                <Timeline
                  uid={userData?.uid}
                  projectName={selectedProject.title}
                />
              ) : (
                <div>
                  No project selected. Click on a project in the sidebar to
                  start generating project timelines
                </div>
              )}
            </main>
          </>
        </div>
      </div>
    </div>
  );
}

export default Page;
