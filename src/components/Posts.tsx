"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import Image from "next/image";
import { Badge } from "./ui/badge";
import React, { useEffect, useState, useRef, MouseEventHandler } from "react";
// Idea schema from prisma for reference to interface
// model Idea {
//   id              String   @id @default(auto()) @map("_id") @db.ObjectId
//   name            String   @unique
//   author          User     @relation(fields: [authorId], references: [id])
//   authorId        String   @db.ObjectId
//   description     String
//   requiredSkills  String[]
//   category        String
//   createdAt       DateTime @default(now())
//   updatedAt       DateTime @updatedAt
// }

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
  //slice description to 200 characters and only show full words
  if (description.length > 200) {
    return description.slice(0, 200).split(" ").slice(0, -1).join(" ") + "...";
  } else {
    return description;
  }
}

export function Posts({ className }: Readonly<{ className?: string }>) {
  const postsDivRef = useRef<HTMLDivElement>(null);
  const [numberOfPosts, setNumberOfPosts] = useState(8);
  const loadMorePosts: MouseEventHandler = (e) => {
    const btn = e.target as HTMLButtonElement;
    btn.disabled = true;
    btn.className += " animate-pulse opacity-50";
    setTimeout(() => {
      btn.disabled = false;
      btn.className = btn.className.replace(
        " animate-pulse opacity-50",
        ""
      ) as string;
      setNumberOfPosts(numberOfPosts + 4);
    }, 1000);
  };

  return (
    <>
      <div
        ref={postsDivRef}
        className={
          className +
          " grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 auto-rows-fr"
        }
      >
        {/* Add posts from number of posts */}
        {numberOfPosts > 0 &&
          [...Array(numberOfPosts)].map(generateRandomPosts).map((post) => (
            <Card key={post.id} className="h-max-[600px]">
              <Image
                src="https://placehold.co/800x400.png"
                alt="Idea"
                width={800}
                height={400}
                // fill
                className="p-2 rounded-xl"
              />
              <CardContent>
                <CardHeader>
                  <CardTitle>{post.name}</CardTitle>
                  <CardDescription>{post.author}</CardDescription>
                </CardHeader>
                <CardContent>
                  <CardDescription className="h-[150px]">
                    {sliceDescription(post.description)}
                  </CardDescription>
                </CardContent>
                <CardFooter className="flex flex-col flex-wrap gap-2 items-start">
                  <CardDescription className="border-b dark:border-slate-50">
                    {post.category}
                  </CardDescription>
                  <div className="h-[50px] overflow-hidden space-y-2 text-left left-0 my-2">
                    <div className="flex flex-wrap gap-2">
                      {post.requiredSkills.map((skill) => (
                        <Badge
                          variant={"outline"}
                          className="bg-green-500 text-white"
                          key={skill}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="text-xs  text-right w-full text-slate-900 dark:text-slate-500">
                    <div>Created: {post.createdAt}</div>
                    <div>Updated: {post.updatedAt}</div>
                  </div>
                </CardFooter>
              </CardContent>
            </Card>
          ))}
      </div>
      <div className="flex justify-center mt-5">
        <Button onClick={loadMorePosts} className="col-start-2 col-end-3">
          Load more
        </Button>
      </div>
    </>
  );
}
