import React from "react";
import StackCard from "../common/StackCard";
import _ from "@/lib/lib";

const Stack = () => {

  const techStackData = _.techStackDetails;

  return (
    <div className=" bg-black">
      <div className="container mx-auto flex flex-col gap-y-5 py-20">
        <h3 className="text-5xl font-bold">Current Technologies</h3>
        <p className="lg:max-w-6/10 text-sm xxl:text-base">
          I'm proficient in a range of modern technologies that empower me to build highly functional solutions. These
          are some of my main technologies.
        </p>
        <div className="grid grid-cols-4 gap-3 my-10">
          {
            techStackData?.map(tech => (
              <StackCard key={tech.name} name={tech.name} desc={tech.desc} logo={tech.logo} logoBgColor={tech.logoBgColor}/>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Stack;
