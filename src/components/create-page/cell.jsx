import { Fragment } from "react";
import { useSelector } from "react-redux";

import { selectCurrentCell } from "store/sheetSlice";
import NodeEditor from "./node-editor.jsx";
import CellRender from "cm/cell-render.jsx";

const CellEditor = () => {
  const current = useSelector(selectCurrentCell);

  return (
    <section className="flex gap-8 p-4 flex-col md:flex-row">
      {/* edit */}
      <NodeEditor />

      {/* output */}
      {current ? <CellRender {...current} /> : null}
    </section>
  );
};

export default CellEditor;
