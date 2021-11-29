import { Fragment } from "react";
import { useSelector } from "react-redux";

import { selectCells } from "store/sheetSlice";
import Cell from "cm/cell-render.jsx";

const Cards = () => {
  const cells = useSelector(selectCells);

  return (
    <Fragment>
      {cells.map((item) => (
        <Cell key={item.id} {...item} />
      ))}
    </Fragment>
  );
};

export default Cards;
