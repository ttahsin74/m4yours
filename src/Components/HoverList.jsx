import React from "react";

const HoverList = ({ className, listName }) => {
  return (
    <div>
      <ul>
        <li className={`text-[#ff3c3c]  ${className}`}>{listName}</li>
      </ul>
    </div>
  );
};

export default HoverList;
