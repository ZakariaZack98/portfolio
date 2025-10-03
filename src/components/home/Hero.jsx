import React from "react";
import GradientButton from "../common/GradientButton";
import SoftButton from "../common/SoftButton";
import Link from "next/link";
import { PiMapPinAreaFill } from "react-icons/pi";
import { FaDownload } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="bgLayer bg-cover bg-center">
      <div className="grad-overlay">
        <div className="h-screen container mx-auto flex flex-wrap lg:flex-nowrap justify-between items-center lg:translate-0 translate-y-30">
        <div className="left lg:w-1/2 w-full lg:h-full h-fit flex flex-col gap-y-5 xl:gap-y-10 justify-center items-center lg:items-start">
          <div className="title flex flex-col items-center lg:items-start" data-aos="fade-up" data-aos-duration="500">
            <h1 className="font-black text-6xl text-white">Frontend</h1>
            <h1 className="font-black text-6xl text-blue-500">Developer.</h1>
            <div className="flex items-center my-2 gap-x-2">
              <span className="text-xl text-blue-500">
                <PiMapPinAreaFill />
              </span>{" "}
              <span className="font-semibold">Based in Bangladesh</span>
            </div>
          </div>
          <p
            className="intro lg:text-xl text-base lg:max-w-full lg:text-start text-center max-w-9/10 mx-auto lg:mx-0"
            data-aos="flip-up"
            data-aos-duration="500">
            I create intuitive, visually stunning and highly functional web applications.
          </p>
          <div className="btnGrp flex justify-center items-center flex-wrap md:flex-nowrap gap-5" data-aos="zoom-in" data-aos-duration="500" data-aos-delay="500">
            <Link href={"/projects"}>
              <GradientButton label={"See my work >"} />
            </Link>
            <Link href={"/Sadee_Muhammad_Zakaria-Web_Developer.pdf"} download={"Sadee_Muhammad_Zakaria-Web_Developer.pdf"} target="_blank" rel="noopener norefferer">
              <SoftButton label={<span><FaDownload className="inline me-2"/>Download Resume</span>} />
            </Link>
          </div>
        </div>
        <div className="right h-full mx-auto lg:w-1/2">
          <picture className="lg:w-full w-9/10 mx-auto lg:h-full h-fit flex justify-end items-center">
            <img
              src="/images/cover-square.jpg"
              alt="cover_image"
              className="object-cover object-fit h-5/7 xxl:scale-80 mt-15 rounded-2xl"
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-delay="700"
            />
          </picture>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Hero;
