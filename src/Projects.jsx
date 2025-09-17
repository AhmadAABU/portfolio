import Mainbtn from "./Mainbtn";
import p1 from "./imgs/p1.jpeg";
import p2 from "./imgs/p2.jpg";
import p3 from "./imgs/p3.webp";
import p4 from "./imgs/p4.webp";
import p5 from "./imgs/p5.webp";

import ProjectsBox from "./ProjectsBox";
import "./normal.css";
import "./all.min.css";
import "./Portfolio.css";
export default function Projects() {
  return (
    <div>
      <Mainbtn title="Projects" id="projects" />
      <div className="projects-grid container">
        <ProjectsBox
          image={p3}
          tags={["HTML", " REACT", "TAILWIND", "FRAMER MOTION"]}
          title={"Commission Calculator"}
          p={
            "Developed a React.js app to manage content creator salaries and commissions with a tier-based system and real-time calculations, featuring dark/light mode, a responsive UI using Tailwind CSS and Framer Motion, and a WhatsApp registration button for quick onboarding"
          }
          link={"https://ahmadaabu.github.io/bounscal/"}
        />

        <ProjectsBox
          image={p4}
          tags={["REACT", "TAILWIND", "KEENSLIDER", "EmailJS"]}
          title={"Lumina Spaces"}
          p={
            "Developed an interactive React.js website for an interior design agency featuring a modern, responsive UI, KeenSlider for software logos, EmailJS and Floating WhatsApp for client communication, and optimized performance with React Suspense and image lazy loading."
          }
          link={"https://ahmadaabu.github.io/Eng/"}
        />

        <ProjectsBox
          image={p5}
          tags={["REACT", "TAILWIND", "Lucide Icons", "Local Storage"]}
          title={"Diamond Recharge Calculator - Bigo Live Agency "}
          p={
            "Developed a React.js web app for a Bigo Live agency to calculate diamond top-ups across multiple currencies, featuring dynamic exchange rates, transaction management with Local Storage, copy-to-clipboard, dark/light mode, and a responsive, modern UI."
          }
          link={"https://ahmadaabu.github.io/diamonds/"}
        />
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
