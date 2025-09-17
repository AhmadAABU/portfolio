import Mainbtn from "./Mainbtn";
import ContactBox from "./ContactBox";
import "./normal.css";
import "./all.min.css";
import "./Portfolio.css";

export default function Contact() {
  return (
    <div>
      <Mainbtn title="Get in touch" id="contact" />
      <div className="contact-info container">
        <div className="text">
          <p>Send me a message via email, call my phone number.</p>
        </div>
        <div className="info-flex-box">
          <ContactBox
            logo={"fa-solid fa-phone"}
            title={"Phone"}
            para={"+962789799686"}
          />

          <ContactBox
            logo={"fa-solid fa-envelope"}
            title={"Email"}
            para={"Send Message"}
            link={"mailto:ahmad.jawdat@mail.ru"}
          />

          <ContactBox
            logo={"fa-brands fa-linkedin"}
            title={"Linkedin"}
            para={"Visit My Profile"}
            link={"https://www.linkedin.com/in/ahmad-jawdat-229765268/"}
          />
        </div>
      </div>
    </div>
  );
}
