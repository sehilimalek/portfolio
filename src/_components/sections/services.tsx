import { PencilIcon, CodeIcon, FilmIcon } from "lucide-react";

const Services = () => {
  return (
    <section>
      <h3 className="text-2xl">Services I offer</h3>

      <div className="md:flex justify-between gap-2">
        <div className="space-y-2 flex flex-col text-center items-center p-3 ">
          <PencilIcon size={60} />
          <h3 className="text-xl pt-4 font-bold">Beautiful designs</h3>
          <p className=" leading-6 text-neutral-500">
            Creating elegant designs suited for your needs design theory.
          </p>
        </div>
        <div className="space-y-2 flex flex-col text-center items-center p-3 ">
          <CodeIcon size={60} />
          <h3 className="text-xl pt-4 font-bold">Web/Mobile apps</h3>
          <p className=" leading-6 text-neutral-500">
            Developping web and mobile full stack applications.
          </p>
        </div>
        <div className="space-y-2 flex flex-col text-center items-center p-3 ">
          <FilmIcon size={60} />
          <h3 className="text-xl pt-4 font-bold">Video Editing</h3>
          <p className=" leading-6 text-neutral-500">
            Video Editing and color correction for your video needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
