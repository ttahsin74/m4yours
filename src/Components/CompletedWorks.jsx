import Counter from "./Layout/Counter";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const CompletedWorks = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      console.log("CountUp section is now visible!");
    }
  }, [inView]);

  return (
    <div className=" mt-[70px]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{
          opacity: inView ? 1 : 0,
          y: inView ? 0 : 50,
          transition: { duration: 0.8, ease: "easeInOut", delay: 0.2 },
        }}
      >
        <div className="text-center">
          <p className="text-[#F1614A] mb-[15px] inline-block text-[14px] bg-[#FFEFEC] py-[10px] px-[20px] rounded-[20px]">
            What We Achieved
          </p>
          <h2 className="mb-5 text-[#113759] text-[36px] font-bold">
            The thousands of completed works.
          </h2>
          <p className="text-lg text-[#808291] mb-[30px] w-[650px] m-auto">
            The success of our company mirrors the success of our clients.
            Creative designs tailored to your brand strategy are what we do as a
            top branding agency.
          </p>
        </div>
      </motion.div>
      <div ref={ref} className="flex">
        <Counter
          limit={"12"}
          suffix={"+"}
          children={"Years of Operation"}
          details={
            "Our team has been running well for about 10 years and keeps going"
          }
          inView={inView}
        />
        <Counter
          limit={98}
          suffix={"%"}
          children={"Positive Feedback"}
          details={
            "Based on our happy clients about the quality of our products & services."
          }
          inView={inView}
        />
        <Counter
          limit={4500}
          suffix={"+"}
          children={"Projects Completed"}
          details={"All projects completed with absolutely high quality"}
          inView={inView}
        />
      </div>
    </div>
  );
};

export default CompletedWorks;
