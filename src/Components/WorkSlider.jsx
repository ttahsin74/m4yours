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
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
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
