import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "./Layout/Image";
import webDevelopment from "../assets/web-application.webp";

const Services = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <section className="pt-[80px] pb-0 overflow-hidden">
      <div className="flex max-w-[1170px] m-auto gap-[30px]">
        <h3 className="text-[#113759] text-[36px] font-bold w-[600px]">
          We believe innovation is the key to build a better future for our
          people.
        </h3>
        <p className="w-[310px] text-[#8C8B90] font-normal">
          develops and promotes end-to-end solutions, execution agility, and
          depth of specialty.
        </p>
      </div>
      {/* <Slider className="max-w-[1280px] m-auto" {...settings}>
        <div className="flex">
          <div className="inline-block rounded-[20px] px-[30px] pt-[40px] pb-[15px] bg-black">
            <Image
              className={"inline-block bg-[#FFE5DB] p-[25px] rounded-full"}
              src={webDevelopment}
            />
            <h2 className="text-[28px] font-bold text-[#113759] mb-5 w-[280px]">
              Web Application Development
            </h2>
            <p className="w-[280px] text-base text-[#808291] mb-[30px]">
              Setting goals for the app's purpose is essential in developing a
              web app. Using dependable independent talents, such as front-end
              and back-end developers...
            </p>
            <div className="flex items-center">
              <span className="inline-block bg-[#F1614A] h-[2px] w-[20px]"></span>
              <p className="text-[#F1614A] inline-block ml-[10px]">
                Learn More
              </p>
            </div>
          </div>
          <div>fgdh</div>
          <div>fgdh</div>
          <div>fgdh</div>
          <div>fgdh</div>
        </div>
      </Slider> */}
    </section>
  );
};

export default Services;
