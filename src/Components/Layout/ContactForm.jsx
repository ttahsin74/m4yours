import React from "react";
import { RiSendPlaneFill } from "react-icons/ri";

const ContactForm = () => {
  return (
    <div>
      <form action="">
        <div className="flex gap-4 pb-[50px]">
          <div>
            <label className="">
              Name <span className="text-[#F16171]">*</span>
            </label>
            <input
              className=" py-[10px] block outline-none border-b-2 border-[#bababa] w-[250px]"
              type="text"
              placeholder="Name"
            />
          </div>
          <div>
            <label className="">
              Your Email <span className="text-[#F16171]">*</span>
            </label>
            <input
              className=" py-[10px] block outline-none border-b-2 border-[#bababa] w-[250px]"
              type="email"
              placeholder="Email"
            />
          </div>
        </div>
        <div className="flex gap-4">
          <div>
            <label className="">
              Your Phone <span className="text-[#F16171]">*</span>
            </label>
            <input
              className=" py-[10px] block outline-none border-b-2 border-[#bababa] w-[250px]"
              type="tel"
              placeholder="Phone"
            />
          </div>
          <div>
            <label className="">
              Your Subject <span className="text-[#F16171]">*</span>
            </label>
            <input
              className=" py-[10px] block outline-none border-b-2 border-[#bababa] w-[250px]"
              type="text"
              placeholder="Subject"
            />
          </div>
        </div>
        <div className="pt-[50px] pb-[50px] relative">
          <label>Your Message</label>
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
