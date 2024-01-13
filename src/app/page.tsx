import type { Metadata } from "next";
import { HomeCarousel } from "@/components/HomeCarousel";
import { Posts } from "@/components/Posts";
import { Divider } from "@/components/ui/divider";
export const metadata: Metadata = {
  title: "Visionary Valley",
  description: "A place to share your ideas and find people to work with.",
};

export default function Homepage() {
  return (
    // Centered text in the middle of the page with a flexbox
    <div className="container flex flex-col gap-4 pt-4">
      {/* Hero Section */}
      <section className="flex flex-col gap-10">
        <div>
          <h1 className="text-4xl text-center mb-2">
            Welcome to Visionary Valley!
          </h1>
          <p className="text-center">
            A place to share your ideas and find people to work with.
          </p>
        </div>
        <div>
          <p className="text-center font-bold mb-2">
            Check out the popular ideas below
          </p>
          <HomeCarousel className="" />
        </div>
      </section>
      <section className="mt-20">
        <h2 className="text-2xl font-bold text-center">
          Check out the latest ideas
        </h2>
        <Posts className="mt-5" />
      </section>
    </div>
  );
}
