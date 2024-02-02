import React from "react";

const IdeasItem = ({ ideasDetails, iteasTitel }) => {
  return (
    <div>
      <h3 className="text-[28px] font-bold text-[#113759] mb-5">
        {iteasTitel}
      </h3>
      <p className=" text-[#8C8B90] font-normal w-[268px]">{ideasDetails}</p>
    </div>
  );
};

export default IdeasItem;
