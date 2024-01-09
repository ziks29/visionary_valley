import Link from "next/link";
import { ThemeSwitchButton } from "@/components/ThemeSwitchButton";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { LogInIcon, Search } from "lucide-react";

export function Header() {
  return (
    <header className="container flex items-center justify-between p-4">
      <div className="flex items-center">
        <Link href="/" className="text-2xl">
          Idea Hunter
        </Link>
      </div>
      <div className="flex gap-2 items-center">
        <Button className="mr-2 hidden md:block">Post an Idea</Button>
        <ThemeSwitchButton />
        <div className=" items-center gap-1 hidden md:flex">
          <Input type="search" placeholder="Search" />
          <Button type="submit" size="icon" variant="outline">
            <Search className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
          </Button>
        </div>
        <div className="flex gap-2">
          <Button>
            Login
            <LogInIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all ml-2" />
          </Button>
        </div>
      </div>
    </header>
  );
}
