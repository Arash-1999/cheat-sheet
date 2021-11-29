const Nav = ({ setMode }) => {
  return (
    <nav>
      <button onClick={() => setMode(true)}>edit</button>
      <button onClick={() => setMode(false)}>preview</button>
    </nav>
  );
};

export default Nav;
