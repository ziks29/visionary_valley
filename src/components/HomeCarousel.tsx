// "use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardFooter,
  CardDescription,
  CardTitle,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Car } from "lucide-react";

interface PostData {
  id: string;
  name: string;
  author: string;
  description: string;
  requiredSkills: string[];
  category: string;
  createdAt: string;
  updatedAt: string;
}

const tailwindColors = [
  "red-500",
  "amber-500",
  "green-500",
  "blue-500",
  "indigo-500",
  "purple-500",
  "orange-500",
  "lime-500",
];

function generateRandomPosts() {
  const names = [
    "New Website",
    "New Blockchain",
    "New App",
    "New Game",
    "New AI",
    "New ML",
  ];
  const authors = ["John Doe", "Jane Doe", "John Smith", "Jane Smith"];
  const descriptions = [
    "Lorem",
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero possimus ex totam earum voluptates mollitia. Aut, esse molestias qui quos ipsam quae, nesciunt eveniet corporis asperiores optio mollitia commodi. Magnam.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, voluptatum.",
  ];
  const requiredSkills = [
    "TS",
    "JS",
    "React",
    "Node",
    "MongoDB",
    "GraphQL",
    "Docker",
    "Kubernetes",
    "AWS",
    "GCP",
    "Azure",
  ];
  const categories = [
    "Frontend Development",
    "Backend Development",
    "Blockchain",
    "AI",
    "ML",
    "Game Development",
    "App Development",
    "Web Development",
  ];
  const dateFrom = new Date(2021, 0, 1);
  const dateTo = new Date(2024, 0, 1);

  const returnPost: PostData = {
    //return random post data
    id: Math.random().toString(),
    name: names[Math.floor(Math.random() * names.length)],
    author: authors[Math.floor(Math.random() * authors.length)],
    description: descriptions[Math.floor(Math.random() * descriptions.length)],
    requiredSkills: [
      requiredSkills[Math.floor(Math.random() * requiredSkills.length)],
      requiredSkills[Math.floor(Math.random() * requiredSkills.length)],
      requiredSkills[Math.floor(Math.random() * requiredSkills.length)],
      requiredSkills[Math.floor(Math.random() * requiredSkills.length)],
    ],
    category: categories[Math.floor(Math.random() * categories.length)],
    createdAt: new Date(
      dateFrom.getTime() +
        Math.random() * (dateTo.getTime() - dateFrom.getTime())
    )
      .toISOString()
      .slice(0, 10),
    updatedAt: new Date(
      dateFrom.getTime() +
        Math.random() * (dateTo.getTime() - dateFrom.getTime())
    )
      .toISOString()
      .slice(0, 10),
  };
  return returnPost;
}

function sliceDescription(description: string) {
  //slice description to 100 characters and only show full words
  if (description.length > 80) {
    return description.slice(0, 80).split(" ").slice(0, -1).join(" ") + "...";
  } else {
    return description;
  }
}

export function HomeCarousel({ className }: Readonly<{ className?: string }>) {
  const numberOfItems = 10;
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className={
        "  items-center justify-center mx-auto w-full md:w-10/12" + className
      }
    >
      <CarouselContent>
        {numberOfItems > 0 &&
          [...Array(numberOfItems)].map(generateRandomPosts).map((post) => (
            <CarouselItem
              key={post.id}
              className="items-stretch md:basis-1/2 lg:basis-1/3"
            >
              <Card className="h-full">
                <Image
                  src="https://placehold.co/1200x400.png"
                  alt="Idea"
                  width={1200}
                  height={400}
                  className="p-2 rounded-xl"
                />
                <div className="">
                  <CardHeader className="">
                    <h3 className="leading-[20px] h-[40px] text-md font-bold">
                      {post.name} by {post.author}
                    </h3>
                  </CardHeader>
                  <CardContent className="space-y-1">
                    <CardDescription className="h-[60px]">
                      {sliceDescription(post.description)}
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="flex flex-wrap items-start gap-1 h-[80px]">
                    {post.requiredSkills.map((skill) => (
                      <Badge
                        variant={"outline"}
                        key={skill}
                        className={
                          "bg-" +
                          tailwindColors[
                            Math.floor(Math.random() * tailwindColors.length)
                          ]
                        }
                      >
                        {skill}
                      </Badge>
                    ))}
                  </CardFooter>
                </div>
              </Card>
            </CarouselItem>
          ))}
      </CarouselContent>

      <CarouselPrevious className="hidden md:flex" />
      <CarouselNext className="hidden md:flex" />
    </Carousel>
  );
}
