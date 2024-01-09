import Link from "next/link";
import { Github } from "lucide-react";
import { TwitterIcon } from "lucide-react";
import { Button } from "./ui/button";

/**
 * The footer component.
 *
 * Layout of the footer:
 * (from left to right)
 * - The name of the website with a copyright
 *  symbol and the current year.
 * - A link to the GitHub repository of the project.
 *
 */

export function Footer() {
  return (
    <footer className="container flex items-center justify-between mt-12 h-14 p-4">
      <div className="flex items-center">
        <p className="">Idea Hunter © {new Date().getFullYear()}</p>
      </div>
      <div className="flex gap-2 items-center">
        <Link href="http://GitHub.com/ziks29">
          <Button
            type="submit"
            size="icon"
            variant="outline"
            className="rounded-full"
          >
            <Github className="h-8 w-8 rotate-0 scale-75 transition-all" />
          </Button>
        </Link>
        <Link href="http://twitter.com/ushpuras">
          <Button
            type="submit"
            size="icon"
            variant="outline"
            className="rounded-full"
          >
            <TwitterIcon className="h-8 w-8 rotate-0 scale-75 transition-all" />
          </Button>
        </Link>
      </div>
    </footer>
  );
}
