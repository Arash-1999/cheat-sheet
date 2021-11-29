import { Fragment, useState } from "react";

import CreatePage from "./pages/create-page.jsx";
import OutputPage from "./pages/output-page.jsx";

const App = () => {
  const [editMode, setEditMode] = useState(true);

  return (
    <Fragment>
      <nav>
        <button onClick={() => setEditMode(true)}>edit</button>
        <button onClick={() => setEditMode(false)}>preview</button>
      </nav>

      {editMode ? <CreatePage /> : <OutputPage />}
    </Fragment>
  );
};

export default App;
