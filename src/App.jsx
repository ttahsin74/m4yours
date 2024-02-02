import Banner from "./Components/Banner";
import Navber from "./Components/Navber";
import "./App.css"; // Import the CSS file
import OurService from "./Components/OurService";
import "./Sass/index.scss";
import CompletedWorks from "./Components/CompletedWorks";
import BuildIdea from "./Components/BuildIdea";
import Services from "./Components/Services";
import CurrentlyWorking from "./Components/CurrentlyWorking";
import InsightNews from "./Components/InsightNews";
import ContactUs from "./Components/ContactUs";

export default function App() {
  return (
    <>
      <Navber />
      <Banner />
      <OurService />
      <CompletedWorks />
      <BuildIdea />
      <Services />
      <CurrentlyWorking />
      <InsightNews />
      <ContactUs />
    </>
  );
}
