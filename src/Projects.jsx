import React from "react";
import Mainbtn from "./Mainbtn";
import p1 from "./imgs/p1.jpeg";
import p2 from "./imgs/p2.jpg";
import ProjectsBox from "./ProjectsBox";
export default function Projects() {
  return (
    <div>
      <Mainbtn title="Projects" id="projects" />
      <div className="projects-grid container">
        <ProjectsBox
          image={p1}
          tags={["HTML", "CSS", "JAVASCRIPT", "PHP", "MySQL"]}
          title={"Gamingly Store"}
          p={
            "An online store for selling computer parts like monitors, mice, and other components. It includes user registration, login, a shopping cart with localStorage support, and a smooth user experience for browsing and managing products."
          }
          link={"https://ahmadaabu.github.io/gaminglystore/index.html"}
        />

        <ProjectsBox
          image={p2}
          tags={["HTML", "CSS", "JAVASCRIPT", "PYHTON", "MySQL"]}
          title={"UNIVERSITY FAQ"}
          p={
            "A chatbot that helps university students get instant answers to common questions. It uses a simple chat interface connected to a Flask API that searches a large FAQ database and returns the best match."
          }
          link={"#"}
        />
      </div>
    </div>
  );
}
