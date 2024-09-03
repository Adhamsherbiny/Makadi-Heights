import "./welcome section.css";
import "./homepage.css";
import picture from "./assets/picture.jpg";
function WelcomeSection() {
  return (
    <div className="welcome-section">
      <div className="container">
        <div className="welcome-img">
          <img src={picture} alt="Picture" />
        </div>
        <div className="welcome-txt">
          <div className="txt">
            <h1>The place</h1>
            <h1>we call home</h1>
            <p>
              Makadi heights is a town built over 3.4 million square meters
              planned for development, with an elevation reaching 78 meters
              above sea level guaranteeing mangnificent panoramic sea view
              residentail units. Envisioned as a comprehensive town.
            </p>
          </div>
          <div className="btn-control">
            <button>DOWNLOAD BROCHURE</button>
            <button> SHOW MASTER PLAN</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomeSection;
