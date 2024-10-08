"use client";

import { signIn, signOut, useSession } from "next-auth/react";

import { LogOut, MoonStar, Settings, CircleUserRound } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
  DropdownMenuSubContent,
} from "@/components/ui/dropdown-menu";

export function UserButton(): React.ReactElement {
  const session = useSession();
  const { theme, setTheme } = useTheme();
  const router = useRouter();

  if (session.data)
    return (
      <DropdownMenu>
        <DropdownMenuTrigger
          aria-label="User dropdown"
          className="rounded-full focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        >
          <Avatar className="h-8 w-8">
            {session.data.user.image ? (
              <AvatarImage
                alt="Profile picture"
                src={session.data.user.image}
              />
            ) : null}
            <AvatarFallback>
              <CircleUserRound />
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mx-2">
          <DropdownMenuLabel className="pb-0">
            {session.data.user.name}
          </DropdownMenuLabel>
          <DropdownMenuLabel className="pt-0 text-xs font-normal text-muted-foreground">
            {session.data.user.email}
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <MoonStar className="mr-2 h-4 w-4" /> Theme
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuCheckboxItem
                  checked={theme === "system"}
                  onClick={() => {
                    setTheme("system");
                  }}
                >
                  {/* <IconDeviceDesktop className="mr-2 h-4 w-4" /> */}
                  System
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={theme === "light"}
                  onClick={() => {
                    setTheme("light");
                  }}
                >
                  {/* <IconSun className="mr-2 h-4 w-4" /> */}
                  Light
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={theme === "dark"}
                  onClick={() => {
                    setTheme("dark");
                  }}
                >
                  {/* <IconMoon className="mr-2 h-4 w-4" /> */}
                  Dark
                </DropdownMenuCheckboxItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <Link href="/settings">
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" /> Settings
            </DropdownMenuItem>
          </Link>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={async () => {
              router.push("/");
              await signOut();
            }}
          >
            <LogOut className="mr-2 h-4 w-4" />
            Sign out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="rounded-full focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
        <Avatar className="h-8 w-8">
          <AvatarFallback>
            <CircleUserRound />
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem
          onClick={async () => {
            await signIn();
          }}
        >
          Sign in
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}