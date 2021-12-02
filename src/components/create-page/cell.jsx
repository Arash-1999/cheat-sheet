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
      {current ? <CellRender {...current} /> : null}
    </Fragment>
  );
};

export default CellEditor;
