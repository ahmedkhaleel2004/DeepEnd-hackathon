import { useState, useEffect } from 'react';
import { db } from "@/lib/firebase";
import { doc, onSnapshot } from "firebase/firestore";

interface TimelineEvent {
  step: string;
  description: string;
  actions: string[];
}

export const useFetchTimelines = (uid: string, projectName: string): TimelineEvent[] => {
  const [timelineEvents, setTimelineEvents] = useState<TimelineEvent[]>([]);

  useEffect(() => {
    if (!uid || !projectName) return;

    const userTimelineDocRef = doc(db, 'timelines', uid);
    const unsubscribe = onSnapshot(userTimelineDocRef, (docSnap) => {
      if (docSnap.exists() && docSnap.data().timeline && docSnap.data().timeline[projectName]) {
        const projectTimeline: TimelineEvent[] = docSnap.data().timeline[projectName];
        setTimelineEvents(projectTimeline);
      } else {
        console.log('No such timeline document or project timeline!');
        setTimelineEvents([]);
      }
    }, (error) => {
      console.error('Error listening to timeline:', error);
    });

    return () => unsubscribe();
  }, [uid, projectName]);

  return timelineEvents;
};
