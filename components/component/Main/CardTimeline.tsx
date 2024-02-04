import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import ReactMarkdown from "react-markdown";
import ChatMessage from "./message";

interface TimelineEventsProp {
  step: string;
  description: string;
  actions: string[];
}

export function CardOfTimeline({
  step,
  description,
  actions,
}: TimelineEventsProp) {
  return (
    <div className="w-full">
      <Card>
        <CardHeader>
          <CardTitle>{step}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-4">
            {actions.map((action, index) => (
              <li key={index} className="mb-2">
                <ChatMessage content={action} />
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
      <Separator className="my-4" />
    </div>
  );
}
