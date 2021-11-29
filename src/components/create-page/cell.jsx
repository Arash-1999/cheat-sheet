import { Fragment } from "react";
import { useSelector } from "react-redux";

import { selectCurrentCell } from "store/sheetSlice";
import NodeEditor from "./node-editor.jsx";
import CellRender from "cm/cell-render.jsx";

const CellEditor = () => {
  const current = useSelector(selectCurrentCell);

  return (
    <Fragment>
      {/* edit */}
      <section>
        <NodeEditor />
      </section>

      {/* output */}
      <CellRender {...current} />
    </Fragment>
  );
};

export default CellEditor;
