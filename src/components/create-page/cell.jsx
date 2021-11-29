import React from "react";

import NodeEditor from "./node-editor.jsx";
import CellRender from "./cell-render.jsx";

const CellEditor = () => {
  return (
    <>
      {/* edit */}
      <section>
        <NodeEditor />
      </section>

      {/* output */}
    <section>
      <CellRender />
    </section>
    </>
  );
};

export default CellEditor;
