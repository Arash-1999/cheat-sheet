import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  addNode,
  changeNode,
  removeNode,
  selectCurrentCell,
} from "store/sheetSlice";

const NodeEditor = () => {
  const dispatch = useDispatch();
  const current = useSelector(selectCurrentCell);

  return (
    <ul>
      {current.nodes.map((item, i) => (
        <li key={i}>
          <textarea
            value={item}
            onChange={(e) =>
              dispatch(changeNode({ index: i, value: e.target.value }))
            }
          />
          <button onClick={() => dispatch(removeNode({ index: i }))}>
            {" "}
            -{" "}
          </button>
        </li>
      ))}
      <li>
        <button onClick={() => dispatch(addNode())}> + </button>
      </li>
    </ul>
  );
};

export default NodeEditor;
