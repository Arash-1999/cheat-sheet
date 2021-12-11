import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import min_max_finder from "utils";
import { selectCells } from "store/sheetSlice";
import Cell from "cm/cell-render.jsx";

// custom hook
const useMasonary = (cells) => {
  // declare base size for column size
  const BASE = 368;
  // local states
  const [cols, setCols] = useState(() =>
    Math.min(cells.length, parseInt(window.innerWidth / BASE))
  );
  const [newCells, setNewCells] = useState([]);

  // add event listener for resize
  useEffect(() => {
    const resizeHandler = () => {
      setCols(Math.min(cells.length, parseInt(window.innerWidth / BASE)));
    };

    window.addEventListener("resize", resizeHandler);

    return () => window.removeEventListener("resize", resizeHandler);
  }, []);

  // generate new data
  useEffect(() => {
    const newState = Array.from({ length: cols }, (_) => []);
    let lengths = Array.from({ length: cols }, (_) => 0);

    for (let i = 0, len = cells.length; i < len; i += cols) {
      for (let j = 0; j < cols; j++) {
        if (cells[i + j]) {
          newState[j].push(cells[i + j]);
          lengths[j] += cells[i + j].nodes.length;
        }
      }
    }

    // handle height of columns
    for (let i = 0; i < cols - 1; i++) {
      let { min, max, minIndex, maxIndex } = min_max_finder(lengths);
      if (max - min > 4) {
        lengths[minIndex] += newState[maxIndex].at(-1).nodes.length;
        lengths[maxIndex] -= newState[maxIndex].at(-1).nodes.length;
        newState[minIndex].push(newState[maxIndex].pop());
      }
    }

    setNewCells(newState);
  }, [cols]);

  return newCells;
};

// component
const MasonaryGrid = () => {
  const cells = useSelector(selectCells);
  const data = useMasonary(cells);

  return (
    <main className="flex items-stretch gap-4 p-4 bg-indigo-100">
      {data.map((item, i) => (
        <article className="space-y-4 flex-1" key={i}>
          {item.map((cell) => (
            <Cell key={cell.id} {...cell} />
          ))}
        </article>
      ))}
    </main>
  );
};

export default MasonaryGrid;
