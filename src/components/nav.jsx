const Nav = ({ editMode, setMode }) => {
  // button styles
  const button = "flex-1 rounded uppercase font-semibold py-2 ";
  const base = "bg-indigo-300 shadow-md";
  const active = "bg-indigo-200 shadow-xl";

  return (
    <nav className="w-full flex align-stretch gap-3 p-2 w-8 rounded bg-indigo-500">
      <button
        className={editMode ? button + active : button + base}
        onClick={() => setMode(true)}
      >
        edit
      </button>
      <button
        className={!editMode ? button + active : button + base}
        onClick={() => setMode(false)}
      >
        preview
      </button>
    </nav>
  );
};

export default Nav;
