import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";
import { getData } from "./persist-data";

// defining initial values for store
// get data from local storage or create some default values
const initialState = {
  cells: getData(),
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
