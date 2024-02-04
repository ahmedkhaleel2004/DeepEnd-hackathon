import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { useState } from "react";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  ValueIcon,
  ArrowRightIcon,
  ArrowDownIcon,
} from "@radix-ui/react-icons";

import { checklistItem } from "./checklist-item";

import { Separator } from "@/components/ui/separator";

interface CardProps {
  Title: string;
  Description: string;
}

export function CardOfTimeline(props: CardProps) {
  const values: { value: string; label: string }[] = [
    {
      value: "item1",
      label: "Objective 1",
    },
    {
      value: "item2",
      label: "Objective 2",
    },
    {
      value: "item3",
      label: "Objective 3",
    },
    {
      value: "item4",
      label: "Objective 4",
    },
    {
      value: "item5",
      label: "Objective 5",
    },
  ];

  const [selectedObjective, setSelectedObjective] = useState("");

  return (
    <>
      <Separator orientation="horizontal" className="" />
      <Card className="flex flex-col text-left">
        <CardHeader className="">
          <CardTitle>{props.Title}</CardTitle>
          <CardDescription>{props.Description}</CardDescription>
        </CardHeader>
        <CardContent>
          <ToggleGroup
            type="single"
            className="flex flex-col items-start gap-2"
            variant="outline"
          >
            {values.map((value, index) => {
              const isSelected = selectedObjective === value.value;
              return (
                <ToggleGroupItem
                  key={index}
                  aria-label={value.value}
                  value={value.value}
                  className="flex w-full justify-between"
                  onClick={() => setSelectedObjective(value.value)}
                >
                  <span>{value.label}</span>
                  <div className="relative">
                    <ArrowRightIcon
                      className={`absolute h-4 w-4 transition-opacity duration-300 ${isSelected ? "opacity-0" : "opacity-100"}`}
                    />
                    <ArrowDownIcon
                      className={`absloute h-4 w-4 transition-opacity duration-300 ${isSelected ? "opacity-100" : "opacity-0"}`}
                    />
                  </div>
                </ToggleGroupItem>
              );
            })}
          </ToggleGroup>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </>
  );
}
