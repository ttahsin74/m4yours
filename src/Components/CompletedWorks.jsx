import Counter from "./Layout/Counter";
import { useInView } from "react-intersection-observer";
import { motion  } from "framer-motion";

const CompletedWorks = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  // const controls = useAnimation();
  // useEffect(() => {
  //   if (inView) {
  //     controls.start({ opacity: 1, y: 0 });
  //   }
  // }, [inView, controls]);
  return (
    <div className=" mt-[70px] ">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{
          opacity: inView ? 1 : 0,
          y: inView ? 0 : 50,
          transition: { duration: 0.7, delay: 0.5 },
        }}
      >
        <div
          ref={ref}
          // inView={inView}
          className="text-center lg:px-[0px] px-[15px]"
        >
          <p className="text-[#F1614A] mb-[15px] inline-block text-[14px] bg-[#FFEFEC] py-[10px] px-[20px] rounded-[20px]">
            What We Achieved
          </p>
          <h2 className="mb-5 text-[#113759] text-[36px] font-bold">
            The thousands of completed works.
          </h2>
          <p className="text-lg text-[#808291] mb-[30px] lg:w-[650px]  w-auto m-auto">
            The success of our company mirrors the success of our clients.
            Creative designs tailored to your brand strategy are what we do as a
            top branding agency.
          </p>
        </div>
      </motion.div>
      <div className="flex flex-wrap">
        <Counter
          limit={"12"}
          suffix={"+"}
          children={"Years of Operation"}
          details={
            "Our team has been running well for about 10 years and keeps going"
          }
        />
        <Counter
          limit={98}
          suffix={"%"}
          children={"Positive Feedback"}
          details={
            "Based on our happy clients about the quality of our products & services."
          }
        />
        <Counter
          limit={4500}
          suffix={"+"}
          children={"Projects Completed"}
          details={"All projects completed with absolutely high quality"}
        />
      </div>
    </div>
  );
};

export default CompletedWorks;
