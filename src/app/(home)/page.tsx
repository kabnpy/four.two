import Link from "next/link";
import { cn } from "@/lib/utils";

import { Icons } from "@/components/icons";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";

export default function HomePage() {
  return (
    <main>
      <div className="flex min-h-screen w-screen flex-col items-center justify-center gap-2">
        <Badge variant="secondary">Beta</Badge>
        <h1 className="text-center text-6xl font-bold md:text-8xl">four.two</h1>
        <h2 className="text-lg text-neutral-500">
          Effortless flashcard creation. Learning made fun
        </h2>
        <Link
          href="/dashboard"
          className={cn(buttonVariants({ variant: "default" }), "mt-6 flex gap-2")}
        >
          Get Started
        </Link>
      </div>
    </main>
  );
}
