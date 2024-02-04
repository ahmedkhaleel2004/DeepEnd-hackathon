"use client";

import SidebarContent from "./sidebar-content";

interface SidebarProps {
  loggedIn: boolean;
  userId: string;
  onProjectSelect: (project: any) => void;
}

const Sidebar = ({ userId, loggedIn, onProjectSelect }: SidebarProps) => {
  return (
    <SidebarContent
      loggedIn={loggedIn}
      userId={userId}
      onProjectSelect={onProjectSelect}
    />
  );
};

export default Sidebar;
