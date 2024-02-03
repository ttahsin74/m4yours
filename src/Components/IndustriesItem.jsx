import React from "react";
import { FaHeartCirclePlus } from "react-icons/fa6";

const IndustriesItem = ({ itemName, itemIcon }) => {
  return (
    <div className="flex  px-[10px] pt-[25px] xl:pb-[45px] pb-[20px] justify-between  lg:w-[180px] flex-wrap gap-[12px]">
      <div className="bg-[#2C2D31] text-center p-[10px]">
        <FaHeartCirclePlus
          color="#fff"
          size={"23px"}
          className="inline-block border-1 border[#e5e7eb]"
        />
        <p className="text-[#fff] w-[50px] text-[10px]">Healthcare</p>
      </div>
      <div className="bg-[#2C2D31] text-center p-[10px]">
        <FaHeartCirclePlus
          color="#fff"
          size={"23px"}
          className="inline-block border-1 border[#e5e7eb]"
        />
        <p className="text-[#fff] w-[50px] text-[10px]">
          Education / eLearning
        </p>
      </div>
      <div className="bg-[#2C2D31] text-center p-[10px]">
        <FaHeartCirclePlus
          color="#fff"
          size={"23px"}
          className="inline-block border-1 border[#e5e7eb]"
        />
        <p className="text-[#fff] w-[50px] text-[10px]">Retail</p>
      </div>
      <div className="bg-[#2C2D31] text-center p-[10px]">
        <FaHeartCirclePlus
          color="#fff"
          size={"23px"}
          className="inline-block border-1 border[#e5e7eb]"
        />
        <p className="text-[#fff] w-[50px] text-[10px]">Real Estate</p>
      </div>
      <div className="bg-[#2C2D31] text-center p-[10px]">
        <FaHeartCirclePlus
          color="#fff"
          size={"23px"}
          className="inline-block border-1 border[#e5e7eb]"
        />
        <p className="text-[#fff] w-[50px] text-[10px]">Travel & Hospitality</p>
      </div>
      <div className="bg-[#2C2D31] text-center p-[10px]">
        <FaHeartCirclePlus
          color="#fff"
          size={"23px"}
          className="inline-block border-1 border[#e5e7eb]"
        />
        <p className="text-[#fff] w-[50px] text-[10px]">
          Logistics & Distribution
        </p>
      </div>
      <div className="bg-[#2C2D31] text-center p-[10px]">
        <FaHeartCirclePlus
          color="#fff"
          size={"23px"}
          className="inline-block border-1 border[#e5e7eb]"
        />
        <p className="text-[#fff] w-[50px] text-[10px]">
          Media & Entertainment
        </p>
      </div>
      <div className="bg-[#2C2D31] text-center p-[10px]">
        <FaHeartCirclePlus
          color="#fff"
          size={"23px"}
          className="inline-block border-1 border[#e5e7eb]"
        />
        <p className="text-[#fff] w-[50px] text-[10px]">FinTECH</p>
      </div>
    </div>
  );
};

export default IndustriesItem;
