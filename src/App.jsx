import { Suspense, lazy, useEffect } from "react";
import "./normal.css";
import "./all.min.css";
import "./Portfolio.css";
import AOS from "aos";
import "aos/dist/aos.css";
const NavBar = lazy(() => import("./NavBar"));
const MainSec = lazy(() => import("./MainSec"));
const Section = lazy(() => import("./Section"));
const SkillsSec = lazy(() => import("./SkillsSec"));
const Projects = lazy(() => import("./Projects"));
const Contact = lazy(() => import("./Contact"));
const Footer = lazy(() => import("./Footer"));

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <Suspense fallback={<div></div>}>
        <NavBar />
      </Suspense>

      <Suspense fallback={<div></div>}>
        <MainSec />
      </Suspense>

      <Suspense fallback={<div></div>}>
        <Section />
      </Suspense>

      <Suspense fallback={<div></div>}>
        <SkillsSec />
      </Suspense>

      <Suspense fallback={<div></div>}>
        <Projects />
      </Suspense>

      <Suspense fallback={<div></div>}>
        <Contact />
      </Suspense>

      <Suspense fallback={<div></div>}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
