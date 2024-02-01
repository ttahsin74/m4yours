import React, { useState } from "react";
import Flex from "./Layout/Flex";
import { FaRegCirclePlay, FaCirclePlay } from "react-icons/fa6";

import Image from "./Layout/Image";
import AppDevelopment from "../assets/focus-learning-dark.webp";
import Unisearch from "../assets/Unisearch.webp";
import Aist from "../assets/AIST.webp";
import Mi from "../assets/mi.webp";
import Eatery from "../assets/eatery.webp";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
// import "../Sass/index.scss";
import { MdClose } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import IndustriesItem from "./IndustriesItem";

const Banner = () => {
  const [isVideoVisible, setVideoVisible] = useState(false);
  const handleVideo = () => {
    setVideoVisible(true);
  };
  const handlecloseButton = () => {
    setVideoVisible(false);
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 15000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    arrows: false,
  };
  return (
    <section className="bg-[#1C1C1F]">
      <div className="pt-[32px]">
        <Flex className="justify-center flex-col">
          <div className="text-center">
            <button className="inline-block text-[#A62612] px-[18px] py-[8px] mt-[0px] bg-[#FFF] rounded-[20px] hover:bg-[#EA5741] hover:text-[#FFF] duration-[300ms]">
              Digital Experience
            </button>
          </div>
          <h1 className="mt-[20px] text-center m-auto text-[50px] font-bold text-[#fff] max-w-[906px]">
            Web, Mobile, Cloud, Branding, Digital Marketing and{" "}
            <span className="text-[#F1614A]">business solution</span>
          </h1>
          <h4 className="my-[20px] m-auto text-center text-[#8C8B90] max-w-[610px] text-[20px] font-medium">
            We merge imagination and technology to help thousands of brands grow
            in an age of digital transformation.
          </h4>
          <div className="inline-block text-center px-[10px] text-[#fff] font-semibold">
            <div className="inline-block" onClick={handleVideo}>
              <p className="inline-block">See how we work</p>
              <FaRegCirclePlay
                className="inline-block mx-[20px]"
                color="#F1614A"
                size="40px"
              />
              <FaCirclePlay
                className="inline-block"
                color="#F1614A"
                size="40px"
              />
            </div>
            {isVideoVisible && (
              <div className="video-controll">
                <iframe
                  width="695"
                  height="391"
                  src="https://www.youtube.com/embed/JiS0TBNefg0"
                  title="M4YOURS IT, an honorable offshore software development company"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
                <MdClose
                  className="absolute top-[-10px] right-[-50px]"
                  size={"50px"}
                  onClick={handlecloseButton}
                />
              </div>
            )}
          </div>

          <Flex className="gap-[20px] items-end	">
            <Image src={AppDevelopment} />
            <div className="flex items-center flex-col w-[415px]">
              <Flex className="gap-[30px] ">
                <span className="h-[114px] w-[3px] inline-block bg-[linear-gradient(180deg,#accae4,rgba(85,114,139,0))]"></span>
                <div className="mt-[5px]">
                  <h3 className="text-[#FFFFFF] font-semibold text-[26px]">
                    Web Development
                  </h3>
                  <p className="text-[#8C8B90]">1000+ Project done</p>
                </div>
              </Flex>
              <div className="bg-[#28292D] custom_tabs">
                <Tabs className="">
                  <TabList className="text-[#FFF] flex gap-0 bg-[#2D3134] py-[10px]">
                    <Tab>
                      <p
                        className="hover:text-[#F1614A] text-[14px] duration-[
                        200ms]"
                      >
                        Frontend
                      </p>
                    </Tab>
                    <Tab>
                      <p className="hover:text-[#F1614A] text-[14px]">MEAN</p>
                    </Tab>
                    <Tab>
                      <p className="hover:text-[#F1614A] text-[14px]">LAMP</p>
                    </Tab>
                    <Tab>
                      <p className="hover:text-[#F1614A] text-[14px]">
                        Mobile App
                      </p>
                    </Tab>
                    <Tab>
                      <p className="hover:text-[#F1614A] text-[14px]">
                        Open Source
                      </p>
                    </Tab>
                  </TabList>

                  <TabPanel>
                    <div className=" p-[20px]">
                      <h2 className="mb-2 text-2xl font-medium text-white">
                        Frontend Web Development
                      </h2>
                      <p className="text-[#fff]">
                        M4YOURS IT is a front-end development company, provides
                        customized, sturdy, and secure front-end solutions that
                        are tailored to clients' requirements.It is the front
                        end web developer who creates everything on a website,
                        such as buttons, links, animations, and so on.
                        Developers are responsible for translating client
                        visions and design concepts into code.
                      </p>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className=" p-[20px]">
                      <h2 className="mb-2 text-2xl font-medium text-white">
                        MEAN
                      </h2>
                      <p className="text-[#fff]">
                        M4YOURS IT is a front-end development company, provides
                        customized, sturdy, and secure front-end solutions that
                        are tailored to clients' requirements.It is the front
                        end web developer who creates everything on a website,
                        such as buttons, links, animations, and so on.
                        Developers are responsible for translating client
                        visions and design concepts into code.
                      </p>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className=" p-[20px]">
                      <h2 className="mb-2 text-2xl font-medium text-white">
                        LAMP
                      </h2>
                      <p className="text-[#fff]">
                        M4YOURS IT is a front-end development company, provides
                        customized, sturdy, and secure front-end solutions that
                        are tailored to clients' requirements.It is the front
                        end web developer who creates everything on a website,
                        such as buttons, links, animations, and so on.
                        Developers are responsible for translating client
                        visions and design concepts into code.
                      </p>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className=" p-[20px]">
                      <h2 className="mb-2 text-2xl font-medium text-white">
                        Mobile APP
                      </h2>
                      <p className="text-[#fff]">
                        M4YOURS IT is a front-end development company, provides
                        customized, sturdy, and secure front-end solutions that
                        are tailored to clients' requirements.It is the front
                        end web developer who creates everything on a website,
                        such as buttons, links, animations, and so on.
                        Developers are responsible for translating client
                        visions and design concepts into code.
                      </p>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className=" p-[20px]">
                      <h2 className="mb-2 text-2xl font-medium text-white">
                        Open Source
                      </h2>
                      <p className="text-[#fff]">
                        M4YOURS IT is a front-end development company, provides
                        customized, sturdy, and secure front-end solutions that
                        are tailored to clients' requirements.It is the front
                        end web developer who creates everything on a website,
                        such as buttons, links, animations, and so on.
                        Developers are responsible for translating client
                        visions and design concepts into code.
                      </p>
                    </div>
                  </TabPanel>
                </Tabs>
              </div>
            </div>
            <div className="flex items-end">
              <Slider className="w-[400px]" {...settings}>
                <Image src={Unisearch} />
                <Image src={Aist} />
                <Image src={Eatery} />
                <Image src={Mi} />
              </Slider>
              <div className="text-center bg-[#28292D]">
                <h2 className="text-[28px] font-bold text-[#FFF]">
                  Industries
                </h2>
                <div className="flex  px-[20px] pt-[25px] pb-[45px] justify-between w-[200px] flex-wrap gap-[12px]">
                  <IndustriesItem />
                </div>
              </div>
            </div>
          </Flex>
        </Flex>
      </div>
    </section>
  );
};

export default Banner;
