import { PencilIcon, CodeIcon, FilmIcon } from "lucide-react";
import React from "react";

const Services = () => {
  return (
    <section className="px-10 py-4 space-y-8">
      <div className="space-y-2">
        <h3 className="text-2xl">Services I offer</h3>
        <p className="text-medium leading-6 text-neutral-500">
          Freelancer providing services for programming and designing content
          needs.Join me below!
        </p>
      </div>
      <div className="space-y-8 md:space-y-0 md:flex justify-between gap-4">
        <div className="md:w-1/3 border space-y-4 flex flex-col text-center items-center shadow p-10 rounded-xl">
          <PencilIcon size={100} />
          <h3 className="text-xl pt-4 font-bold">Beautiful designs</h3>
          <p className=" leading-6 text-neutral-500">
            Creating elegant designs suited for your needs design theory.
          </p>
          <div className="space-y-1">
            <h4 className="text-lg font-semibold">Design tools I use</h4>
            <p className="text-neutral-500">Illustrator</p>
            <p className="text-neutral-500">Figma</p>
            <p className="text-neutral-500">Photoshop</p>
            <p className="text-neutral-500">Xd</p>
          </div>
        </div>
        <div className="md:w-1/3 border space-y-4 flex flex-col text-center items-center shadow p-10 rounded-xl">
          <CodeIcon size={100} />
          <h3 className="text-xl pt-4 font-bold">Web and mobile apps</h3>
          <p className=" leading-6 text-neutral-500">
            Developping web and mobile full stack applications.
          </p>
          <div className="space-y-1">
            <h4 className="text-lg font-semibold">Programming tools I use</h4>
            <p className="text-neutral-500">ReactJs</p>
            <p className="text-neutral-500">NextJs</p>
            <p className="text-neutral-500">React Native</p>
            <p className="text-neutral-500">Swift</p>
          </div>
        </div>
        <div className="md:w-1/3 border space-y-4 flex flex-col text-center items-center shadow p-10 rounded-xl">
          <FilmIcon size={100} />
          <h3 className="text-xl pt-4 font-bold">Video Editing</h3>
          <p className=" leading-6 text-neutral-500">
            Video Editing and color correction for your video needs.
          </p>
          <div className="space-y-1">
            <h4 className="text-lg font-semibold">Editing tools I use</h4>
            <p className="text-neutral-500">Final cut Pro</p>
            <p className="text-neutral-500">Davinci Studio</p>
            <p className="text-neutral-500">Premiere</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
