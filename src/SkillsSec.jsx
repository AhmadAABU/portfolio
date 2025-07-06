import React from "react";
import "./Portfolio.css";
import Mainbtn from "./Mainbtn";
import SkillsBox from "./SkillsBox";
import html from "./imgs/html.png";
import css from "./imgs/css.png";
import js from "./imgs/js.png";
import react from "./imgs/react.png";
import tw from "./imgs/tailwind.png";
import msql from "./imgs/mysql.png";
import oracle from "./imgs/oracle.png";
import gh from "./imgs/github.png";
import vs from "./imgs/vs.png";
import pm from "./imgs/pm.png";
import py from "./imgs/py.png";
import java from "./imgs/java.png";
import php from "./imgs/php.png";
import ps from "./imgs/ps.png";
import sql from "./imgs/sql.png";

export default function SkillsSec() {
  return (
    <div>
      <Mainbtn title="My Skills" id="skills" />
      <div className="skills-grid container">
        <SkillsBox l={html} title={"HTML"} />
        <SkillsBox l={css} title={"CSS"} />
        <SkillsBox l={js} title={"Javascript"} />
        <SkillsBox l={react} title={"React"} />
        <SkillsBox l={tw} title={"Tailwind"} />
        <SkillsBox l={msql} title={"MySql"} />
        <SkillsBox l={oracle} title={"Oracle"} />
        <SkillsBox l={gh} title={"GitHub"} />
        <SkillsBox l={vs} title={"VS Code"} />
        <SkillsBox l={pm} title={"Postman"} />
        <SkillsBox l={py} title={"Python"} />
        <SkillsBox l={java} title={"Java"} />
        <SkillsBox l={php} title={"PHP"} />
        <SkillsBox l={ps} title={"Photoshop"} />
        <SkillsBox l={sql} title={"SQL"} />
      </div>
    </div>
  );
}
