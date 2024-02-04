import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import React from "react";

export function ProgressBar() {
  return (
    <>
      <div className="flex items-start justify-start">
        <Separator orientation="vertical" className="" />
        <Progress className="rotate-90 transform" value={50} max={100} />
      </div>
    </>
  );
}
