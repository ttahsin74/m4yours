import React from "react";

const CurrentlyWorkingBtn = ({ btnName }) => {
  return (
    <p className="text-[#F1614A] mb-[15px] inline-block text-[14px] bg-[#FFEFEC] sm:py-[8px] py-[6px] sm:px-[15px] px-[12px] rounded-[20px]">
      {btnName}
    </p>
  );
};

export default CurrentlyWorkingBtn;
