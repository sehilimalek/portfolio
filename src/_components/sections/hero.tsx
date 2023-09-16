import { Github, Twitter } from "lucide-react";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section>
      <div className="relative mx-auto bg-gradient-to-b from-black to-neutral-800 rounded-full w-52 h-52 border-8 ">
        <Image
          src="/malek.png"
          alt="avatar"
          width={200}
          height={200}
          className="absolute -top-[35px] "
        />
      </div>
      <div className="text-center p-10 space-y-5">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-medium">Malek Sehili</h2>
          <h3 className="text-xl font-semibold md:text-2xl ">
            Web and mobile developper
          </h3>
          <p className="text-medium leading-7 text-neutral-500">
            Freelancer providing services for programming and designing content
            needs.Join me below!
          </p>
        </div>
      </div>
      <div className="flex justify-center gap-10">
        <Github size={40} />
        <Twitter size={40} />
      </div>
    </section>
  );
};

export default Hero;
