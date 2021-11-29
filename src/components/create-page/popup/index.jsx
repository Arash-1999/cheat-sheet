import { Fragment, createElement, useEffect, useState } from "react";

import Window from "./window.jsx";

const Popup = ({ component }) => {
  // const dispatch = useDispatch();
  const [isOpen, setOpen] = useState(false);

  // event listener for closing popup window
  const close = () => setOpen(false);

  // childrens for passing to createElement
  const children = (
    <Fragment>
      <button onClick={() => setOpen(true)}> + </button>
      {isOpen ? <Window close={close} /> : null}
    </Fragment>
  );

  // return element with given componet and created children
  return createElement(component ? component : "div", null, children);
};

export default Popup;
