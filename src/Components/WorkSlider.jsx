import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Unisearch from "../assets/Unisearch.webp";
import twentyFourOnBd from "../assets/24onbd.webp";
import BdWinners from "../assets/bdwinners.webp";
import Afm from "../assets/afm.webp";
import Karfti from "../assets/karfti.webp";
import Si from "../assets/si.webp";

const WorkSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1.68,
    slidesToScroll: 1,
    centerMode: true,
    
  };
  return (
    <div className="py-[50px]">
      <div className="text-center">
        <h2 className=" lg:text-[42px] text-[36px] text-[#113759] font-bold">
          Our Work
        </h2>
        <p className="text-lg text-[#8C8B90]  mt-3">
          Our happiness lies in the journey
        </p>
      </div>
      <Slider {...settings}>
        <div>
          <img className={"p-5 md:h-[400px]"} src={Unisearch} />
        </div>
        <div>
          <img className={"p-5 md:h-[400px]"} src={twentyFourOnBd} />
        </div>
        <div>
          <img className={"p-5 md:h-[400px]"} src={BdWinners} />
        </div>
        <div>
          <img className={"p-5 md:h-[400px]"} src={Afm} />
        </div>
        {/* <div>
          <img className={"p-5] h-[400px] overflow-hidden"} src={Karfti} />
        </div> */}
        <div>
          <img className={"p-5 md:h-[400px]"} src={Si} />
        </div>
      </Slider>
    </div>
  );
};

export default WorkSlider;
