import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { removeCell, setCurrent } from "store/sheetSlice";
import MinusSvg from "assets/minus.svg";
import EditSvg from "assets/edit-2.svg";

const ListItem = ({ id, title }) => {
  const dispatch = useDispatch();

  return (
    <li className="flex flex-col text-center justify-evenly flex-shrink-0 border-2 border-indigo-600 rounded-lg shadow px-2 bg-indigo-100">
      <h5 className="text-lg font-semibold text-gray-800">{title}</h5>
      <span>
        <button
          className="text-red-500 rounded-full ring-2 p-1 mx-1 ring-red-500"
          onClick={() => dispatch(removeCell({ id }))}
        >
          <MinusSvg className="w-4 h-4" />
        </button>
        <button
          className="text-green-700 rounded-full ring-2 p-1 mx-1 ring-green-500"
          onClick={() => dispatch(setCurrent({ id }))}
        >
          <EditSvg className="w-4 h-4" />
        </button>
      </span>
    </li>
  );
};

export default ListItem;
