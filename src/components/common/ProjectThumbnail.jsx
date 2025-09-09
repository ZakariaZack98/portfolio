import Link from "next/link";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const ProjectThumbnail = ({ name, img, stack, slug }) => {
  return (
    <div className="bg-[#1A1A1A] rounded-xl p-7 flex flex-col gap-y-5">
      <picture className="h-100 aspect-video overflow-hidden rounded-lg">
        <img
          src={img}
          alt={`${name} mockup thumbnail`}
          className="h-100 aspect-video rounded-lg hover:scale-110 object-fit object-cover object-center duration-300"
        />
      </picture>
      <h3 className="text-3xl font-semibold">{name}</h3>
      <div className="flex justify-between items-start">
        <div className="stack flex items-center flex-wrap gap-2">
          {stack?.map((tech) => (
            <span key={tech} className="px-3 py-1 rounded border border-[#8a8a8a] bg-[rgba(255,255,255,0.1)]">{tech}</span>
          ))}
        </div>
        <Link href={`/project/${slug}`}>
          <span className="bg-blue-500 rounded-lg flex justify-center items-center text-6xl">
            <FiArrowUpRight />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default ProjectThumbnail;
