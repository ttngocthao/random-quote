import React from "react";
function Quote(props) {
  return (
    <div className="quote">
      <div id="text">{props.quote}</div>
      <div id="author">-{props.author}</div>
    </div>
  );
}

export default Quote;
