import React from "react";
import { useSelector } from "react-redux";

import { selectCurrentCell } from "store/sheetSlice";

const CellRender = () => {
  const current = useSelector(selectCurrentCell);

  const children = [...current.nodes].map((item, i) => <li key={i}>{item}</li>);

  return (
    <>
      <h4>{current.title}</h4>
      {current.ordered ? <ol>{children}</ol> : <ul>{children}</ul>}
    </>
  );
};

export default CellRender;
