import GradientButton from "@/components/common/GradientButton";
import SoftButton from "@/components/common/SoftButton";
import _ from "@/lib/lib";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";

const projectsData = _.projectDetails;

export async function generateStaticParams() {
  return projectsData?.map((project) => ({ slug: project.slug }));
}

const ProjectPage = async ({ params }) => {
  const { slug } = await params;
  const project = projectsData.find((project) => project.slug === slug);
  return (
    <div>
      <div className=" container mx-auto my-25">
        <div className="flex flex-col items-center gap-5">
          <h1 className="md:text-6xl text-4xl font-black text-center">{project.name}</h1>
          <h5 className="text-xl text-center w-9/10 mx-auto">{project.desc}</h5>
          <div className="flex items-center gap-5">
            <Link href={project.live} target="_blank">
              <GradientButton label={"View live"} />
            </Link>
            <Link href={project.source} target="_blank">
              <SoftButton
                label={
                  <span className="flex items-center gap-2">
                    <FaGithub /> View Source
                  </span>
                }
              />
            </Link>
          </div>
        </div>
        <picture>
          <img src={project.thumbnail} alt="project thumbnail picture" className="my-20 w-9/10 rounded-2xl mx-auto" />
        </picture>
        <div className="flex flex-wrap justify-center items-center gap-2 mb-20 max-w-9/10 mx-auto">
          {project.stack?.map((tech) => (
            <span key={tech} className="px-3 py-1 rounded border border-[#8a8a8a] bg-[rgba(255,255,255,0.1)] ">
              {tech}
            </span>
          ))}
        </div>
        <div className="features">
          <h3 className="text-3xl text-center">Highlight features:</h3>
          <ul className="list-disc my-5">
            {
              project.features?.map(feature => (
                <li key={feature} className="ms-10 leading-8">{feature}</li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
