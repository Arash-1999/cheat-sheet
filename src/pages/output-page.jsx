import { Fragment } from "react";

import Nav from "cm/output-page/nav.jsx";
import Cards from "cm/output-page/cards.jsx";

const OutputPage = () => {
  return (
    <Fragment>
      <Nav />
      <main>
        <Cards />
      </main>
    </Fragment>
  );
};

export default OutputPage;
