import { Fragment, useRef } from "react";

import Nav from "cm/output-page/nav.jsx";
import MasonaryGrid from "cm/output-page/masonary-grid.jsx";

const OutputPage = () => {
  const containerRef = useRef();

  return (
    <Fragment>
      <Nav target={containerRef} />
      <MasonaryGrid ref={containerRef} />
    </Fragment>
  );
};

export default OutputPage;
