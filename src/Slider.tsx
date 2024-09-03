import { useState } from "react";
function Slider({ slides }) {
  //? actv_analog
  const [index, setIndex] = useState(0);
  return (
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
          {slides.map((slides, idx) => (
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
  );
}

export default Slider;
