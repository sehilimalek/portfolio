import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/_components/ui/card";
import { AspectRatio } from "@/_components/ui/aspect-ratio";
import { Badge } from "@/_components/ui/badge";
import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  name: string;
  description: string;
  cover: string;
  github: string;
  demo: string;
  techUsed: string[];
  category: string;
};

const ProjectCard = ({ project }: { project: ProjectCardProps }) => {
  return (
    <Card key={project.name} className="md:w-1/3">
      <AspectRatio ratio={16 / 9}>
        <Image
          src={project.cover}
          width={320}
          height={180}
          alt="project cover image"
        />
      </AspectRatio>
      <CardHeader>
        <CardTitle> {project.name}</CardTitle>
        <CardDescription>{project.category}</CardDescription>
      </CardHeader>
      {/* <CardContent className="text-medium leading-6 text-neutral-500 space-y-4">
        <p>{project.description}</p>
        <div>
          <CardDescription className="font-semibold">Tech :</CardDescription>

          <div className="text-sm flex gap-2 flex-wrap items-center justify-between">
            {project.techUsed.map((t, idx) => (
              <Badge key={idx} className="mt-2">
                {t}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent> */}

      <CardFooter className="gap-4">
        <Badge variant="secondary">
          <Link href={project.github}>Github</Link>
        </Badge>
        <Badge variant="destructive">
          <Link href={project.demo}>Demo</Link>
        </Badge>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
