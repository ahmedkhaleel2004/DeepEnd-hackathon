import React from "react";
import Modal from "../modal";
import { Button } from "@/components/ui/button";

interface ProjectItemProps {
  project: Project;
  userId: string;
  openModal: (project: Project) => void;
}

interface Project {
  id: string;
  title: string;
  summary: string;
  languages: string[];
  tools: string[];
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  project,
  userId,
  openModal,
}) => {
  const { id, title, summary, languages, tools } = project;

  return (
    <div
      key={id}
      className="mb-4 flex items-center rounded-md p-2 pb-1 pt-0 duration-200  hover:bg-zinc-300 dark:hover:bg-zinc-700"
    >
      <div
        onClick={() => openModal(project)}
        className="flex grow cursor-pointer items-center"
      >
        <div className="flex w-full items-center gap-2">
          <div className="relative max-h-5 w-10 flex-1 select-none overflow-hidden text-ellipsis break-all">
            <span className="whitespace-nowrap">{title}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
