import "./normal.css";
import "./all.min.css";
import "./Portfolio.css";

export default function Mainbtn({ title, id }) {
  return (
    <div>
      <h1 className="sec-h" id={id}>
        {title}
      </h1>
    </div>
  );
}
