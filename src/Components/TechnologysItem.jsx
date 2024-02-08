import React from "react";

const TechnologysItem = ({
    itemIconOne,
    itemIconTwo,
    itemIconThree,
    itemIconFour,
    itemIconFive,
    itemIconSix,
    itemNameOne,
    itemNameTwo,
    itemNameThree,
    itemNameFour,
    itemNameFive,
    itemNameSix,
  }) => {
  return (
    <div className="flex flex-wrap justify-center pt-4 gap-[80px] md:justify-start">
      <div className="flex flex-col justify-around items-center text-[#113759] group">
        <div className="text-[80px] group-hover:text-[#F1614A] duration-500 mb-3">
          {itemIconOne}
        </div>
        <p className="text-lg">{itemNameOne}</p>
      </div>
      <div className="flex flex-col justify-around items-center text-[#113759] group">
        <div className="text-[80px] group-hover:text-[#F1614A] duration-500 mb-3">
          {itemIconTwo}
        </div>
        <p className="text-lg">{itemNameTwo}</p>
      </div>
      <div className="flex flex-col justify-around items-center text-[#113759] group">
        <div className="text-[80px] group-hover:text-[#F1614A] duration-500 mb-3">
          {itemIconThree}
        </div>
        <p className="text-lg">{itemNameThree}</p>
      </div>
      <div className="flex flex-col justify-around items-center text-[#113759] group">
        <div className="text-[80px] group-hover:text-[#F1614A] duration-500 mb-3">
          {itemIconFour}
        </div>
        <p className="text-lg">{itemNameFour}</p>
      </div>
      <div className="flex flex-col justify-around items-center text-[#113759] group">
        <div className="text-[80px] group-hover:text-[#F1614A] duration-500 mb-3">
          {itemIconFive}
        </div>
        <p className="text-lg">{itemNameFive}</p>
      </div>
      <div className="flex flex-col justify-around items-center text-[#113759] group">
        <div className="text-[80px] group-hover:text-[#F1614A] duration-500 mb-3">
          {itemIconSix}
        </div>
        <p className="text-lg">{itemNameSix}</p>
      </div>
    </div>
  );
};

export default TechnologysItem;
