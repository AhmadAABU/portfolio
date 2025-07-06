import React from "react";
import InfoBox from "./InfoBox";
import Mainbtn from "./Mainbtn";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Section() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <section>
      <Mainbtn title="About Me" id="about" />
      <div className="card container" data-aos="fade-up">
        <h1>Computer Science & Front-End Developer</h1>
        <p>
          A recent Computer Science graduate seeking a full-time position or a
          3–6 month internship with potential for permanent employment. Eager to
          contribute to real-world projects, enhance my technical and practical
          skills, and collaborate within a professional and growth-oriented
          environment.{" "}
        </p>
        <div className="tail1">
          <span>
            <i className="fa-solid fa-graduation-cap"></i> GPA : 3.15
          </span>
          <span>
            <i className="fa-solid fa-earth-americas"></i> Arabic & English
          </span>
          <span>
            <i className="fa-solid fa-paperclip"></i> 10+ Projects Built
          </span>
        </div>
        <div className="tail2">
          <button className="in-touch">
            <a href="#contact" style={{ color: "white" }}>
              Get In touch
            </a>
          </button>

          <a
            className="cv-btn"
            href="/portfolio/aj.pdf"
            download="ahmad Jawdat.pdf"
          >
            Download CV
          </a>
        </div>
      </div>
      <div className="grid-box container">
        <InfoBox
          iconClass="fa-solid fa-computer"
          title="Professional Background"
          description="Very good in React, xammp, with a continuous interest in learning
              new technologies and best practices in web development."
        />
        <InfoBox
          iconClass="fa-solid fa-list-check"
          title="Notable Projects"
          description="Built 10+ frontend projects and full-stack applications using modern
      technologies such as React, Tailwind CSS, Bootstrap and more."
        />
      </div>
    </section>
  );
}
