"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import "@/styles/flashcard.css";
import RatingButtons from "./rating-buttons";

export function Flashcard({
  card,
}: {
  card: {
    front: { heading: string; subheading?: string };
    back: { heading: string; description: string };
  };
}): React.ReactElement {
  const [flipped, setFlipped] = useState(false);

  return (
    <button
      className={cn(
        "flashcard min-w-full max-w-6xl cursor-default",
        flipped && "flipped"
      )}
      onClick={() => {
        setFlipped(!flipped);
      }}
      type="button"
    >
      <div className="card">
        <Card className="front flex flex-col items-center justify-center gap-2 p-8 text-3xl">
          <CardTitle className="select-none">{card.front.heading}</CardTitle>
          {card.front.subheading ? (
            <CardDescription className="text-lg font-medium text-muted-foreground">
              {card.front.subheading}
            </CardDescription>
          ) : null}
        </Card>
        <Card className="back flex flex-col items-center justify-center gap-4 p-6">
          <CardTitle className="select-none text-xl">
            {card.back.heading}
          </CardTitle>
          <CardContent className="select-none pb-0 text-sm text-muted-foreground">
            {card.back.description}
          </CardContent>
          <CardFooter>
            <RatingButtons />
          </CardFooter>
        </Card>
      </div>
    </button>
  );
}
