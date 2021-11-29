import { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { v4 } from "uuid";

import { createNewCell } from "store/sheetSlice";

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
    <div>
      <button onClick={close}>Close</button>
      <form onSubmit={submitHandler}>
        <input
          ref={input_ref}
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>
          ordered / unordered:
          <input
            type="checkbox"
            value={ordered}
            onChange={(e) => setOrdered(e.taget.checked)}
          />
        </label>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default Window;
