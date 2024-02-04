import React from "react";
import ProjectsList from "./projects-list";

interface SidebarContentProps {
  loggedIn: boolean;
  userId: string;
  onProjectSelect: (project: any) => void;
}

const SidebarContent: React.FC<SidebarContentProps> = ({
  loggedIn,
  userId,
  onProjectSelect,
}) => {
  return (
    <div className="relative z-10 h-full w-full min-w-[20vw] max-w-xs overflow-hidden bg-transparent py-6 lg:border-r lg:bg-background lg:p-6">
      {loggedIn && userId && (
        <ProjectsList
          loggedIn={loggedIn}
          userId={userId}
          onProjectSelect={onProjectSelect}
        />
      )}
    </div>
  );
};

export default SidebarContent;
