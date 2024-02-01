import { MdKeyboardArrowDown } from "react-icons/md";
import HoverList from "./HoverList";
import Flex from "./Layout/Flex";
import { useState } from "react";

const ManuList = () => {
  const [isHover, setHover] = useState(false);
  const handleMouseEnter = () => {
    setHover(true);
  };
  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <div>
      <ul className="flex text-[#fff] items-center justify-center">
        <li className="hover:text-[#A62612] cursor-pointer p-[20px] duration-[300ms]">
          <a href="">Home</a>
        </li>
        <li
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="hover:text-[#A62612] cursor-pointer p-[20px]"
        >
          <a href="">About</a>
          <MdKeyboardArrowDown className="inline-block" />
          {isHover && (
            <div className="absolute bg-[#252628] p-[25px] w-[100%] top-[80%] left-0">
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
        <li className="hover:text-[#A62612] p-[20px] cursor-pointer duration-[300ms]">
          <a href="">Service</a>
          <MdKeyboardArrowDown className="inline-block" />
        </li>
        <li className="hover:text-[#A62612] p-[20px] cursor-pointer duration-[300ms]">
          <a href="">Industries</a>
          <MdKeyboardArrowDown className="inline-block" />
        </li>
        <li className="hover:text-[#A62612] p-[20px] cursor-pointer duration-[300ms]">
          <a href="">Works</a>
          <MdKeyboardArrowDown className="inline-block" />
        </li>
        <li className="hover:text-[#A62612] p-[20px] cursor-pointer duration-[300ms]">
          <a href="">Cloud</a>
        </li>
        <li className="hover:text-[#A62612] p-[20px] cursor-pointer duration-[300ms]">
          <a href="">Blog</a>
        </li>
        <li className="hover:text-[#A62612] p-[20px] cursor-pointer duration-[300ms]">
          <a href="">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default ManuList;
