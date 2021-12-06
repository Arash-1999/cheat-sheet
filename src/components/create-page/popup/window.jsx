import { Fragment, useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { v4 } from "uuid";

import { createNewCell } from "store/sheetSlice";
import XSvg from "assets/x.svg";

const Window = ({ close }) => {
  // redux state
  const dispatch = useDispatch();
  // local state
  const [title, setTitle] = useState("");
  const [ordered, setOrdered] = useState(false);
  // create ref for focusing on text input
  const input_ref = useRef();

  // create new card on submitting form
  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(createNewCell(title, ordered));
    setTitle("");
    setOrdered(false);

    close();
  };

  // focus on text input
  useEffect(() => {
    if (input_ref.current) input_ref.current.focus();
  }, []);

  // close window with escape key
  useEffect(() => {
    const closePopup = (e) => {
      if (e.keyCode === 27) close();
    };
    window.addEventListener("keydown", closePopup);

    return () => window.removeEventListener("keydown", closePopup);
  });

  return (
    <Fragment>
      <div
        onClick={close}
        className="fixed inset-0 z-10 opacity-40 bg-gray-400 blur"
      />
      <div className="flex flex-col fixed z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-md w-9/12 bg-gray-100 p-3 rounded-xl shadow-lg">
        <button
          className="ring-2 ring-gray-500 text-gray-500 p-2 self-end rounded-full"
          onClick={close}
        >
          <XSvg className="w-5 h-5" />
        </button>

        <form className="flex flex-col gap-3" onSubmit={submitHandler}>
          <input
            className="w-full outline-none bg-transparent border-b-2 border-gray-300 focus:border-gray-600 py-2 px-3"
            ref={input_ref}
            placeholder="type your title..."
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>
            ordered / unordered:
            <input
              className="mx-2"
              type="checkbox"
              value={ordered}
              onChange={(e) => setOrdered(e.target.checked)}
            />
          </label>
          <button
            className="self-end border-2 border-indigo-600 uppercase rounded-xl text-indigo-600 py-1 px-5 font-bold hover:bg-indigo-200"
            type="submit"
          >
            Create
          </button>
        </form>
      </div>
    </Fragment>
  );
};

export default Window;
