import React from "react";
import "./Portfolio.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function SkillsBox({ l, title }) {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div className="skills-box" data-aos="fade-right">
      <img src={l} />
      <h3>{title}</h3>
    </div>
  );
}
