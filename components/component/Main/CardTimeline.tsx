import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ValueIcon } from "@radix-ui/react-icons";
import { Separator } from "@/components/ui/separator";
import { ProgressBar } from "./ProgressBar";

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
    <div>
      <Card>
        <CardHeader>
          <CardTitle>{step}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-4">
            {actions.map((action, index) => (
              <li key={index} className="mb-2">
                {action}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
      <Separator className="my-4" />
    </div>
  );
}
