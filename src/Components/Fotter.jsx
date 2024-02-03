import React from "react";
import Image from "./Layout/Image";
import FotterImg from "../assets/logo-light-fotter.svg";
import { LuLinkedin, LuTwitter, LuFacebook, LuYoutube } from "react-icons/lu";
import { FaBehance, FaInstagram, FaPinterest, FaTiktok } from "react-icons/fa6";

const Fotter = () => {
  return (
    <section>
      <div className="max-w-[1170px] m-auto">
        <div className="lg:flex hidden items-start xl:gap-[90px] lg:gap-[50px] xl:mx-[0px] lg:mx-[30px] mx-[20px] py-7">
          <img src={FotterImg} />
          <p className="text-lg text-[#808291]">
            m4yours, a top web & mobile app development company offering
            innovative solutions for diverse industry verticals. We act as an
            invaluable catalyst for building a culture of innovation. Our
            breakthrough web, mobile and software solutions have the capability
            to challenge the limits and give business a competitive edge.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 py-7 xl:mx-[0px] lg:mx-[30px] mx-[20px] items-center border-b-2 border-[#113759]">
          <LuLinkedin
            size={"20px"}
            className=" hover:cursor-pointer duration-[400ms] text-[#113759] hover:text-[#F1614A]"
          />
          <FaBehance
            size={"20px"}
            className="hover:cursor-pointer duration-[400ms] text-[#113759] hover:text-[#F1614A]"
          />
          <FaInstagram
            size={"20px"}
            className="hover:cursor-pointer duration-[400ms] text-[#113759] hover:text-[#F1614A]"
          />
          <LuTwitter
            size={"20px"}
            className="hover:cursor-pointer duration-[400ms] text-[#113759] hover:text-[#F1614A]"
          />
          <LuFacebook
            size={"20px"}
            className="hover:cursor-pointer duration-[400ms] text-[#113759] hover:text-[#F1614A]"
          />
          <LuYoutube
            size={"20px"}
            className="hover:cursor-pointer duration-[400ms] text-[#113759] hover:text-[#F1614A]"
          />
          <FaPinterest
            size={"20px"}
            className="hover:cursor-pointer duration-[400ms] text-[#113759] hover:text-[#F1614A]"
          />
          <FaTiktok
            size={"20px"}
            className="hover:cursor-pointer duration-[400ms] text-[#113759] hover:text-[#F1614A]"
          />
        </div>
        <div className="p-5 flex flex-wrap justify-between xl:mx-[0px] lg:mx-[10px] mx-[20px] sm:my-0 my-[10px]">
          <p>© 2003 - 2024 m4yours IT. All rights reserved.</p>
          <div>
            <a
              className="text-[#113759] hover:text-[#F1614A] duration-300"
              href=""
            >
              Careear
            </a>
            <span className="mx-2">|</span>
            <a
              className="text-[#113759] hover:text-[#F1614A] duration-300"
              href=""
            >
              Terms of Service
            </a>
            <span className="mx-2">|</span>
            <a
              className="text-[#113759] hover:text-[#F1614A] duration-300"
              href=""
            >
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fotter;
