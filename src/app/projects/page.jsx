import ProjectThumbnail from "@/components/common/ProjectThumbnail";
import _ from "@/lib/lib";
import React from "react";

const Portfolio = () => {
  const projectsData = _.projectDetails;
  return (
    <div>
      <div className="mt-30 min-h-screen container mx-auto ">
        <h1 className="text-5xl font-bold text-center my-20">My Works</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-30">
          {projectsData?.map((project) => (
            <ProjectThumbnail
              key={project.slug}
              name={project.name}
              stack={project.stack}
              img={project.thumbnail}
              slug={project.slug}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
