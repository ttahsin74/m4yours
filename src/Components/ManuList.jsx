import { MdKeyboardArrowDown } from "react-icons/md";
import HoverList from "./HoverList";
import Flex from "./Layout/Flex";
import { useState } from "react";
import MenuLogo from "../assets/logo-light-fotter.svg";
import { IoCloseSharp } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";

const ManuList = ({ isVisible, handleMenuClose }) => {
  const [listShow, setListShow] = useState(false);
  const handleListShow = (e) => {
    e.preventDefault();
    if (window.innerWidth <= 1023) {
      setListShow(!listShow);
    }
  };
  return (
    <ul
      className={`lg:text-[#fff] text-[#000]  items-center justify-center py-[10px] xl:flex-row lg:flex lg:static absolute lg:bg-transparent bg-[#ffffff] top-[0px] left-0 ${
        isVisible ? "left-0" : "left-[-120%]"
      } px-7  lg:w-auto sm:w-[375px] w-screen duration-[700ms] overflow-y-auto max-h-screen`}
    >
      <div className="lg:hidden flex items-center justify-between py-5  border-b-red border-b-2">
        <img src={MenuLogo} />
        <IoCloseSharp
          onClick={handleMenuClose}
          className=" text-[#e94646] p-2 bg-[#f0e9e9] rounded-full"
          size={"40px"}
        />
      </div>
      <li className="hover:text-[#A62612] cursor-pointer py-[10px] lg:py-[20px] xl:px-[22px] lg:px-[10px] duration-[300ms]">
        <a href="">Home</a>
      </li>
      <li
        onClick={handleListShow}
        className={`hover:text-[#A62612] cursor-pointer py-[10px] lg:py-[20px] xl:px-[22px] lg:px-[10px] group lg:block grid grid-cols-2  gap-5`}
      >
        <a href="">About</a>
        <MdKeyboardArrowDown className="lg:inline-block hidden " />
        <FaPlus className="block lg:hidden ml-auto" />
        <ul
          className={`bg-[#252628] lg:absolute ${
            listShow ? "static" : "absolute"
          } w-full p-[25px] lg:top-0 top-[-200px] left-0 lg:group-hover:[80px] lg:scale-y-0 duration-300 lg:group-hover:top-[80px] lg:group-hover:scale-y-100 lg:opacity-0 lg:group-hover:opacity-100 lg:col-span-0 col-span-2 transition-height`}
        >
          <div>
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
        </ul>
        {/* {isHover && (
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
        )} */}
      </li>
      <li className="hover:text-[#A62612] lg:py-[20px] py-[10px] xl:px-[22px] lg:px-[10px] cursor-pointer duration-[300ms] lg:block flex justify-between">
        <a href="">Service</a>
        <MdKeyboardArrowDown className="lg:inline-block hidden " />
        <FaPlus className="inline-block lg:hidden " />
      </li>
      <li className="hover:text-[#A62612] lg:py-[20px] py-[10px] xl:px-[22px] lg:px-[10px] cursor-pointer duration-[300ms] lg:block flex justify-between">
        <a href="">Industries</a>
        <MdKeyboardArrowDown className="lg:inline-block hidden " />
        <FaPlus className="inline-block lg:hidden " />
      </li>
      <li className="hover:text-[#A62612] lg:py-[20px] py-[10px] xl:px-[23px] lg:px-[10px] cursor-pointer duration-[300ms] lg:block flex justify-between">
        <a href="">Works</a>
        <MdKeyboardArrowDown className="lg:inline-block hidden " />
        <FaPlus className="inline-block lg:hidden " />
      </li>
      <li className="hover:text-[#A62612]lg:py-[20px] py-[10px] xl:px-[23px] lg:px-[10px] cursor-pointer duration-[300ms]">
        <a href="">Cloud</a>
      </li>
      <li className="hover:text-[#A62612] lg:py-[20px] py-[10px] xl:px-[23px] lg:px-[10px] cursor-pointer duration-[300ms]">
        <a href="">Blog</a>
      </li>
      <li className="hover:text-[#A62612] lg:py-[20px] py-[10px] xl:px-[23px] lg:px-[10px] cursor-pointer duration-[300ms]">
        <a href="">Contact</a>
      </li>
    </ul>
  );
};

export default ManuList;
// {
//   `lg:absolute static lg:mt-0 mt-[10px] bg-[#252628] p-[25px] w-[100%] top-[-100%] left-0 ${
//     isHover ? "top-[70px]" : "top-[-180%]"
//   } z-[-10] duration-500`;
// }
