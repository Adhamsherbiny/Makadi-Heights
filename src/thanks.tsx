import "./thanks.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
function Thanks() {
  return (
    <div className="page">
      <div className="container">
        <FontAwesomeIcon className="icon" icon={faCheckCircle} />
        <h1>Thank you</h1>
        <p>
          We hope you enjoyed . Your request is being reviewed and we will
          contact you as soon as possible
        </p>
        <p>Copyright ©2024 | All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Thanks;
