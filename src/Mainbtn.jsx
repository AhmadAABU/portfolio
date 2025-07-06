import React from "react";

export default function Mainbtn({ title, id }) {
  return (
    <div>
      <h1 className="sec-h" id={id}>
        {title}
      </h1>
    </div>
  );
}
