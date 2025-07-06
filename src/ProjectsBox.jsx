import React from "react";
import "./Portfolio.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function ProjectsBox({ image, tags, title, p, link }) {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div className="grid-box-skills" data-aos="fade-right">
      <div>
        <img src={image} />
      </div>
      <div className="flex-box">
        {tags.map((tag, index) => (
          <span className="cv-btn" key={index}>
            {tag}
          </span>
        ))}
      </div>
      <div className="text">
        <h2 className="proj-h">{title}</h2>
        <p className="insider-p">{p}</p>
        <i className="fa-solid fa-link"></i>
        <a href={link}>Live Demo</a>
      </div>
    </div>
  );
}
