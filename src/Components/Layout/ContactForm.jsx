// import React from "react";
import { RiSendPlaneFill } from "react-icons/ri";
import React, { useState } from "react";

const ContactForm = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
  });
  const [inputError, setInputError] = useState({
    nameError: "",
    emailError: "",
    phoneError: "",
    subjectError: "",
    messageError:""
  });
  const [messageInput, setMesseInput] = useState()

  const handleInput = (e) => {
    
    const { name, value } = e.target;
    setInput((oldData) => ({
      ...oldData,
      [name]: value,
    }));
    // console.log(name);
    if (name === "name") {
      if (!value) {
        setInputError((oldError) => ({
          ...oldError,
          nameError: "Name is required",
        }));
      }else {
        setInputError((oldError) => ({
          ...oldError,
          nameError: "",
        }));
      }
    } 
    if (name === "email") {
      if (!value) {
        setInputError((oldError) => ({
          ...oldError,
          emailError: "Email is required",
        }));
      }else {
        setInputError((oldError) => ({
          ...oldError,
          emailError: "",
        }));
      }
    } 
    if (name === "phone") {
      const phoneNumberRegex =/^\d{10}$/;
      if (!value) {
        setInputError((oldError) => ({
          ...oldError,
          phoneError: "Phone is required",
        }));
      }else if (!value.match(phoneNumberRegex)){
        setInputError((oldError)=>({
          ...oldError,
          phoneError:"Minimum length 9 digits"
        }))
      }else {
        setInputError((oldError) => ({
          ...oldError,
          phoneError: "",
        }));
      }
    } 
    if (name === "subject") {
      if (!value) {
        setInputError((oldError) => ({
          ...oldError,
          subjectError: "Subject is required",
        }));
      }else {
        setInputError((oldError) => ({
          ...oldError,
          subjectError: "",
        }));
      }
    } 
  };
  const handleMessageInput = (e)=>{
    const {value} = e.target;
    setMesseInput(value)
    if (!value) {
      setInputError((oldError) => ({
        ...oldError,
        messageError: "Message is required",
      }));
    } else {
      setInputError((oldError) => ({
        ...oldError,
        messageError: "",
      }));
    }
  }
  const handleSend =(e)=>{
    e.preventDefault();
    if (!input.name) {
      setInputError((oldError) => ({ ...oldError, nameError: "Name is required" }));
    } else {
      setInputError((oldError) => ({
        ...oldError,
        nameError: "",
      }));
    }
    if (!input.email) {
      setInputError((oldError) => ({ ...oldError, emailError: "Email is required" }));
    } else {
      setInputError((oldError) => ({
        ...oldError,
        emailError: "",
      }));
    }
    if (!input.phone) {
      setInputError((oldError) => ({ ...oldError, phoneError: "Phone number is required" }));
    } else {
      setInputError((oldError) => ({
        ...oldError,
        phoneError: "",
      }));
    }
    if (!input.phone) {
      setInputError((oldError) => ({ ...oldError, subjectError: "Subject is required" }));
    } else {
      setInputError((oldError) => ({
        ...oldError,
        subjectError: "",
      }));
    }
    if (!messageInput) {
      setInputError((oldError) => ({ ...oldError, messageError: "Message is required" }));
    } else {
      setInputError((oldError) => ({
        ...oldError,
        messageError: "",
      }));
    }
    if (!inputError.nameError && !inputError.emailError && !inputError.phoneError && !inputError.subject && !inputError.messageError) {

    }
  }
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
              onChange={handleInput}
              name="name"
            />
            <p className="text-[#ff0000] text-[12px] absolute">{inputError.nameError}</p>
          </div>
          <div>
            <label className="pt-[20px] inline-block">
              Your Email <span className="text-[#F16171]">*</span>
            </label>
            <input
              className=" py-[10px] block outline-none border-b-2 border-[#bababa] lg:w-[180px] xl:w-[250px] w-[280px] sm:w-[450px]"
              type="email"
              placeholder="Email"
              onChange={handleInput}
              name="email"
            />
            <p className="text-[#ff0000] text-[12px] absolute">{inputError.emailError}</p>
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
              onChange={handleInput}
              name="phone"
            />
            <p className="text-[#ff0000] text-[12px] absolute">{inputError.phoneError}</p>
          </div>
          <div>
            <label className="pt-[20px] inline-block">
              Your Subject <span className="text-[#F16171]">*</span>
            </label>
            <input
              className=" py-[10px] block outline-none border-b-2 border-[#bababa] lg:w-[180px] xl:w-[250px] w-[280px] sm:w-[450px]"
              type="text"
              placeholder="Subject"
              onChange={handleInput}
              name="subject"
            />
            <p className="text-[#ff0000] text-[12px] absolute">{inputError.subjectError}</p>
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
            onChange={handleMessageInput}
          ></textarea>
            <p className="text-[#ff0000] text-[12px] absolute">{inputError.messageError}</p>
          <button onClick={handleSend} className="absolute right-[-15px] bottom-7">
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
