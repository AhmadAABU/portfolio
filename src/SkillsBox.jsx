import "./normal.css";
import "./all.min.css";
import "./Portfolio.css";
export default function SkillsBox({ l, title }) {
  return (
    <div className="skills-box" data-aos="fade-right">
      <img src={l} alt={title} loading="lazy" />
      <h3>{title}</h3>
    </div>
  );
}
