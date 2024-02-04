import { useState, useEffect } from 'react';
import { db } from "@/lib/firebase";
import { doc, onSnapshot } from "firebase/firestore";

interface Project {
  id: string;
  title: string;
  summary: string;
  languages: string[];
  tools: string[];
}

export function useFetchProjects(
  userId: string, 
  loggedIn: boolean, 
  setIsLoading: (value: boolean) => void
) {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    if (loggedIn && userId) {
      setIsLoading(true);
      const projectsRef = doc(db, "projects", userId);
      const unsubscribe = onSnapshot(projectsRef, (docSnapshot) => {
        if (docSnapshot.exists()) {
          const data = docSnapshot.data();
          const projectsArray = data?.projects?.projects ?? [];
          const projectData = projectsArray.map((value: any, id: number): Project => ({
            id: id.toString(),
            title: value.title,
            summary: value.summary,
            languages: value.languages,
            tools: value.tools,
          }));
          setProjects(projectData);
        } else {
          console.log("No documents found");
        }
        setIsLoading(false);
      });

      return () => unsubscribe();
    }
  }, [loggedIn, userId, setIsLoading]);

  return { projects };
}
