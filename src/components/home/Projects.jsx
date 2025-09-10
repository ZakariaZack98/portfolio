import Link from "next/link";
import React from "react";
import GradientButton from "../common/GradientButton";
import ProjectThumbnail from "../common/ProjectThumbnail";
import _ from "@/lib/lib";

const Projects = () => {

  const projectsData = _.projectDetails;

  return (
    <div className=" bg-black">
      <div className="container mx-auto heading flex flex-col gap-y-10 py-20">
        <div className="flex flex-col md:flex-row md:justify-between justify-center items-center gap-5 md:gap-0">
          <h1 className="text-5xl font-bold">My Portfolio</h1>
          <Link href="/projects">
            <GradientButton label={"All Projects >"} />
          </Link>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {
            projectsData.slice(0, 4)?.map(project => (
              <ProjectThumbnail key={project.slug} name={project.name} stack={project.stack} img={project.thumbnail} slug={project.slug}/>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Projects;
