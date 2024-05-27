"use client";
import Link from "next/link";
import { CommandIcon, Menu, Search } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { UserButton } from "@/components/user-button";

import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";

export default function Dashboard({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link
            href="/"
            className="flex items-center gap-2 text-lg font-semibold md:text-base"
          >
            <CommandIcon className="h-6 w-6" />
            four.two
          </Link>
          <Link
            href="/dashboard"
            className={cn(
              "transition-colors hover:text-foreground",
              pathname === "/dashboard"
                ? "text-foreground"
                : "text-muted-foreground"
            )}
          >
            Dashboard
          </Link>
          <Link
            href="/study"
            className={cn(
              "transition-colors hover:text-foreground",
              pathname === "/study"
                ? "text-foreground"
                : "text-muted-foreground"
            )}
          >
            Study
          </Link>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <Link
                href="/"
                className="flex items-center gap-2 text-lg font-semibold"
              >
                <CommandIcon className="h-6 w-6" />
                <span className="sr-only">four.two</span>
              </Link>
              <Link href="/dashboard" className="hover:text-foreground">
                Dashboard
              </Link>
              <Link
                href="/study"
                className="text-muted-foreground hover:text-foreground"
              >
                Study
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <form className="ml-auto flex-1 sm:flex-initial">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search..."
                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
              />
            </div>
          </form>
          <UserButton />
        </div>
      </header>
      <main className="flex flex-1 flex-col gap-4 md:gap-8">{children}</main>
    </div>
  );
}
