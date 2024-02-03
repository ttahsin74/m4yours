import React from "react";
import { RiSendPlaneFill } from "react-icons/ri";

const ContactForm = () => {
  return (
    <div>
      <form action="">
        <div className="md:flex block gap-[30px] lg:pb-[50px]">
          <div>
            <label className="pt-[30px] inline-block">
              Name <span className="text-[#F16171]">*</span>
            </label>
            <input
              className=" py-[10px] block outline-none border-b-2 border-[#bababa] xl:w-[250px] lg:w-[180px] w-[280px] sm:w-[450px]"
              type="text"
              placeholder="Name"
            />
          </div>
          <div>
            <label className="pt-[20px] inline-block">
              Your Email <span className="text-[#F16171]">*</span>
            </label>
            <input
              className=" py-[10px] block outline-none border-b-2 border-[#bababa] lg:w-[180px] xl:w-[250px] w-[280px] sm:w-[450px]"
              type="email"
              placeholder="Email"
            />
          </div>
        </div>
        <div className="md:flex block gap-4">
          <div>
            <label className="pt-[20px] inline-block">
              Your Phone <span className="text-[#F16171]">*</span>
            </label>
            <input
              className=" py-[10px] block outline-none border-b-2 border-[#bababa] lg:w-[180px] xl:w-[250px] w-[280px] sm:w-[450px]"
              type="tel"
              placeholder="Phone"
            />
          </div>
          <div>
            <label className="pt-[20px] inline-block">
              Your Subject <span className="text-[#F16171]">*</span>
            </label>
            <input
              className=" py-[10px] block outline-none border-b-2 border-[#bababa] lg:w-[180px] xl:w-[250px] w-[280px] sm:w-[450px]"
              type="text"
              placeholder="Subject"
            />
          </div>
        </div>
        <div className="pt-[50px] pb-[50px] relative">
          <label className="">Your Message</label>
          <textarea
            className="block w-[100%] outline-none border-b-2 border-[#bababa] max-h-[90px] resize-none "
            name="Message"
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <button className="absolute right-[-15px] bottom-7">
            <span className="inline-block p-[20px] bg-[#F1614A] rounded-full">
              <RiSendPlaneFill color="#fff" size={"35px"} />
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
