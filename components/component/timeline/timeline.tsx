import React, { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { doc, onSnapshot } from "firebase/firestore";
import { CardOfTimeline } from "../Main/CardTimeline";
import { Checkbox } from "@/components/ui/checkbox";
import { useFetchTimelines } from "@/lib/hooks/use-fetch-timelines";

interface Props {
  uid: string;
  projectName: string;
}

const Timeline = ({ uid, projectName }: Props) => {
  const timelineEvents = useFetchTimelines(uid, projectName);

  return (
    <div className="flex w-[60%] flex-col justify-center">
      {timelineEvents.length > 0 ? (
        timelineEvents.map((event, index) => (
          <div key={index} className="flex flex-row">
            <Checkbox className="mr-2 mt-2 h-10 w-10 rounded-full" />
            <CardOfTimeline
              step={event.step}
              description={event.description}
              actions={event.actions}
            />
          </div>
        ))
      ) : (
        <div className="text-center">No timeline found for {projectName}.</div>
      )}
    </div>
  );
};

export default Timeline;
