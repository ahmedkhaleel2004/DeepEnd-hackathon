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

interface CardProps {
  Title: string;
  Description: string;
}

export function CardOfTimeline(props: CardProps) {
  const values: { items: string; title: string; description: string }[] = [
    {
      items: "item1",
      title: "Timeline",
      description: "Select a date range to view the timeline",
    },
    {
      items: "item2",
      title: "Select a date range",
      description: "Select a date range to view the timeline",
    },
    {
      items: "item3",
      title: "Select a date range",
      description: "Select a date range to view the timeline",
    },
    {
      items: "item4",
      title: "Select a date range",
      description: "Select a date range to view the timeline",
    },
  ];

  return (
    <>
      <Separator orientation="horizontal" className="grid gap-4" />
      <Card className="h-10/12 w-10/12 flex-col overflow-auto text-left">
        <CardHeader className="">
          <CardTitle>{props.Title}</CardTitle>
          <CardDescription>{props.Description}</CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {values.map((value, index) => (
              <AccordionItem key={index} value={value.items}>
                <AccordionTrigger className="flex items-center justify-between">
                  <div className="flex items-center">
                    <ValueIcon className="mr-2 h-6 w-6" />
                    <span>{value.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <p>{value.description}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </>
  );
}
