import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { removeCell, setCurrent } from "store/sheetSlice";

const ListItem = ({ id, title }) => {
  const dispatch = useDispatch();

  return (
    <li>
      {title}
      <button onClick={() => dispatch(removeCell({ id }))}>-</button>
      <button onClick={() => dispatch(setCurrent({ id }))}> select </button>
    </li>
  );
};

export default ListItem;
