import { db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { CardOfTimeline } from "../Main/CardTimeline";

interface TimelineEvent {
  step: string;
  description: string;
  actions: string[];
}

interface Props {
  uid: string;
  projectName: string;
}

const Timeline = ({ uid, projectName }: Props) => {
  const [timelineEvents, setTimelineEvents] = useState<TimelineEvent[]>([]);

  useEffect(() => {
    const fetchTimeline = async () => {
      if (!uid || !projectName) return;

      const userTimelineDocRef = doc(db, "timelines", uid);

      try {
        const docSnap = await getDoc(userTimelineDocRef);
        if (
          docSnap.exists() &&
          docSnap.data().timeline &&
          docSnap.data().timeline[projectName]
        ) {
          // Accessing the project-specific timeline array within the 'timeline' map
          const projectTimeline = docSnap.data().timeline[projectName];
          setTimelineEvents(projectTimeline);
        } else {
          console.log("No such timeline document or project timeline!");
        }
      } catch (error) {
        console.error("Error fetching timeline:", error);
      }
    };

    fetchTimeline();
  }, [uid, projectName]);

  return (
    <div className="flex w-[60%] flex-col justify-center">
      {timelineEvents.length > 0 ? (
        timelineEvents.map((event, index) => (
          // Pass individual properties to CardOfTimeline
          <CardOfTimeline
            key={index}
            step={event.step}
            description={event.description}
            actions={event.actions}
          />
        ))
      ) : (
        <div>No timeline events found for {projectName}.</div>
      )}
    </div>
  );
};

export default Timeline;
