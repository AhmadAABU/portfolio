import React from "react";
import "./Portfolio.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function MainSec() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="main">
      <h1 className="main-header" data-aos="fade-right">
        Ahmad Jawdat
      </h1>
      <p className="main-p" data-aos="fade-right">
        Recent AABU Graduate
      </p>
      <center>
        <a className="main-b" data-aos="fade-right" href="#projects">
          View my Work
        </a>
      </center>
    </div>
  );
}
