import CountUp from "react-countup";

function Counter({ limit, children, suffix, details }) {
  return (
    <div className="counter text-center max-w-[1080px] m-auto">
      <CountUp
        className=" mt-[20px] md:text-[65px] text-[55px] font-bold text-[#F1614A] "
        end={limit}
        duration={4}
        suffix={suffix}
      />
      <h5 className="text-[20px] font-medium text-[#113759]">{children}</h5>
      <p className="text-[#808291] w-[270px]">{details}</p>
    </div>
  );
}

export default Counter;
