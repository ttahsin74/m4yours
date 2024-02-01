import React from "react";

const HoverList = ({ className, listName }) => {
  return (
    <div>
      <ul>
        <li className={`text-[#fff]  ${className}`}>{listName}</li>
      </ul>
    </div>
  );
};

export default HoverList;
