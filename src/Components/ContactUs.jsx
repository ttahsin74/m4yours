import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import ContactForm from "./Layout/ContactForm";

const ContactUs = () => {
  return (
    <section className="my-[50px]">
      <div className="max-w-[1170px] xl:pl-0 lg:pl-[40px] lg:ml-auto m-auto lg:text-left text-center">
        <p className="text-[#8C8B90]">Inquiry</p>
        <h3 className="mb-[30px] font-bold text-[35px] text-[#113759] ">
          Lets Get in touch
        </h3>
      </div>
      <div className="bg-[url('https://m4yours.com/_next/image?url=%2Fassets%2Fimages%2Fhome%2Ffooter-img.webp&w=256&q=75')] bg-cover bg-no-repeat">
        <div className="max-w-[1170px] m-auto">
          <div className="flex flex-wrap lg:gap-[20px] xl:gap-[50px]">
            <div className="py-[20px] lg:py-[150px] xl:pl-0 lg:pl-[40px] lg:m-0 m-auto ">
              <div className="flex  sm:gap-7 gap-2 text-[#fff] lg:m-0 text-center">
                <div className="lg:m-0 m-auto">
                  <p>Bangladesh</p>
                  <h5 className="text-lg font-bold">+8801673090958</h5>
                </div>
                <div className="lg:m-0 m-auto">
                  <p>Bangladesh</p>
                  <h5 className="text-lg font-bold">+8801971300397</h5>
                </div>
              </div>
              <div className="flex lg:flex-nowrap flex-wrap pt-[50px] xl:gap-[50px] gap-[20px]">
                <div className="flex gap-3 lg:m-0 m-auto">
                  <HiOutlineMail
                    className="py-[10px] px-[12px] bg-white rounded-full"
                    color="#F48876"
                    size={"60px"}
                  />
                  <div className="text-[#fff]">
                    <p>Email</p>
                    <p className="text-lg font-bold">info@m4yours.com</p>
                  </div>
                </div>
                <div className="flex gap-3 lg:m-0 m-auto">
                  <HiOutlineMail
                    className="py-[10px] xl:px-[12px] px-[8px] bg-white rounded-full"
                    color="#F48876"
                    size={"60px"}
                  />
                  <div className="text-[#fff]">
                    <p>Email</p>
                    <p className="text-lg font-bold">biz@m4yours.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-first lg:order-last lg:mb-[100px] mb-[20px] bg-white rounded-lg xl:mt-[-130px] lg:mt-[-100px] mt-[40px] lg:ml-auto m-auto custom-form-shadow">
              <h2 className="text-[#113759] lg:pt-[40px] pt-[20px] pl-[30px] text-[32px] font-bold">
                Hey! there <span className="text-[#F1614A]">:)</span>
              </h2>
              <div className="px-[15px] lg:px-[30px] lg:pt-[40px] pt-[0px]">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
