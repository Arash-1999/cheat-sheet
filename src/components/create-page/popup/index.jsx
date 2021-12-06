import { Fragment, createElement, useEffect, useState } from "react";

import Window from "./window.jsx";
import PlusSvg from "assets/plus.svg";

const Popup = ({ component }) => {
  // const dispatch = useDispatch();
  const [isOpen, setOpen] = useState(false);

  // event listener for closing popup window
  const close = () => setOpen(false);

  // childrens for passing to createElement
  const children = (
    <Fragment>
      <button
        className="rounded-full text-gray-600 p-2 ring-2 ring-gray-600"
        onClick={() => setOpen(true)}
      >
        <PlusSvg className="w-6 h-6" />
      </button>
      {isOpen ? <Window close={close} /> : null}
    </Fragment>
  );
  const styles = "flex-shrink-0 grid place-items-center px-2";

  // return element with given componet and created children
  return createElement(
    component ? component : "div",
    { className: styles },
    children
  );
};

export default Popup;
