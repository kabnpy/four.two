import { RATING_TO_KEY } from "@/lib/common";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { cn } from "@/lib/utils";
import { intlFormatDistance } from "date-fns";

import {createEmptyCard, formatDate, fsrs, generatorParameters, Rating, Grades} from 'ts-fsrs';

const params = generatorParameters({ enable_fuzz: true });
const f = fsrs(params);
const card = createEmptyCard(new Date());// createEmptyCard();
const now = new Date();// new Date();
const scheduling_cards = f.repeat(card, now);

// console.log(scheduling_cards);
Grades.forEach(grade => { // [Rating.Again, Rating.Hard, Rating.Good, Rating.Easy]
    const { log, card } = scheduling_cards[grade];
    console.group(`${Rating[grade]}`);
    console.table({
        [`card_${Rating[grade]}`]: {
            ...card,
            due: formatDate(card.due),
            last_review: formatDate(card.last_review as Date),
        },
    });
    console.table({
        [`log_${Rating[grade]}`]: {
            ...log,
            review: formatDate(log.review),
        },
    });
    console.groupEnd();
    console.log('----------------------------------------------------------------');
});

function RatingButton({
  rating,
  dateString,
}: {
  rating: string;
  dateString: string;
}) {
  const key = RATING_TO_KEY[rating] ?? "";
  return (
    <TooltipProvider key={rating}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            className="flex h-16 flex-col gap-0 transition sm:h-full"
            variant={"secondary"}
          >
            <div>{rating}</div>
            <div className="sm:hidden">{dateString}</div>
          </Button>
        </TooltipTrigger>
        <TooltipContent className="flex items-center">
          <p>{dateString}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

/**
 * The buttons to rate a flashcard.
 */
export default function RatingButtons() {
  return (
    <div
      className={cn(
        "grid h-full grid-cols-2 gap-x-2 gap-y-2 shadow-sm sm:h-12 sm:w-96 md:grid-cols-4"
      )}
    >
      {Grades.map((grade) => {
        const { log, card } = scheduling_cards[grade];
        return (
          <RatingButton
            key={Rating[grade]}
            rating={Rating[grade]}
            dateString={intlFormatDistance(
              formatDate(card.due),
              new Date()
            )}
          />
        );
      })}
    </div>
  );
}

RatingButtons.displayName = "RatingButtons";
