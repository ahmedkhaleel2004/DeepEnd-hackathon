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
import { Checkbox } from "@/components/ui/checkbox";

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
    <>
      <Card>
        <CardHeader>
          <CardTitle>{step}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          {actions.map((action, index) => (
            <div className="flex items-center">
              <Checkbox className="mr-2" />
              <p key={index} className="py-2">
                {action}
              </p>
            </div>
          ))}
        </CardContent>
      </Card>
      <Separator className="my-4" />
    </>
  );
}
