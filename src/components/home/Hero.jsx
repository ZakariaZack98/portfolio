import React from "react";
import GradientButton from "../common/GradientButton";
import SoftButton from "../common/SoftButton";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="h-screen container mx-auto hero bg-center bg-cover flex justify-between items-center">
      <div className="left w-1/2 h-full flex flex-col gap-y-5 xl:gap-y-10 justify-center">
        <div className="title">
          <h1 className="font-black text-6xl text-white">Frontend</h1>
          <h1 className="font-black text-6xl text-blue-500">Developer.</h1>
        </div>
        <p className="intro text-xl">I create intuitive, visually stunning and highly functional web applications.</p>
        <div className="btnGrp flex gap-x-5">
          <Link href={'/portfolio'}>
            <GradientButton label={'See my work >'}/>
          </Link>
          <Link href={'/CV.pdf'} download={'CV.pdf'} target="_blank" rel="noopener norefferer">
            <SoftButton label={'Download Resume'}/>
          </Link>
        </div>
      </div>
      <div className="right h-full w-1/2">
        <picture className="w-full h-full flex justify-end items-center">
          <img
            src="/images/cover-square.jpg"
            alt="cover_image"
            className="object-cover object-fit h-5/7 mt-15 rounded-2xl"
          />
        </picture>
      </div>
    </div>
  );
};

export default Hero;
