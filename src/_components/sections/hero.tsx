import { Github, Twitter } from "lucide-react";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="p-4 grid md:grid-cols-2 md:grid-rows-1 md:place-items-end ">
      <div className="text-center p-10 space-y-8  md:col-start-2">
        <div className="space-y-2">
          <h2 className="text-5xl font-medium">Malek Sehili</h2>
          <h3 className="text-2xl ">Web and mobile developper</h3>
          <p className="text-medium leading-7 text-neutral-500">
            Freelancer providing services for programming and designing content
            needs.Join me below!
          </p>
        </div>
        <div className="flex justify-center gap-10">
          <Github size={40} />
          <Twitter size={40} />
        </div>
      </div>

      <div className="relative mx-auto bg-gradient-to-b from-black to-neutral-800 rounded-full w-80 h-80 mt-10 md:col-start-1 md:row-start-1 border-8 ">
        <Image
          src="/malek.png"
          alt="avatar"
          width={320}
          height={320}
          className="absolute -top-[50px] "
        />
      </div>
    </section>
  );
};

export default Hero;
