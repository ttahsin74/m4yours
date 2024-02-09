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
import { MdClose } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import IndustriesItem from "./IndustriesItem";
import { LiaApple } from "react-icons/lia";

const Banner = () => {
  const [isVideoVisible, setVideoVisible] = useState(false);
  const [isHover, setHover] = useState(false);
  const handleVideo = () => {
    setVideoVisible(true);
  };
  const handlecloseButton = () => {
    setVideoVisible(false);
  };
  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 15000,
    slidesToShow: 3,
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
          <h1 className="mt-[20px] text-center m-auto lg:text-[50px] md:text-[40px] sm:text-[40px] text-[30px] font-bold text-[#fff] max-w-[966px] p-[10px]">
            Web, Mobile, Cloud, Branding, Digital Marketing and{" "}
            <span className="text-[#F1614A]">business solution</span>
          </h1>
          <h4 className="my-[20px] m-auto text-center text-[#8C8B90] max-w-[610px] lg:text-[20px] text-[18px] lg:p-0 p-2 font-medium">
            We merge imagination and technology to help thousands of brands grow
            in an age of digital transformation.
          </h4>
          <div className="inline-block text-center px-[10px] text-[#fff] font-semibold">
            <div
              className="inline-block cursor-pointer"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={handleVideo}
            >
              <p className="inline-block">See how we work</p>
              {isHover ? (
                <FaCirclePlay
                  className="inline-block mx-[20px] duration-[400ms]"
                  color="#F1614A"
                  size="40px"
                />
              ) : (
                <FaRegCirclePlay
                  className="inline-block mx-[20px] duration-[400ms]"
                  color="#F1614A"
                  size="40px"
                />
              )}
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
          <div className="flex justify-between items-end flex-wrap pt-[30px] xl:px-[0px] px-[10px]">
            <div>
              <picture>
                <img className={"xl:block hidden"} src={AppDevelopment} />
              </picture>
              <div>
                <h5>App Development</h5>
                <div>
                  <div className="flex">
                    <span>
                      <LiaApple />
                    </span>
                      <div>
                        <h5>ISO</h5>
                        <p>20+ Project Done</p>
                      </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex pl-5 flex-col items-center">
              <div className="gap-[30px] flex mb-5">
                <span className="h-[114px] w-[3px] inline-block bg-[linear-gradient(180deg,#accae4,rgba(85,114,139,0))]"></span>
                <div className="mt-[5px]">
                  <h3 className="text-[#FFFFFF] font-semibold text-[26px]">
                    Web Application
                  </h3>
                  <p className="text-[#8C8B90]">1000+ Project done</p>
                </div>
              </div>
              <div className="bg-[#28292D] w-[500px] rounded-t-[15px]">
                <Tabs>
                  <TabList className="flex justify-between gap-5 bg-[#2D3134] rounded-t-[15px]  px-5 overflow-auto">
                    <Tab className={"banner-custom-tab"}>
                      <p>Frontend</p>
                    </Tab>
                    <Tab className={"banner-custom-tab"}>
                      <p>MEAN</p>
                    </Tab>
                    <Tab className={"banner-custom-tab"}>
                      <p>LAMP</p>
                    </Tab>
                    <Tab className={"banner-custom-tab"}>
                      <p>Mobile App</p>
                    </Tab>
                    <Tab className={"banner-custom-tab"}>
                      <p>Open Source</p>
                    </Tab>
                  </TabList>

                  <TabPanel>
                    <div className=" px-[20px] py-[10px]">
                      <h2 className="mb-2 text-2xl font-medium text-white">
                        Frontend Web Development
                      </h2>
                      <p className="text-[#fff]  xl:text-[14px]">
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
                    <div className=" px-[20px] py-[10px]">
                      <h2 className="mb-2 text-2xl font-medium text-white">
                        MEAN
                      </h2>
                      <p className="text-[#fff] xl:text-[14px]">
                        M4YOURS IT provides robust and secure web application
                        development using MongoDB, ExpressJS, Angular, NodeJS,
                        and React. MEAN/MERN development services simplify
                        deployment and create scalable applications aligned with
                        client strategy.
                      </p>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className=" px-[20px] py-[10px]">
                      <h2 className="mb-2 text-2xl font-medium text-white">
                        LAMP
                      </h2>
                      <p className="text-[#fff] xl:text-[14px]">
                        For the development of dynamic, high-performance, and
                        responsive web applications, M4YOURS IT offers services
                        based on the LAMP (Linux, Apache, MySQL, and PHP) stack.
                        Providing comprehensive dynamic web application
                        development services, we create powerful applications
                        with the highest quality standards. Our mission is to
                        empower end users by delivering outstanding customer
                        experiences and accelerating time-to-market.
                      </p>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className=" px-[20px] py-[10px]">
                      <h2 className="mb-2 text-2xl font-medium text-white">
                        Mobile APP
                      </h2>
                      <p className="text-[#fff] xl:text-[14px]">
                        Mobile app development services are provided by M4YOURS
                        IT according to your needs, budget, and schedule as a
                        leading mobile app development company in Bangladesh.
                        Mobile app development is something we specialize in
                        doing in Bangladesh, helping startups, small businesses,
                        and large enterprises develop, launch, and manage custom
                        mobile applications.
                      </p>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="px-[20px] py-[10px]">
                      <h2 className="mb-2 text-2xl font-medium text-white">
                        Open Source
                      </h2>
                      <p className="text-[#fff] xl:text-[14px]">
                        The idea behind open-source software is to make the code
                        publicly available. Using peer review and community
                        production, it is developed decentralized and
                        collaboratively. Its values and production model are
                        used to solve problems with open-source software.
                      </p>
                    </div>
                  </TabPanel>
                </Tabs>
              </div>
              <div></div>
            </div>
            <div className="lg:block hidden text-center bg-[#28292D] rounded-tl-[15px] rounded-tr-[15px]">
              <h2 className="text-[28px] font-bold text-[#FFF] mt-[20px]">
                Industries
              </h2>
              <IndustriesItem />
            </div>
          </div>

          {/* <Flex className="justify-between items-end flex-wrap pt-[30px] xl:px-[0px] px-[10px]">
            <Image className={"xl:block hidden"} src={AppDevelopment} />
            <div className="flex items-center flex-col ">
              <Flex className="gap-[30px] ">
                <span className="h-[114px] w-[3px] inline-block bg-[linear-gradient(180deg,#accae4,rgba(85,114,139,0))]"></span>
                <div className="mt-[5px]">
                  <h3 className="text-[#FFFFFF] font-semibold text-[26px]">
                    Web Development
                  </h3>
                  <p className="text-[#8C8B90]">1000+ Project done</p>
                </div>
              </Flex>
              <div className="bg-[#28292D] custom-tabs xl:w-[600px] lg:w-[400px] sm:w-auto">
                <Tabs className="">
                  <TabList className="justify-between text-[#FFF] rounded-tl-[20px] rounded-tr-[20px] flex gap-0 bg-[#2D3134] py-[10px] px-[10px] min-w-sreen scroll-auto">
                    <Tab>
                      <p
                        className="hover:text-[#F1614A] text-[14px] duration-[
                        300ms]"
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
                    <div className=" px-[20px] py-[10px]">
                      <h2 className="mb-2 text-2xl font-medium text-white">
                        Frontend Web Development
                      </h2>
                      <p className="text-[#fff]  xl:text-[14px]">
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
                    <div className=" px-[20px] py-[10px]">
                      <h2 className="mb-2 text-2xl font-medium text-white">
                        MEAN
                      </h2>
                      <p className="text-[#fff] xl:text-[14px]">
                        M4YOURS IT provides robust and secure web application
                        development using MongoDB, ExpressJS, Angular, NodeJS,
                        and React. MEAN/MERN development services simplify
                        deployment and create scalable applications aligned with
                        client strategy.
                      </p>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className=" px-[20px] py-[10px]">
                      <h2 className="mb-2 text-2xl font-medium text-white">
                        LAMP
                      </h2>
                      <p className="text-[#fff] xl:text-[14px]">
                        For the development of dynamic, high-performance, and
                        responsive web applications, M4YOURS IT offers services
                        based on the LAMP (Linux, Apache, MySQL, and PHP) stack.
                        Providing comprehensive dynamic web application
                        development services, we create powerful applications
                        with the highest quality standards. Our mission is to
                        empower end users by delivering outstanding customer
                        experiences and accelerating time-to-market.
                      </p>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className=" px-[20px] py-[10px]">
                      <h2 className="mb-2 text-2xl font-medium text-white">
                        Mobile APP
                      </h2>
                      <p className="text-[#fff] xl:text-[14px]">
                        Mobile app development services are provided by M4YOURS
                        IT according to your needs, budget, and schedule as a
                        leading mobile app development company in Bangladesh.
                        Mobile app development is something we specialize in
                        doing in Bangladesh, helping startups, small businesses,
                        and large enterprises develop, launch, and manage custom
                        mobile applications.
                      </p>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="px-[20px] py-[10px]">
                      <h2 className="mb-2 text-2xl font-medium text-white">
                        Open Source
                      </h2>
                      <p className="text-[#fff] xl:text-[14px]">
                        The idea behind open-source software is to make the code
                        publicly available. Using peer review and community
                        production, it is developed decentralized and
                        collaboratively. Its values and production model are
                        used to solve problems with open-source software.
                      </p>
                    </div>
                  </TabPanel>
                </Tabs>
              </div>
            </div>
            <div className="flex items-end xl:gap-[10px]">
              {/* <Slider {...settings}>
                <Image src={Unisearch} />
                <Image src={Aist} />
                <Image src={Eatery} />
                <Image src={Mi} />
              </Slider> */}
          {/* <div className="lg:block hidden text-center bg-[#28292D] rounded-tl-[15px] rounded-tr-[15px]">
                <h2 className="text-[28px] font-bold text-[#FFF] mt-[20px]">
                  Industries
                </h2>
                <IndustriesItem />
              </div>
            </div> */}
          {/* </Flex> */}
        </Flex>
      </div>
      <div className="text-[#4F4E53] rotate-[-90deg] fixed top-[200px] right-[-25px]">
        <span>Follow Us - </span>
        <span target="_blank" className="hover:text-[#F1614A] duration-300">
          <a href="https://www.facebook.com/m4yours" rel="noopener noreferrer">
            Fb.{" "}
          </a>
        </span>
        <span>\ </span>
        <span className="hover:text-[#F1614A] duration-300">
          <a
            target="_blank"
            href="https://www.youtube.com/channel/UCaUMD5yQUUkThgyE0BlTZjg"
            rel="noopener noreferrer"
          >
            Yt.
          </a>
        </span>
      </div>
    </section>
  );
};

export default Banner;
