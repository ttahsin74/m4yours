import React from "react";
import Image from "../Components/Layout/Image";
import ServiceImgOne from "../assets/trusted-1.webp";
import ServiceImgTwo from "../assets/trusted-2.webp";
import ServiceImgThree from "../assets/trusted-3.webp";
import "../Sass/index.scss";

const OurService = () => {
  return (
    <div className="flex items-center">
      <div className="relative w-[50%] h-[145vh]">
        <Image
          imgClassname="rounded-[12px]"
          className="absolute top-[410px] left-[200px] z-30"
          src={ServiceImgOne}
        />
        <Image
          imgClassname="rounded-[12px]"
          className="absolute top-[100px] left-[250px] z-10"
          src={ServiceImgTwo}
        />
        <Image
          imgClassname="rounded-[12px]"
          className="absolute  top-[155px] left-[20px] z-20"
          src={ServiceImgThree}
        />
      </div>
      <div className="w-[40%]">
        <p className="text-[#F1614A] mb-[15px] inline-block text-[14px] bg-[#FFEFEC] py-[10px] px-[20px] rounded-[20px]">
          Top Web And Mobile Apps Development Company
        </p>
        <h2 className="text-[#113759] text-[36px] font-bold">
          Your <span className="text-[#f1614a]">Trusted</span> <br />{" "}
          Development <br /> Partner.
        </h2>
        <p className="text-lg text-[#808291] mb-[30px]">
          Our company has been delivering web and mobile apps to businesses
          around the world since 2008, with a 100% success rate. We offer
          affordable web development services. Design-driven processes and
          performance-driven methods help us deliver the right products and
          servicess
        </p>
        <a
          href=""
          className="custom-underline relative inline-block text-[#113759] font-semibold"
        >
          More About Us
        </a>
      </div>
    </div>
  );
};

export default OurService;
