import Link from "next/link";
import { type CardSet } from "@/types";
import { Clock } from "lucide-react";
import { format } from "date-fns";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function MenuCard({
  cardSet,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  cardSet: CardSet;
}): React.ReactElement {
  return (
    <Link
      aria-description={cardSet.description}
      aria-label={cardSet.title}
      className="max-w-full"
      href={`/study/sets/${cardSet.slug}`}
    >
      <Card
        className={cn(
          "h-48 min-h-min w-full min-w-full max-w-[580px] flex-row gap-6 md:flex",
          className
        )}
        {...props}
      >
        <CardHeader>
          <div className="flex">
            <Clock className="mr-1 h-4 w-4" />
            <span className="text-sm">{format(Date.now(), "MMM d")}</span>
          </div>
          <CardTitle className="whitespace-break-spaces text-lg font-semibold">
            {cardSet.title}
          </CardTitle>
          <CardDescription className="line-clamp-5">
            {cardSet.description}
          </CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
}
