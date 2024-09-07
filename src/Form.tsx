/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from "react";
import lastPic from "./assets/lastPic.jpg";
import "./form.css";
import Thanks from "./thanks";

function FormSection() {
  const alertName = useRef<any>();
  const alertEmail = useRef<any>();
  const alertPhone = useRef<any>();
  const alerBugdet = useRef<any>();
  const submitData = useRef<any>();
  const thankyou = useRef<any>();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [bugdet, setBugdet] = useState("");

  const namePattern = /^[a-zA-Z ]{2,40}$/;
  const phoneNumberPattern = /^\d{11}$/;
  const emailPattern = /\S+@\S+\.\S+/;
  useEffect(() => {
    if (
      namePattern.test(name) == false ||
      emailPattern.test(email) == false ||
      phoneNumberPattern.test(phoneNumber) == false ||
      name == "" ||
      email == "" ||
      phoneNumber == "" ||
      bugdet == ""
    ) {
      submitData.current?.setAttribute("disabled", "");
      submitData.current.style.color = "gray";
    } else {
      submitData.current?.removeAttribute("disabled");
      submitData.current.style.color = "white";
    }
  });
  function sendData(event: { preventDefault: () => void }) {
    event.preventDefault();
    thankyou.current.style.display = "block";
    window.scroll(0, 6000);
  }
  return (
    <div className="form-section">
      <div className="con">
        <div className="pic">
          <img src={lastPic} alt="" />
          <div className="txt">
            <p>Ready for a Home at </p>
            <h1>Makadi Heights</h1>
          </div>
        </div>
        <form action="" autoComplete="off">
          <p>
            Enter your details and our representative will get back to you
            shortly
          </p>
          <div className="form-div">
            <input
              id="name"
              type="text"
              placeholder="Your name"
              onChange={(e) => {
                setName(e.target.value);
              }}
              onKeyUp={() => {
                if (name == "") {
                  alertName.current.style.display = "block";
                  alertName.current.style.color = "red";
                  alertName.current.innerText = "required enter your name";
                } else if (name != "") {
                  if (namePattern.test(name) == false) {
                    alertName.current.style.display = "block";
                    alertName.current.style.color = "red";
                    alertName.current.innerText =
                      "type name without number and any special Character";
                  } else {
                    alertName.current.style.display = "none";
                    alertName.current.innerText = "";
                  }
                }
              }}
            />
            <p ref={alertName}></p>
          </div>
          <div className="form-div">
            <input
              id="email"
              type="text"
              placeholder="Email ID"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              onKeyUp={() => {
                if (email == "") {
                  alertEmail.current.style.display = "block";
                  alertEmail.current.style.color = "red";
                  alertEmail.current.innerText = "required enter your E-mail";
                } else if (email != "") {
                  if (emailPattern.test(email) == false) {
                    alertEmail.current.style.display = "block";
                    alertEmail.current.style.color = "red";
                    alertEmail.current.innerText = "type your correct E-mail";
                  } else {
                    alertEmail.current.style.color = "green";
                    alertEmail.current.innerText = "";
                  }
                }
              }}
            />
            <p ref={alertEmail}></p>
          </div>
          <div className="form-div">
            <input
              id="phone"
              type="text"
              placeholder="Phone number"
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
              onKeyUp={() => {
                if (phoneNumber == "") {
                  alertPhone.current.style.display = "block";
                  alertPhone.current.style.color = "red";
                  alertPhone.current.innerText =
                    "required enter your phone number";
                } else if (phoneNumber != "") {
                  if (phoneNumberPattern.test(phoneNumber) == false) {
                    alertPhone.current.style.display = "block";
                    alertPhone.current.style.color = "red";
                    alertPhone.current.innerText =
                      "type your correct phone number";
                  } else {
                    alertPhone.current.style.color = "green";
                    alertPhone.current.innerText = "";
                  }
                }
              }}
            />
            <p ref={alertPhone}></p>
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
              onKeyUp={() => {
                if (bugdet == "") {
                  alerBugdet.current.style.display = "block";
                  alerBugdet.current.style.color = "red";
                  alerBugdet.current.innerText =
                    "Bugdet field is required enter your bugdet";
                } else {
                  alerBugdet.current.style.color = "green";
                  alerBugdet.current.innerText = "";
                }
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
            <p ref={alerBugdet}></p>
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
            ref={submitData}
            onClick={sendData}
            className="cta"
            type="submit"
            value={"LEAVE A CALL REQUEST"}
          />
        </form>
      </div>
      <div className="thnakSec" ref={thankyou}>
        <Thanks />
      </div>
    </div>
  );
}

export default FormSection;
