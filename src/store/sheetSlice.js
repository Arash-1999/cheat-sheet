import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";

// defining initial values for store
const initialState = {
  cells: [
    {
      id: "ade0deac-855d-401d-9846-a13b2f7cac0b",
      ordered: true,
      title: "the 'Five Pillars' are the fundemental principles of Wikipedia",
      nodes: [
        "Wikipedia is an encyclopedia",
        "Wikipedia is written from a neutral point of view",
        "Wikipedia is free content that anyone can use, edit and distribute",
        "Editros should treat each other with respect and civlity",
        "Wikipedia has no firm rules",
      ],
    },
    {
      id: "4113b736-5a1e-4543-991a-4f92bd08669f",
      ordered: false,
      title: "Wikipedia useful pages",
      nodes: [
        "help with editing: http://en.wikipedia.org/wiki/Help:Editing",
        "Wikipedia guidlines: http://en.wikipedia.org/wiki/Wikipedia:List_of_guidelines",
        "Wikipedia policies: http://en.wikipedia.org/wiki/Wikipedia:List_of_policies",
        "Wikipedia manual of style: http://en.wikipedia.org/wiki/Wikipedia:Manual_of_Style",
        "Guide to notability: http://en.wikipedia.org/wiki/Wikipedia:Notability",
        "Wikipedia help desk: http://en.wikipedia.org/wiki/Wikipedia:Help_desk",
        "Comprehensive list of useful links: http://en.wikipedia.org/wiki/User:A._B./Useful_Wikipedia_links",
      ],
    },
  ],
  current: 0,
};

// creating slice
const sheetSlice = createSlice({
  name: "sheet",
  initialState,
  reducers: {
    addCell: (state, action) => {
      const cell = {
        id: action.payload.id,
        ordered: action.payload.ordered,
        title: action.payload.title,
        nodes: [],
      };
      state.cells.push(cell);
    },
    removeCell: (state, action) => {
      const index = state.cells.findIndex(
        (item) => item.id === action.payload.id
      );

      state.cells.splice(index, 1);
    },
    setCurrent: (state, action) => {
      const index = state.cells.findIndex(
        (item) => item.id === action.payload.id
      );

      state.current = index;
    },
    addNode: (state) => {
      state.cells[state.current].nodes.push("");
    },
    changeNode: (state, action) => {
      state.cells[state.current].nodes[action.payload.index] =
        action.payload.value;
    },
    removeNode: (state, action) => {
      state.cells[state.current].nodes.splice(action.payload.index, 1);
    },
  },
});

// actions
export const {
  addNode,
  changeNode,
  removeNode,
  addCell,
  removeCell,
  setCurrent,
} = sheetSlice.actions;

// selectors
export const selectCells = (state) => state.sheet.cells;
export const selectCurrentCell = (state) =>
  state.sheet.cells[state.sheet.current];
export const currentIndex = (state) => state.sheet.current;

// thunks
export const createNewCell = (title, ordered) => (dispatch) => {
  // generate uuid for new cell
  const id = v4();
  // add new cell to store
  dispatch(addCell({ title, ordered, id }));
  // set new cell as current working cell
  dispatch(setCurrent({ id }));
};
// reducer as default export
export default sheetSlice.reducer;
