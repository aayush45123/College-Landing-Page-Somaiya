import hero from "../assets/campusss.webp";
import "../styles/Hero.css";
import { FaArrowAltCircleRight } from "react-icons/fa";
const Hero = () => {
  return (
    <div className="heroContainer" id="hero">
      <img src={hero} alt="" />
      <div className="layer">
        <div className="heroContent">
          <h1>We Ensure better education for a better world</h1>
          <p>
            Our cutting-edge curriculum is designed to empower students with the
            knowledge, skills, and experiences needed to excel in the dynamic
            field of education.
          </p>
          <button className="new_button">
            Explore Now <FaArrowAltCircleRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
