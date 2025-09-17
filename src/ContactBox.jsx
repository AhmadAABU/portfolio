import "./normal.css";
import "./all.min.css";
import "./Portfolio.css";
export default function ContactBox({ logo, title, para, link }) {
  return (
    <div data-aos="fade-right">
      <div className="inner-box">
        <i className={logo}></i>
        <p className="title">{title}</p>
        {link ? (
          <p className="para">
            <a href={link}>{para}</a>
          </p>
        ) : (
          <p className="para">{para}</p>
        )}
      </div>
    </div>
  );
}
