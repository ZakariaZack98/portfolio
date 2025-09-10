import ProjectThumbnail from "@/components/common/ProjectThumbnail";
import _ from "@/lib/lib";
import React from "react";

const Portfolio = () => {
  const projectsData = _.projectDetails;
  return (
    <div className="bg-black">
      <div className="pt-10 pb-30 min-h-screen container mx-auto ">
        <h1 className="text-5xl font-bold text-center my-20" data-aos="fade-up" data-aos-duration="400">
          My Works
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projectsData?.map((project, idx) => (
            <div key={project.slug} data-aos={idx % 2 == 0 ? "fade-right" : "fade-left"} data-aos-duration="500" className="justify-self-stretch">
              <ProjectThumbnail
                name={project.name}
                stack={project.stack}
                img={project.thumbnail}
                slug={project.slug}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
