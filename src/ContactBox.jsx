// ContactBox.jsx
import React from "react";
import "./Portfolio.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function ContactBox({ logo, title, para, link }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div data-aos="fade-right">
      <div className="inner-box">
        <i className={logo}></i>
        <p className="title">{title}</p>
        {link ? (
          <p className="para">
            <a href={link}>{para}</a>
          </p>
        ) : (
          <p className="para">{para}</p>
        )}
      </div>
    </div>
  );
}
