import "./normal.css";
import "./all.min.css";
import "./Portfolio.css";
export default function InfoBox({ iconClass, title, description }) {
  return (
    <div className="box" data-aos="fade-right">
      <i className={iconClass}></i>
      <div className="insider">
        <h3 className="insider-h3">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
