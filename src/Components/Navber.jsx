import React, { useState } from "react";
import Flex from "./Layout/Flex";
import Image from "./Layout/Image";
import navBlackIcon from "../assets/nav-logo.svg";
import ManuList from "./ManuList";
import { TiThMenu } from "react-icons/ti";

const Navber = () => {
  const [isMenuVisible, setMenuVisibility] = useState(false);
  const handleMenuButton = () => {
    setMenuVisibility(!isMenuVisible);
  };
  const handleMenuClose =()=>{
    setMenuVisibility(false)
  }
  return (
    <section className=" sticky top-0 z-50 w-full">
      <nav className="m-auto bg-[#1C1C1F] relative -z-20">
        <Flex className="justify-between items-center xl:px-[50px] lg:px-[25px] sm:px-[40px] px-[10px] py-[6px]">
          <div
            className="lg:hidden text-[#444] hover:cursor-pointer"
            onClick={handleMenuButton}
          >
            <TiThMenu className=" text-[#444]" size={"30px"} />
            
          </div>
          <Image className="my-[20px]" src={navBlackIcon} alt={"Nav Icon"} />
          <ManuList isVisible={isMenuVisible} handleMenuClose={handleMenuClose}/>
          <button className="text-[#A62612] lg:text-[18px] sm:text-[16px] text-[14px] lg:px-[18px] sm:px-[16px] px-[12px] lg:py-[8px] py-[6px] bg-[#FFF] rounded-[20px] hover:bg-[#EA5741] hover:text-[#FFF] duration-[300ms]">
            Get in Touch
          </button>
        </Flex>
      </nav>
    </section>
  );
};

export default Navber;
