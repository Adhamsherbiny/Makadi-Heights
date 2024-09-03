import { useRef, useState } from "react";
import lastPic from "./assets/lastPic.jpg";
import "./form.css";

function FormSection() {
  function showMessage(msgText: string, msgTime: number) {
    msg.current.style.display = "block";
    msg.current.innerText = msgText;
    setTimeout(() => {
      msg.current.style.display = "none";
    }, msgTime);
  }
  const msg = useRef<any>();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [bugdet, setBugdet] = useState("");

  const namePattern = /^[a-zA-Z ]{2,40}$/;
  const phoneNumberPattern = /^\d{11}$/;
  const emailPattern = /\S+@\S+\.\S+/;
  function sendData(e: { preventDefault: () => void }) {
    e.preventDefault();
    if (name == "") {
      msg.current.style.backgroundColor = "rgba(255, 0, 0, 0.555)";
      msg.current.style.borderColor = "red";
      showMessage("Enter your name", 3000);
    } else if (name != "") {
      if (namePattern.test(name) == false) {
        msg.current.style.backgroundColor = "rgba(255, 0, 0, 0.555)";
        msg.current.style.borderColor = "red";
        showMessage("Sorry this name is wrong please type your name", 3000);
      } else if (email == "") {
        msg.current.style.backgroundColor = "rgba(255, 0, 0, 0.555)";
        msg.current.style.borderColor = "red";
        showMessage("Enter your email", 3000);
      } else if (email != "") {
        if (emailPattern.test(email) == false) {
          msg.current.style.backgroundColor = "rgba(255, 0, 0, 0.555)";
          msg.current.style.borderColor = "red";
          showMessage("Sorry this email is wrong please type your email", 3000);
        } else if (phoneNumber == "") {
          msg.current.style.backgroundColor = "rgba(255, 0, 0, 0.555)";
          msg.current.style.borderColor = "red";
          showMessage("Enter your phone number", 3000);
        } else if (phoneNumber != "") {
          if (phoneNumberPattern.test(phoneNumber) == false) {
            msg.current.style.backgroundColor = "rgba(255, 0, 0, 0.555)";
            msg.current.style.borderColor = "red";
            showMessage(
              "Sorry this phone number is wrong please type your phone number",
              3000
            );
          } else if (bugdet == "") {
            msg.current.style.backgroundColor = "rgba(255, 0, 0, 0.555)";
            msg.current.style.borderColor = "red";
            showMessage("Enter your bugdet", 3000);
          } else {
            msg.current.style.backgroundColor = "rgba(0, 128, 0, 0.555)";
            msg.current.style.borderColor = "green";
            showMessage("Sending Data .....", 3000);
          }
        }
      }
    }
  }
  return (
    <div className="form-section">
      <div className="msg" ref={msg}>
        msg
      </div>
      <div className="pic">
        <img src={lastPic} alt="" />
        <div className="txt">
          <p>Ready for a Home at </p>
          <h1>Makadi Heights</h1>
        </div>
      </div>
      <form action="" autoComplete="off">
        <p>
          Enter your details and our representative will get back to you shortly
        </p>
        <div className="form-div">
          <input
            id="name"
            type="text"
            placeholder="Your name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="form-div">
          <input
            id="email"
            type="text"
            placeholder="Email ID"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="form-div">
          <input
            id="phone"
            type="text"
            placeholder="Phone number"
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
          />
        </div>
        <div className="form-div">
          <input
            list="bugdet-list"
            id="bugdet"
            type="text"
            placeholder="Choose your bugdet"
            onChange={(e) => {
              setBugdet(e.target.value);
            }}
          />
          <datalist id="bugdet-list">
            <option value="2500000 $">2500000 $</option>
            <option value="2900000 $">2900000 $</option>
            <option value="3500000 $">3500000 $</option>
            <option value="4000000 $">4000000 $</option>
            <option value="6000000 $">6000000 $</option>
            <option value="10000000 $">10000000 $</option>
            <option value="15000000 $">15000000 $</option>
            <option value="20000000 $">20000000 $</option>
          </datalist>
        </div>
        <div className="form-div">
          <input id="message" type="text" placeholder="Enter you message" />
        </div>
        <div className="form-div">
          <input id="chk" type="checkbox" />
          <label htmlFor="chk">
            I agree to the processing of personal data
          </label>
        </div>
        <input
          onClick={sendData}
          className="cta"
          type="submit"
          value={"LEAVE A CALL REQUEST"}
        />
      </form>
    </div>
  );
}

export default FormSection;
