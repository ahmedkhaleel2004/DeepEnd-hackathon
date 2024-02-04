import { db } from "@/lib/firebase";
import { doc, onSnapshot } from "firebase/firestore";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import ProjectItem from "./project-item";
import Modal from "../modal";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface ProjectsListProps {
  userId: string;
  loggedIn: boolean;
}

interface Project {
  id: string;
  title: string;
  summary: string;
  languages: string[];
  tools: string[];
}

const ProjectsList = ({ userId, loggedIn }: ProjectsListProps) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openModal = (project: Project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  useEffect(() => {
    console.log("Running useEffect in ProjectsList"); // Log when useeffect good
    console.log("loggedIn:", loggedIn); // Log the value of loggedIn
    console.log("userId:", userId); // Log the value of userId
    if (loggedIn && userId) {
      const fetchProjects = async () => {
        // I believe here is where problems arise, idk what, but its fixable
        try {
          const projectsRef = doc(db, "projects", userId);

          const unsubscribe = onSnapshot(projectsRef, (docSnapshot) => {
            if (docSnapshot.exists()) {
              const data = docSnapshot.data();
              const projects =
                data && data.projects && Array.isArray(data.projects.projects)
                  ? data.projects.projects
                  : [];
              console.log("Fetched projects:", projects); // show fetched projects

              const projectData: Project[] = projects.map(
                (value: any, id: number) => ({
                  id: id.toString(),
                  title: value.title,
                  summary: value.summary,
                  languages: value.languages,
                  tools: value.tools,
                }),
              );
              console.log("Processed projects:", projectData); // show processed projects
              setProjects(projectData);
            } else {
              console.log("No documents found");
            }
          });

          return () => unsubscribe();
        } catch (error) {
          console.error("Error fetching projects: ");
        }
      };

      fetchProjects();
    }
  }, [loggedIn, userId]);

  return (
    <div>
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
              <Button className="mt-4">Make a Timeline</Button>
            </div>
          </Card>
        </Modal>
      )}
    </div>
  );
};

export default ProjectsList;
