import projects from "../../projects.json" assert { type: "json" };

import ProjectCard from "../projects-card";

const Portfolio = () => {
  return (
    <section>
      <h3 className="text-2xl">Projects</h3>
      <div className="md:flex justify-start gap-4 space-y-4 md:space-y-0">
        {projects.map((p) => (
          <ProjectCard key={p.name} project={p} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
