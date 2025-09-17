import "./normal.css";
import "./all.min.css";
import "./Portfolio.css";
export default function MainSec() {
  return (
    <div className="main">
      <h1 className="main-header" data-aos="fade-right">
        Ahmad Jawdat
      </h1>
      <p className="main-p" data-aos="fade-right">
        Recent AABU Graduate
      </p>
      <center>
        <a className="main-b" href="#projects" data-aos="fade-right">
          View my Work
        </a>
      </center>
    </div>
  );
}
