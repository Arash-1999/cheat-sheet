import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  addNode,
  changeNode,
  removeNode,
  selectCurrentCell,
} from "store/sheetSlice";
import MinusSvg from "assets/minus.svg";
import PlusSvg from "assets/plus.svg";

const NodeEditor = () => {
  const dispatch = useDispatch();
  const current = useSelector(selectCurrentCell);

  return current ? (
    <ul className="md:flex-1 space-y-4">
      {current.nodes.map((item, i) => (
        <li className="flex gap-x-3" key={i}>
          <textarea
            className="flex-1 resize-y p-2 rounded outline-none focus:ring-4 ring-green-300"
            rows="3"
            placeholder={`type your content of item number ${i + 1}`}
            value={item}
            onChange={(e) =>
              dispatch(changeNode({ index: i, value: e.target.value }))
            }
          />
          <button
            className="self-center text-red-500 rounded-full p-2 ring-2 ring-red-500 hover:bg-red-50"
            onClick={() => dispatch(removeNode({ index: i }))}
          >
            <MinusSvg className="w-4 h-4" />
          </button>
        </li>
      ))}
      <li className="text-center">
        <button
          className="rounded-full text-gray-600 p-2 ring-2 ring-gray-600"
          onClick={() => dispatch(addNode())}
        >
          <PlusSvg className="w-6 h-6" />
        </button>
      </li>
    </ul>
  ) : null;
};

export default NodeEditor;
