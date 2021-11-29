import { useState, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectCells } from "store/sheetSlice";
import ListItem from "./cards-list-item.jsx";
import Popup from "./popup/index.jsx";

const Cards = () => {
  const cells = useSelector(selectCells);

  return (
    <ul>
      {cells.map((item) => (
        <ListItem key={item.id} id={item.id} title={item.title} />
      ))}
      <Popup component="li" />
    </ul>
  );
};

export default Cards;
