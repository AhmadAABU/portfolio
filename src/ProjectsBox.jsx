import "./normal.css";
import "./all.min.css";
import "./Portfolio.css";
export default function ProjectsBox({ image, tags, title, p, link }) {
  return (
    <div className="grid-box-skills" data-aos="fade-right">
      <div>
        <img src={image} loading="lazy" />
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
