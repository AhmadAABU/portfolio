import React from "react";
import "./Portfolio.css";
import NavBar from "./NavBar";
import MainSec from "./MainSec";
import Section from "./Section";
import SkillsSec from "./SkillsSec";
import Projects from "./Projects";
import Contact from "./contact";
import Footer from "./Footer";
export default function Portfolio() {
  return (
    <div>
      <NavBar />
      <MainSec />
      <Section />
      <SkillsSec />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
