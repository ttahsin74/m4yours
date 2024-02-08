// import React, { useRef } from "react";
import IdeasItem from "./Layout/IdeasItem";
import {motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const BuildIdea = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  return (
    <section className="bg-[#FBFDFF] pt-[80px]">
      <div className="max-w-[1170px] m-auto">
        <div ref={ref} inView={inView}
         className="max-w-[770px] m-auto p-[15px] lg:p-[0]">
          <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: inView ? 1 : 0,
            y: inView ? 0 : 50,
            transition: { duration: 1 , delay: 1},
          }}>
            <h3 className="text-[#113759] text-[36px] font-bold">
              We build ideas driven by the future.
            </h3>
            <p className="mt-[15px] lg:mb-[40px] mb-[20px] text-base font-medium text-[#F1614A]">
              — The process
            </p>
            </motion.div>
          <div className="flex lg:gap-[40px] gap-[20px] flex-wrap justify-between">
            <IdeasItem
              iteasTitel={"Discover_"}
              ideasDetails={
                "As part of the innovation branding process, extensive research is conducted throughout each step of the process to challenge assumptions and create relevant findings and conclusions."
              }
            />
            <IdeasItem
              iteasTitel={"Design_"}
              ideasDetails={
                "We believe that simplicity and minimalism are the keys to successful design. As we strive to make our designs as unique and innovative as possible, it allows users to navigate the site easily and understand it."
              }
            />
            <IdeasItem
              iteasTitel={"Build_"}
              ideasDetails={
                "Our flexible and expandable solutions are designed with precision and expertise to meet the needs of your business."
              }
            />
            <IdeasItem
              iteasTitel={"Deliver_"}
              ideasDetails={
                "Throughout our professional endeavors as well as the approach we take to work, we constantly strive to improve both our professional abilities as well as our working methods. We are always seeking creative approaches in order to improve what we do."
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuildIdea;
