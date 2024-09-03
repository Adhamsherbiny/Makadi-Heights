import "./homepage.css";
import "./makadi services.css";
import pic1 from "./assets/services logo/1.png";
import pic2 from "./assets/services logo/2.png";
import pic3 from "./assets/services logo/3.png";
import pic4 from "./assets/services logo/4.png";
import pic5 from "./assets/services logo/5.png";
import pic6 from "./assets/services logo/6.png";
import Slider from "./Slider";
import slidepic1 from "./assets/slidepics/slidepic1.jpg";
import slidepic2 from "./assets/slidepics/slidepic2.jpg";
import slidepic3 from "./assets/slidepics/slidepic3.jpg";
import slidepic4 from "./assets/slidepics/slidepic4.jpg";
import slidepic5 from "./assets/slidepics/slidepic5.jpg";
import slidepic6 from "./assets/slidepics/slidepic6.jpg";
function MakadiServices() {
  const slides = [
    { src: slidepic6, alt: "slide picture" },
    { src: slidepic1, alt: "slide picture" },
    { src: slidepic2, alt: "slide picture" },
    { src: slidepic3, alt: "slide picture" },
    { src: slidepic4, alt: "slide picture" },
    { src: slidepic5, alt: "slide picture" },
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
                  <p>COMMERCIAL AREAS</p>
                  <p>Downtown</p>
                  <p>Makadi Heights Mall</p>
                </li>
                <li>
                  <img src={pic3} alt="KIDS FRIENDLY AREAS" />
                  <p>KIDS FRIENDLY AREAS</p>
                  <p>Kids Aqua Park</p>
                  <p>Kids Areas</p>
                </li>
                <li>
                  <img src={pic5} alt="HOTELS" />
                  <p>HOTELS</p>
                  <p>Far far away, behind </p>
                  <p>the word mountains</p>
                </li>
              </div>
              <div className="second-row">
                <li>
                  <img src={pic2} alt="SPORTS FACILITIES" />
                  <p className="actv-pic">SPORTS FACILITIES</p>
                  <p>Sports Courts, Fitness Center</p>
                  <p>Water Sports Activities</p>
                </li>

                <li>
                  <img src={pic4} alt="CENTRAL PARK" />
                  <p>CENTRAL PARK</p>
                  <p>Far far away, behind</p>
                  <p>the word mountains</p>
                </li>

                <li>
                  <img src={pic6} alt="MEDICAL FACILITIES" />
                  <p>MEDICAL FACILITIES</p>
                  <p>Far far away, behind</p>
                  <p>the word mountains</p>
                </li>
              </div>
            </ul>
          </div>
        </div>
        <Slider slides={slides} />
      </div>
    </div>
  );
}

export default MakadiServices;
