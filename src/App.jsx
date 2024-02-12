import Banner from "./Components/Banner";
import Navber from "./Components/Navber";
import "./App.css";
import TopCompanis from "./Components/TopCompaneys";
import "./Sass/index.scss";
import CompletedWorks from "./Components/CompletedWorks";
import BuildIdea from "./Components/BuildIdea";
import Services from "./Components/Services";
import CurrentlyWorking from "./Components/CurrentlyWorking";
import InsightNews from "./Components/InsightNews";
import ContactUs from "./Components/ContactUs";
import Fotter from "./Components/Fotter";
import WorkSlider from "./Components/WorkSlider";
import UsesTenchnology from "./Components/UsesTenchnology";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function App() {
  return (
    <>
      <Navber />
      <Banner /> 
       <TopCompanis />
      <CompletedWorks />
      <BuildIdea />
      <Services />
      <WorkSlider/>
      <UsesTenchnology/>
      <CurrentlyWorking />
      <InsightNews />
      <ContactUs />
      <Fotter />
    </>
  );
}
