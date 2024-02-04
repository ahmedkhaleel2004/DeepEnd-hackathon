import { db } from "@/lib/firebase";
import { doc, onSnapshot } from "firebase/firestore";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import ProjectItem from "./project-item";
import Modal from "../modal";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useFetchProjects } from "@/lib/hooks/use-fetch-projects";
import { useAuth } from "@/lib/hooks/use-auth";

interface ProjectsListProps {
  userId: string;
  loggedIn: boolean;
  onProjectSelect: (project: any) => void;
}

interface Project {
  id: string;
  title: string;
  summary: string;
  languages: string[];
  tools: string[];
}

const ProjectsList = ({
  userId,
  loggedIn,
  onProjectSelect,
}: ProjectsListProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const { projects } = useFetchProjects(userId, loggedIn, setIsLoading);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    onProjectSelect(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const handleCreateTimeline = async () => {
    setIsLoading(true);
    await fetch("/api/generate-timeline", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId,
        summary: selectedProject?.summary,
        title: selectedProject?.title,
        languages: selectedProject?.languages,
        tools: selectedProject?.tools,
      }),
    });
    setIsLoading(false);
  };

  return (
    <div>
      <h2 className="mb-4 text-2xl font-bold">Your Projects</h2>
      {projects.map((project) => (
        <ProjectItem
          key={project.id}
          project={project}
          userId={userId}
          openModal={openModal}
        />
      ))}
      {selectedProject && (
        <Modal isOpen={!!selectedProject} handleClose={closeModal}>
          <Card className="mx-auto flex h-full max-h-screen w-3/4 flex-col justify-between overflow-auto rounded p-4 dark:bg-gray-800 md:w-1/2 lg:w-1/2">
            <div>
              <h2 className="mb-3 text-xl font-bold">
                {selectedProject.title}
              </h2>
              <p className="mb-2">{selectedProject.summary}</p>
              <p className="mb-2">
                Languages: {selectedProject.languages.join(", ")}
              </p>
              <p className="mb-2">Tools: {selectedProject.tools.join(", ")}</p>
            </div>
            <div className="self-end">
              <Button className="mt-4" onClick={handleCreateTimeline}>
                Make a Timeline
              </Button>
            </div>
          </Card>
        </Modal>
      )}
      <Modal isOpen={isLoading} handleClose={() => {}}>
        <Card className="flex flex-col items-center justify-center">
          <CardHeader>
            <CardTitle>Generating {selectedProject?.title} Timeline</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center">
            <CardDescription>
              The {selectedProject?.title} timeline is being generated. This
              will take a few seconds.
            </CardDescription>
            <div className="mt-8 h-16 w-16 animate-spin  rounded-full border-t-2 border-foreground" />
          </CardContent>
        </Card>
      </Modal>
    </div>
  );
};

export default ProjectsList;
