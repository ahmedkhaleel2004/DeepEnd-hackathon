"use client";

import SidebarContent from "./sidebar-content";

interface SidebarProps {
  loggedIn: boolean;
  userId: string;
}

const Sidebar = ({ userId, loggedIn }: SidebarProps) => {
  return <SidebarContent loggedIn={loggedIn} userId={userId} />;
};

export default Sidebar;
