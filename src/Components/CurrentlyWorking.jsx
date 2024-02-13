import React from "react";
import Image from "./Layout/Image";
import Immilink from "../assets/immilink.webp";
import Cms from "../assets/cms.webp";
import University from "../assets/world-universitys-hub.webp";
import ImmiJusney from "../assets/immi-jurney.webp";
import Eccomerce from "../assets/eccomerce.webp";
import MoveInternational from "../assets/move-international.webp";
import WorldNews from "../assets/world-news.webp";
import Apurva from "../assets/apurva.webp";
import CurrentlyWorkingBtn from "./Layout/CurrentlyWorkingBtn";

const CurrentlyWorking = () => {
  return (
    <section className="lg:py-[80px] py-[40px]">
      <div className="lg:max-w-[1170px] w-auto m-auto">
        <div className="text-center pb-[50px]">
          <h2 className="mb-[20px] text-[#113759]  lg:text-[50px] text-[35px] font-bold leading-[40px]">
            Currently Working
          </h2>
          <p className="text-lg text-[#8C8B90] mt-3">
            Our happiness lies in the journey
          </p>
        </div>
        <div className="flex flex-wrap gap-[30px] justify-between lg:px-[0px] px-[10px]">
          <div className="xl:w-[570px] lg:w-[480px] w-auto   m-auto">
            <Image src={Immilink} />
            <div className="flex gap-3 mt-7">
              <CurrentlyWorkingBtn btnName={"Node Js"} />
              <CurrentlyWorkingBtn btnName={"Next Js"} />
              <CurrentlyWorkingBtn btnName={"React Js"} />
            </div>
            <div className="w-[145px] h-[2px] bg-[#F1614A] mb-2"></div>
            <div className="p-3">
              <h4 className="leading-[36px] font-bold text-[#113759] text-[24px]">
                ImmiLink
              </h4>
              <p className="text-[#545358] mt-1">
                Canada's largest immigration lawyer Networking platform
              </p>
            </div>
          </div>
          <div className="xl:w-[570px] lg:w-[480px] w-auto  m-auto">
            <Image src={Cms} />
            <div className="flex flex-wrap gap-3 mt-7">
              <CurrentlyWorkingBtn btnName={"Node Js"} />
              <CurrentlyWorkingBtn btnName={"Nest Js"} />
              <CurrentlyWorkingBtn btnName={"Paython"} />
              <CurrentlyWorkingBtn btnName={"React Js"} />
              <CurrentlyWorkingBtn btnName={"Next Js"} />
            </div>
            <div className="w-[145px] h-[2px] bg-[#F1614A] mb-2"></div>
            <div className="p-3">
              <h4 className="leading-[36px] font-bold text-[#113759] text-[24px]">
                Website Builder CMS
              </h4>
              <p className="text-[#545358] mt-1">
                Create a custom website | Visual website builder
              </p>
            </div>
          </div>
          <div className="xl:w-[570px] lg:w-[480px] w-auto  m-auto">
            <Image src={University} />
            <div className="flex flex-wrap gap-3 mt-7">
              <CurrentlyWorkingBtn btnName={"Node Js"} />
              <CurrentlyWorkingBtn btnName={"Nest Js"} />
              <CurrentlyWorkingBtn btnName={"Paython"} />
              <CurrentlyWorkingBtn btnName={"React Js"} />
              <CurrentlyWorkingBtn btnName={"Next Js"} />
            </div>
            <div className="w-[145px] h-[2px] bg-[#F1614A] mb-2"></div>
            <div className="p-3">
              <h4 className="leading-[36px] font-bold text-[#113759] text-[24px]">
                World University's Hub
              </h4>
              <p className="text-[#545358] mt-1">
                World's largest university database, University Ranking, Courses
                and Jobs
              </p>
            </div>
          </div>
          <div className="xl:w-[570px] lg:w-[480px] w-auto  m-auto">
            <Image src={ImmiJusney} />
            <div className="flex flex-wrap gap-3 mt-7">
              <CurrentlyWorkingBtn btnName={"Node Js"} />
              <CurrentlyWorkingBtn btnName={"Nest Js"} />
              <CurrentlyWorkingBtn btnName={"React Js"} />
              <CurrentlyWorkingBtn btnName={"Next Js"} />
            </div>
            <div className="w-[145px] h-[2px] bg-[#F1614A] mb-2"></div>
            <div className="p-3">
              <h4 className="leading-[36px] font-bold text-[#113759] text-[24px]">
                Immi Journey
              </h4>
              <p className="text-[#545358] mt-1">
                Canada's immigration lawyer client management software
              </p>
            </div>
          </div>
          <div className="xl:w-[570px] lg:w-[480px] w-auto m-auto">
            <Image src={Eccomerce} />
            <div className="flex flex-wrap gap-3 mt-7">
              <CurrentlyWorkingBtn btnName={"Node Js"} />
              <CurrentlyWorkingBtn btnName={"Nest Js"} />
              <CurrentlyWorkingBtn btnName={"Paython"} />
              <CurrentlyWorkingBtn btnName={"React Js"} />
              <CurrentlyWorkingBtn btnName={"Next Js"} />
            </div>
            <div className="w-[145px] h-[2px] bg-[#F1614A] mb-2"></div>
            <div className="p-3">
              <h4 className="leading-[36px] font-bold text-[#113759] text-[24px]">
                Ecommerce Website Builders
              </h4>
              <p className="text-[#545358] mt-1">Ecommerce Website Builders </p>
            </div>
          </div>
          <div className="xl:w-[570px] lg:w-[480px] w-auto  m-auto">
            <Image src={MoveInternational} />
            <div className="flex flex-wrap gap-3 mt-7">
              <CurrentlyWorkingBtn btnName={"Node Js"} />
              <CurrentlyWorkingBtn btnName={"Nest Js"} />
              <CurrentlyWorkingBtn btnName={"React Js"} />
              <CurrentlyWorkingBtn btnName={"Next Js"} />
            </div>
            <div className="w-[145px] h-[2px] bg-[#F1614A] mb-2"></div>
            <div className="p-3">
              <h4 className="leading-[36px] font-bold text-[#113759] text-[24px]">
                Move International
              </h4>
              <p className="text-[#545358] mt-1">
                Australia's top education and migration consultancy agency{" "}
              </p>
            </div>
          </div>
          <div className="xl:w-[570px] lg:w-[480px] w-auto  m-auto">
            <Image src={WorldNews} />
            <div className="flex flex-wrap gap-3 mt-7">
              <CurrentlyWorkingBtn btnName={"Node Js"} />
              <CurrentlyWorkingBtn btnName={"Nest Js"} />
              <CurrentlyWorkingBtn btnName={"Paython"} />
              <CurrentlyWorkingBtn btnName={"React Js"} />
              <CurrentlyWorkingBtn btnName={"Next Js"} />
            </div>
            <div className="w-[145px] h-[2px] bg-[#F1614A] mb-2"></div>
            <div className="p-3">
              <h4 className="leading-[36px] font-bold text-[#113759] text-[24px]">
                Today World News
              </h4>
              <p className="text-[#545358] mt-1">Today World News </p>
            </div>
          </div>
          <div className="xl:w-[570px] lg:w-[480px] w-auto  m-auto">
            <Image src={Apurva} />
            <div className="flex gap-3 mt-7">
              <CurrentlyWorkingBtn btnName={"Wordpress"} />
            </div>
            <div className="w-[145px] h-[2px] bg-[#F1614A] mb-2"></div>
            <div className="p-3">
              <h4 className="leading-[36px] font-bold text-[#113759] text-[24px]">
                Apurva Eco Resort
              </h4>
              <p className="text-[#545358] mt-1">Apurva Eco Resort Redesign </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentlyWorking;
