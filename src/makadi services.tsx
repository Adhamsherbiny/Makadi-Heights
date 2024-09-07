/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

import "./homepage.css";
import "./makadi services.css";
import pic1 from "./assets/services logo/1.png";
import pic2 from "./assets/services logo/2.png";
import pic3 from "./assets/services logo/3.png";
import pic4 from "./assets/services logo/4.png";
import pic5 from "./assets/services logo/5.png";
import pic6 from "./assets/services logo/6.png";
import slidepic1 from "./assets/slidepics/slidepic1.jpg";
import slidepic2 from "./assets/slidepics/slidepic2.jpg";
import slidepic3 from "./assets/slidepics/slidepic3.jpg";
import slidepic4 from "./assets/slidepics/slidepic4.jpg";
import slidepic5 from "./assets/slidepics/slidepic5.jpg";
import slidepic6 from "./assets/slidepics/slidepic6.jpg";
function MakadiServices() {
  const [index, setIndex] = useState(2);

  const slides = [
    {
      src: slidepic5,
      alt: "slide picture",
      p1: "MEDICAL FACILITIES",
      p2: "Far far away, behind",
      p3: "the word mountains",
    },
    {
      src: slidepic1,
      alt: "slide picture",
      p1: "COMMERCIAL AREAS",
      p2: "Downtown",
      p3: "Makadi Heights Mall",
    },
    {
      src: slidepic6,
      alt: "slide picture",
      p1: "SPORTS FACILITIES",
      p2: "Sports Courts, Fitness Center",
      p3: "Water Sports Activities",
    },
    {
      src: slidepic2,
      alt: "slide picture",
      p1: "KIDS FRIENDLY AREAS",
      p2: "Kids Aqua Park",
      p3: "Kids Areas",
    },
    {
      src: slidepic3,
      alt: "slide picture",
      p1: "CENTRAL PARK",
      p2: "Far far away, behind",
      p3: "the word mountains",
    },
    {
      src: slidepic4,
      alt: "slide picture",
      p1: "HOTELS",
      p2: "Far far away, behind",
      p3: "the word mountains",
    },
  ];
  return (
    <div className="makadi-services">
      <div className="container">
        <div className="services">
          <div className="services-text">
            <h3>Discover Lifestyle</h3>
            <h2>Amentities</h2>
            <p>
              Occupying a land area of 33,000 square meters, Makadi Heights’
              stunning clubhouse
            </p>
          </div>
          <div className="describe-services">
            <ul>
              <div className="first-row">
                <li>
                  <img src={pic1} alt="COMMERCIAL AREAS" />
                  <p
                    className={index == 1 ? "actv-pic" : ""}
                    onClick={() => {
                      setIndex(1);
                    }}
                  >
                    {slides[1].p1}
                  </p>
                  <p>{slides[1].p2}</p>
                  <p>{slides[1].p3}</p>
                </li>
                <li>
                  <img src={pic3} alt="KIDS FRIENDLY AREAS" />
                  <p
                    className={index == 3 ? "actv-pic" : ""}
                    onClick={() => {
                      setIndex(3);
                    }}
                  >
                    {slides[3].p1}
                  </p>
                  <p>{slides[3].p2}</p>
                  <p>{slides[3].p3}</p>
                </li>
                <li>
                  <img src={pic5} alt="HOTELS" />
                  <p
                    className={index == 5 ? "actv-pic" : ""}
                    onClick={() => {
                      setIndex(5);
                    }}
                  >
                    {slides[5].p1}
                  </p>
                  <p>{slides[5].p2}</p>
                  <p>{slides[5].p3}</p>
                </li>
              </div>
              <div className="second-row">
                <li>
                  <img src={pic2} alt="SPORTS FACILITIES" />
                  <p
                    className={index == 2 ? "actv-pic" : ""}
                    onClick={() => {
                      setIndex(2);
                    }}
                  >
                    {slides[2].p1}
                  </p>
                  <p>{slides[2].p2}</p>
                  <p>{slides[2].p3}</p>
                </li>

                <li>
                  <img src={pic4} alt="CENTRAL PARK" />
                  <p
                    className={index == 4 ? "actv-pic" : ""}
                    onClick={() => {
                      setIndex(4);
                    }}
                  >
                    {slides[4].p1}
                  </p>
                  <p>{slides[4].p2}</p>
                  <p>{slides[4].p3}</p>
                </li>

                <li>
                  <img src={pic6} alt="MEDICAL FACILITIES" />
                  <p
                    className={index == 0 ? "actv-pic" : ""}
                    onClick={() => {
                      setIndex(0);
                    }}
                  >
                    {slides[0].p1}
                  </p>
                  <p>{slides[0].p2}</p>
                  <p>{slides[0].p3}</p>
                </li>
              </div>
            </ul>
          </div>
        </div>
        {/* <Slider slides={slides} /> */}
        <div className="pictures-section">
          <div className="picture">
            <div
              style={{
                backgroundImage: `url(${slides[index].src})`,
              }}
            ></div>
          </div>
          <div className="picture-analog">
            <ul>
              {slides.map((_slides: any, idx: any) => (
                <li
                  key={idx}
                  className={index === idx ? "actv_analog" : ""}
                  onClick={() => {
                    setIndex(idx);
                  }}
                ></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MakadiServices;
