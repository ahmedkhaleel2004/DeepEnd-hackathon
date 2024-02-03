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
    <div className="relative z-10 h-full w-full max-w-xs overflow-hidden bg-transparent py-6 lg:border-r lg:bg-background lg:p-6">
      <Separator />
      {loggedIn && userId && (
        <>
          <Button className="my-4 w-full">
            <Image
              src="/jbp.png"
              width={500}
              height={300} // had to include this for some reason
              alt="logo"
              className="mr-2 h-6 w-6 rounded-full"
            />
            <Link href="/chatbot">New conversation</Link>
          </Button>
          <ConversationsList loggedIn={loggedIn} userId={userId} />
        </>
      )}
    </div>
  );
};

export default SidebarContent;
