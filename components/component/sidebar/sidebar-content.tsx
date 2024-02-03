import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import ConversationsList from "./conversations-list";

interface SidebarContentProps {
  loggedIn: boolean;
  userId: string;
}

const SidebarContent: React.FC<SidebarContentProps> = ({
  loggedIn,
  userId,
}) => {
  return (
    <div className="relative z-10 h-full w-full min-w-[20vw] max-w-xs overflow-hidden bg-transparent py-6 lg:border-r lg:bg-background lg:p-6">
      {loggedIn && userId && (
        <ConversationsList loggedIn={loggedIn} userId={userId} />
      )}
    </div>
  );
};

export default SidebarContent;
