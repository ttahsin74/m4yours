import { MdKeyboardArrowDown } from "react-icons/md";
import HoverList from "./HoverList";
import Flex from "./Layout/Flex";
import { useState } from "react";

const ManuList = ({ isVisible }) => {
  const [isHover, setHover] = useState(false);
  const handleMouseEnter = () => {
    setHover(true);
  };
  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <ul
      className={`lg:text-[#fff] text-[#000]  items-center justify-center py-[10px] xl:flex-row lg:flex lg:static absolute lg:bg-transparent bg-[#ffffff] top-[92px] left-0 ${
        isVisible ? "left-0" : "left-[-120%]"
      } text-center  lg:w-auto sm:w-[375px] w-screen lg:h-auto h-screen duration-[700ms]`}
    >
      <li className="hover:text-[#A62612] cursor-pointer py-[10px] lg:py-[20px] xl:px-[25px] lg:px-[10px] duration-[300ms]">
        <a href="">Home</a>
      </li>
      <li
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="hover:text-[#A62612] cursor-pointer py-[10px] lg:py-[20px] xl:px-[25px] lg:px-[10px]"
      >
        <a href="">About</a>
        <MdKeyboardArrowDown className="inline-block" />
        {isHover && (
          <div className="lg:absolute static lg:mt-0 mt-[10px] bg-[#252628] p-[25px] w-[100%] top-[80%] left-0">
            <Flex className="justify-center gap-[120px]">
              <div>
                <HoverList
                  className="font-bold text-[16px] py-[12px]"
                  listName="Overview"
                />
                <HoverList listName="Our Team" />
                <HoverList listName="Blog" className="my-[5px]" />
              </div>
              <div>
                <HoverList
                  listName="Insights"
                  className="font-bold text-[16px] py-[12px]"
                />
                <HoverList listName="Contact Us" />
                <HoverList listName={"Career"} className="my-[5px]" />
              </div>
            </Flex>
          </div>
        )}
      </li>
      <li className="hover:text-[#A62612] lg:py-[20px] py-[10px] xl:px-[25px] lg:px-[10px] cursor-pointer duration-[300ms]">
        <a href="">Service</a>
        <MdKeyboardArrowDown className="inline-block" />
      </li>
      <li className="hover:text-[#A62612] lg:py-[20px] py-[10px] xl:px-[25px] lg:px-[10px] cursor-pointer duration-[300ms]">
        <a href="">Industries</a>
        <MdKeyboardArrowDown className="inline-block" />
      </li>
      <li className="hover:text-[#A62612] lg:py-[20px] py-[10px] xl:px-[25px] lg:px-[10px] cursor-pointer duration-[300ms]">
        <a href="">Works</a>
        <MdKeyboardArrowDown className="inline-block" />
      </li>
      <li className="hover:text-[#A62612]lg:py-[20px] py-[10px] xl:px-[25px] lg:px-[10px] cursor-pointer duration-[300ms]">
        <a href="">Cloud</a>
      </li>
      <li className="hover:text-[#A62612] lg:py-[20px] py-[10px] xl:px-[25px] lg:px-[10px] cursor-pointer duration-[300ms]">
        <a href="">Blog</a>
      </li>
      <li className="hover:text-[#A62612] lg:py-[20px] py-[10px] xl:px-[25px] lg:px-[10px] cursor-pointer duration-[300ms]">
        <a href="">Contact</a>
      </li>
    </ul>
  );
};

export default ManuList;
