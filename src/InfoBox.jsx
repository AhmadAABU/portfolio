import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function InfoBox({ iconClass, title, description }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="box" data-aos="fade-right">
      <i className={iconClass}></i>
      <div className="insider">
        <h3 className="insider-h3">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
