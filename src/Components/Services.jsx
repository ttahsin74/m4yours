import React, { useRef } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "./Layout/Image";
import { IoMdArrowBack } from "react-icons/io";
import { IoMdArrowForward } from "react-icons/io";
import cardData from ".././mock-data/card.json";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Services = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3.2,
    slidesToScroll: 1,

    //   prevArrow: <CustomPrevArrow />,
    // nextArrow: <CustomNextArrow />,

    variableWidth: false,
    centerMode: true,
    centerPadding: "50px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const handleForwordArrow = () => {
    sliderRef.current.slickPrev();
  };
  const handleBackArro = () => {
    sliderRef.current.slickNext();
  };
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  return (
    <section className="pt-[80px] pb-0">
      <div className="max-w-[1320px] ml-auto overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: inView ? 1 : 0,
            y: inView ? 0 : 50,
            transition: { duration: 1, delay: 1 },
          }}
        >
          <div ref={ref} className="max-w-[1170px] relative">
            <div className=" flex gap-[30px] flex-wrap xl:px-0 px-4">
              <h3 className="text-[#113759] md:text-[36px] text-[28px] font-bold lg:w-[600px] w-auto lg:text-left text-center">
                We believe innovation is the key to build a better future for
                our people.
              </h3>
              <p className="w-[310px] text-[#8C8B90] font-normal lg:text-left text-center lg:m-0 m-auto">
                develops and promotes end-to-end solutions, execution agility,
                and depth of specialty.
              </p>
              <div className="flex gap-[150px] md:absolute relative bottom-6 right-6 m-auto">
                <IoMdArrowBack
                  className=""
                  size={"30px"}
                  onClick={handleBackArro}
                />
                <IoMdArrowForward size={"30px"} onClick={handleForwordArrow} />
              </div>
            </div>
          </div>
        </motion.div>
        <Slider ref={sliderRef} {...settings}>
          {cardData &&
            cardData?.length > 0 &&
            cardData.map((value, index) => {
              return (
                <div key={index} className="slider-item mt-10 ">
                  <div className="h-full group rounded-[20px] px-[30px] pt-[40px] pb-[15px]  w-[340px] mx-[20px]">
                    <Image
                      className={`inline-block bg-[${value.bg}] p-[25px] rounded-full  duration-300  group-hover:opacity-0 group-hover:mt-[-40px]`}
                      src={value.icon}
                    />
                    <h2 className="text-[28px] font-bold text-[#113759] mb-5 w-[280px]">
                      {value.serviceName}
                    </h2>
                    <p className=" text-base text-[#808291] mb-[30px] duration-[1000ms]">
                      {value.serviceDetails}
                    </p>
                    <div className="flex opacity-0 items-center  duration-[800ms] group-hover:opacity-100   group-hover:mt-[-15px]">
                      <span className="inline-block bg-[#F1614A] h-[2px] w-[20px]"></span>
                      <p className="text-[#F1614A] inline-block ml-[10px]">
                        Learn More
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
        </Slider>
      </div>
    </section>
  );
};

export default Services;
