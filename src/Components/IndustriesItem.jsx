import React from "react";
import { FaHeartCirclePlus } from "react-icons/fa6";

const IndustriesItem = ({ itemName, itemIcon }) => {
  return (
    <>
      <div className="bg-[#1C1C1F] text-center p-[10px]">
        <FaHeartCirclePlus
          color="#fff"
          size={"23px"}
          className="inline-block border-1 border[#e5e7eb]"
        />
        <p className="text-[#fff] w-[50px] text-[9px]">Healthcare</p>
      </div>
      <div className="bg-[#1C1C1F] text-center p-[10px]">
        <FaHeartCirclePlus
          color="#fff"
          size={"23px"}
          className="inline-block border-1 border[#e5e7eb]"
        />
        <p className="text-[#fff] w-[50px] text-[9px]">Education / eLearning</p>
      </div>
      <div className="bg-[#1C1C1F] text-center p-[10px]">
        <FaHeartCirclePlus
          color="#fff"
          size={"23px"}
          className="inline-block border-1 border[#e5e7eb]"
        />
        <p className="text-[#fff] w-[50px] text-[9px]">Retail</p>
      </div>
      <div className="bg-[#1C1C1F] text-center p-[10px]">
        <FaHeartCirclePlus
          color="#fff"
          size={"23px"}
          className="inline-block border-1 border[#e5e7eb]"
        />
        <p className="text-[#fff] w-[50px] text-[9px]">Real Estate</p>
      </div>
      <div className="bg-[#1C1C1F] text-center p-[10px]">
        <FaHeartCirclePlus
          color="#fff"
          size={"23px"}
          className="inline-block border-1 border[#e5e7eb]"
        />
        <p className="text-[#fff] w-[50px] text-[9px]">Travel & Hospitality</p>
      </div>
      <div className="bg-[#1C1C1F] text-center p-[10px]">
        <FaHeartCirclePlus
          color="#fff"
          size={"23px"}
          className="inline-block border-1 border[#e5e7eb]"
        />
        <p className="text-[#fff] w-[50px] text-[9px]">
          Logistics & Distribution
        </p>
      </div>
      <div className="bg-[#1C1C1F] text-center p-[10px]">
        <FaHeartCirclePlus
          color="#fff"
          size={"23px"}
          className="inline-block border-1 border[#e5e7eb]"
        />
        <p className="text-[#fff] w-[50px] text-[9px]">Media & Entertainment</p>
      </div>
      <div className="bg-[#1C1C1F] text-center p-[10px]">
        <FaHeartCirclePlus
          color="#fff"
          size={"23px"}
          className="inline-block border-1 border[#e5e7eb]"
        />
        <p className="text-[#fff] w-[50px] text-[9px]">FinTECH</p>
      </div>
    </>
  );
};

export default IndustriesItem;
