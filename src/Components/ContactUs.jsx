import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import ContactForm from "./Layout/ContactForm";

const ContactUs = () => {
  return (
    <section className="my-[50px]">
      <div className="max-w-[1170px] m-auto">
        <p className="text-[#8C8B90]">Inquiry</p>
        <h3 className="mb-[30px] font-bold text-[35px] text-[#113759] ">
          Lets Get in touch
        </h3>
      </div>
      <div className="bg-[url('https://m4yours.com/_next/image?url=%2Fassets%2Fimages%2Fhome%2Ffooter-img.webp&w=256&q=75')] bg-cover bg-no-repeat">
        <div className="max-w-[1170px] m-auto">
          <div className="flex gap-[50px]">
            <div className="py-[150px]">
              <div className="flex gap-7 text-[#fff] ">
                <div>
                  <p>Bangladesh</p>
                  <h5 className="text-lg font-bold">+8801673090958</h5>
                </div>
                <div>
                  <p>Bangladesh</p>
                  <h5 className="text-lg font-bold">+8801971300397</h5>
                </div>
              </div>
              <div className="flex pt-[50px] gap-[50px]">
                <div className="flex gap-3">
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
                <div className="flex gap-3">
                  <HiOutlineMail
                    className="py-[10px] px-[12px] bg-white rounded-full"
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
            <div className="mb-[100px] bg-white rounded-lg mt-[-130px] border-[2px] shadow[ 0px 0px 10px 0px rgba(0,0,0,0.5);]">
              <h2 className="text-[#113759] pt-[40px] pl-[30px] text-[32px] font-bold">
                Hey! there <span className="text-[#F1614A]">:)</span>
              </h2>
              <div className="px-[30px] pt-[40px]">
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
