import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import "../styles/Campus.css";
import gallery_1 from "../assets/campus-1.webp";
import gallery_2 from "../assets/campus-2.webp";
import gallery_3 from "../assets/campus-3.webp";
import gallery_4 from "../assets/campus-4.webp";

const Campus = () => {
  return (
    <div className="campusContainer" id="campus">
      <div className="gallery">
        <img src={gallery_1} alt="" />
        <img src={gallery_2} alt="" />
        <img src={gallery_3} alt="" />
        <img src={gallery_4} alt="" />
      </div>
      <button className="new_button new">
        See more images <FaArrowAltCircleRight />
      </button>
    </div>
  );
};

export default Campus;
