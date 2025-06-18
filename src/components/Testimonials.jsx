import React, { useRef } from "react";
import "../styles/Testimonials.css";
import next from "../assets/next-icon.png";
import back from "../assets/back-icon.png";

import user_1 from "../assets/aayush.jpg";
import user_2 from "../assets/krish.jpg";
import user_3 from "../assets/badak.jpg";
import user_4 from "../assets/moin.jpg";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx = tx - 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx = tx + 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials-container" id="testimonials">
      <div className="testimonials">
        <img src={next} className="next-btn" alt="" onClick={slideForward} />
        <img src={back} className="back-btn" alt="" onClick={slideBackward} />

        <div className="slider">
          <ul ref={slider}>
            <li>
              <div className="slide">
                <div className="image">
                  <img src={user_1} alt="" />
                  <div className="info">
                    <h3>Aayush Bharda</h3>
                    <span>Tata Steels</span>
                  </div>
                </div>
                <div className="description">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                    placeat reprehenderit voluptates ut perspiciatis,
                    distinctio, esse nobis magni cumque corporis culpa
                    aspernatur rem!
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="image">
                  <img src={user_2} alt="" />
                  <div className="info">
                    <h3>Krish Darji</h3>
                    <span>Tata Steels</span>
                  </div>
                </div>
                <div className="description">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                    placeat reprehenderit voluptates ut perspiciatis,
                    distinctio, esse nobis magni cumque corporis culpa
                    aspernatur rem!
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="image">
                  <img src={user_3} alt="" />
                  <div className="info">
                    <h3>Krish Dakwe</h3>
                    <span>Tata Steels</span>
                  </div>
                </div>
                <div className="description">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                    placeat reprehenderit voluptates ut perspiciatis,
                    distinctio, esse nobis magni cumque corporis culpa
                    aspernatur rem!
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="image">
                  <img src={user_4} alt="" />
                  <div className="info">
                    <h3>Amreiliya Moin</h3>
                    <span>Tata Steels</span>
                  </div>
                </div>
                <div className="description">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                    placeat reprehenderit voluptates ut perspiciatis,
                    distinctio, esse nobis magni cumque corporis culpa
                    aspernatur rem!
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
