import React from "react";
import Flex from "./Layout/Flex";
import Image from "./Layout/Image";
import navBlackIcon from "../assets/nav-logo.svg";
import ManuList from "./ManuList";

const Navber = () => {
  return (
    <section className="bg-[#1C1C1F] sticky top-0 z-50 w-full">
      <nav className="min-w-[1024px] m-auto">
        <Flex className="justify-between items-center px-[64px] py-[6px]">
          <Image className="my-[20px]" src={navBlackIcon} alt={"Nav Icon"} />
          <ManuList />
          <button className="text-[#A62612] px-[18px] py-[8px] bg-[#FFF] rounded-[20px] hover:bg-[#EA5741] hover:text-[#FFF] duration-[300ms]">
            Get in Touch
          </button>
        </Flex>
      </nav>
    </section>
  );
};

export default Navber;
