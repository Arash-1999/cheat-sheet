import { useState, useEffect } from "react";
import html2canvas from "html2canvas";

const Nav = ({ target }) => {
  const [url, setUrl] = useState("#");

  useEffect(() => {
    if (target.current) {
      html2canvas(target.current, {
        backgroundColor: "#E0E7FF",
        logging: false,
      }).then((canvas) => {
        const data = canvas.toDataURL("application/x-pdf");

        setUrl(data);
      });
    }
  }, [target]);

  // button styles
  const styles =
    "font-bold text-gray-700 border-2 border-indigo-700 py-1 px-3 rounded ";

  return (
    <nav className="flex justify-end gap-4 px-5 my-2">
      <a className={styles + "bg-indigo-200"} target="_blank" href={url}>
        Preview
      </a>
      <br />
      <a className={styles + "bg-indigo-300"} download="page.png" href={url}>
        Download
      </a>
    </nav>
  );
};

export default Nav;
