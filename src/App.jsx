import { Fragment, useState } from "react";

import Nav from "cm/nav.jsx";
import CreatePage from "./pages/create-page.jsx";
import OutputPage from "./pages/output-page.jsx";

const App = () => {
  const [editMode, setEditMode] = useState(true);

  return (
    <Fragment>
      <Nav setMode={setEditMode} />

      {editMode ? <CreatePage /> : <OutputPage />}
    </Fragment>
  );
};

export default App;
