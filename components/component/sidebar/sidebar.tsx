"use client";

import React, { useState, useEffect } from "react";
import SidebarContent from "./sidebar-content";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

interface SidebarProps {
  loggedIn: boolean;
  userId: string;
}

const Sidebar = ({ userId, loggedIn }: SidebarProps) => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return <SidebarContent loggedIn={loggedIn} userId={userId} />;
};

export default Sidebar;
