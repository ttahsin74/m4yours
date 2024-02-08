import React from "react";
import {motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const IdeasItem = ({ ideasDetails, iteasTitel }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  return (
    <div ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{
          opacity: inView ? 1 : 0,
          y: inView ? 0 : 50,
          transition: { duration: 1, delay: 1 },
        }}
      >
        <h3 className="text-[28px] font-bold text-[#113759] lg:mb-5 mb-3">
          {iteasTitel}
        </h3>
        <p className=" text-[#8C8B90] font-normal w-[268px]">{ideasDetails}</p>
      </motion.div>
    </div>
  );
};

export default IdeasItem;
