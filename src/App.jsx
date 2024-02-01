import Banner from "./Components/Banner";
import Navber from "./Components/Navber";
import "./App.css"; // Import the CSS file
import OurService from "./Components/OurService";
import "./Sass/index.scss";
import CompletedWorks from "./Components/CompletedWorks";

export default function App() {
  return (
    <>
      <Navber />
      <Banner />
      <OurService />
      <CompletedWorks />
    </>
  );
}
