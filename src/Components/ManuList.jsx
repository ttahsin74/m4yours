import { MdKeyboardArrowDown } from "react-icons/md";
import HoverList from "./HoverList";
import Flex from "./Layout/Flex";

const ManuList = () => {
  return (
    <div>
      <ul className="flex text-[#fff] gap-[40px] items-center justify-center">
        <li className="hover:text-[#A62612] duration-[300ms]">
          <a href="">Home</a>
        </li>
        <li className="hover:text-[#A62612] duration-[300ms]">
          <a href="">About</a>
          <MdKeyboardArrowDown className="inline-block" />
          {/* <div className=" absolute bg-[#252628] p-[25px] w-[100%] top-[100%] left-0 hidden ">
            <Flex className="justify-center gap-[120px]">
              <div>
                <HoverList
                  className="font-bold text-[16px]"
                  listName="Overview"
                />
                <HoverList listName="Our Team" />
                <HoverList listName="Blog" />
              </div>
              <div>
                <HoverList
                  listName="Insights"
                  className="font-bold text-[16px]"
                />
                <HoverList listName="Contact Us" />
                <HoverList listName={"Career"} />
              </div>
            </Flex>
          </div> */}
        </li>
        <li className="hover:text-[#A62612] duration-[300ms]">
          <a href="">Service</a>
          <MdKeyboardArrowDown className="inline-block" />
        </li>
        <li className="hover:text-[#A62612] duration-[300ms]">
          <a href="">Industries</a>
          <MdKeyboardArrowDown className="inline-block" />
        </li>
        <li className="hover:text-[#A62612] duration-[300ms]">
          <a href="">Works</a>
          <MdKeyboardArrowDown className="inline-block" />
        </li>
        <li className="hover:text-[#A62612] duration-[300ms]">
          <a href="">Cloud</a>
        </li>
        <li className="hover:text-[#A62612] duration-[300ms]">
          <a href="">Blog</a>
        </li>
        <li className="hover:text-[#A62612] duration-[300ms]">
          <a href="">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default ManuList;
