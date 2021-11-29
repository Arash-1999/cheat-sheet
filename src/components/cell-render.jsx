import React from "react";

const CellRender = ({ title, ordered, nodes }) => {
  const children = nodes.map((item, i) => <li key={i}>{item}</li>);

  return (
    <article>
      <h4>{title}</h4>
      {ordered ? <ol>{children}</ol> : <ul>{children}</ul>}
    </article>
  );
};

export default CellRender;
