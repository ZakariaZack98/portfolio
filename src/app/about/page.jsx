import Stack from "@/components/home/Stack";
import React from "react";

const About = () => {
  return (
    <div>
      <div className="lg:h-screen h-fit my-30 lg:my-0 container mx-auto flex lg:flex-row flex-col justify-between gap-x-10 items-center gap-y-10 lg:gap-y-0">
        <div className="left w-full lg:w-2/3">
          <div className="title flex flex-col items-center lg:items-start">
            <h4 className="font-light text-2xl">Hello, I'm</h4>
            <h1 className="lg:text-5xl text-3xl text-center lg:text-start font-light">Sadee Muhammad</h1>
            <h1 className="md:text-[130px] text-6xl md:leading-32 leading-16 font-light text-blue-500">Zakaria</h1>
            <p className="text-center lg:text-start md:max-w-8/10 max-w-9/10 lg:max-w-fit lg:my-0 my-13 ">
              I am a <strong>front-end developer</strong> based in Dhaka, Bangladesh with a focus on building <strong>clear, accessible, and reliable </strong> user interfaces. My
              work centers on writing well-structured HTML, CSS, and JavaScript, and I use <strong>modern frameworks</strong> and tools
              when they help create <strong>efficient and maintainable</strong> solutions. I pay close attention to both design details
              and usability to ensure that the interfaces I build perform well for users across devices.
              <br></br>
              <br></br>
              I approach each project with an emphasis on <strong>clarity, consistency, and long-term maintainability</strong>,
              aiming to deliver work that is both functional and straightforward to build upon.
            </p>
          </div>
        </div>
        <div className="right w-full lg:w-1/3 flex justify-center items-center">
          <picture>
            <img
              src="/images/headshot.png"
              alt="headshot pic"
              className="w-80 rounded-xl"
              style={{ boxShadow: "rgba(255, 255, 255, 0.15) 0px 5px 15px" }}
            />
          </picture>
        </div>
      </div>
      <Stack />
    </div>
  );
};

export default About;
