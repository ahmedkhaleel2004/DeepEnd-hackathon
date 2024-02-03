"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/hooks/use-auth";
import SidebarContainer from "@/components/component/sidebar/sidebar-container";

interface MainLayoutProps {
  children: React.ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();
  const userData = useAuth(router, true);
  const divRef = React.useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setLoggedIn(!!userData?.uid);
  }, [userData?.uid]);

  return (
    <div className="flex h-screen">
      <SidebarContainer
        userId={userData?.uid}
        loggedIn={loggedIn}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        isHovered={isHovered}
        setIsHovered={setIsHovered}
      />
      <div className="flex grow overflow-hidden pl-0">
        <div
          className="flex h-full w-full flex-col overflow-y-auto"
          ref={divRef}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
