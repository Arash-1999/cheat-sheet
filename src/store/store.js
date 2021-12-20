import { configureStore } from "@reduxjs/toolkit";
import throttle from "lodash/throttle";

import sheetReducer from "./sheetSlice";
import { setData } from "./persist-data";

const store = configureStore({
  reducer: { sheet: sheetReducer },
});

// add method to stroe for storing data in local storage
store.subscribe(
  // run at most once a second
  // for performance reasons
  throttle(() => {
    setData(store.getState().sheet.cells);
  }, 1000)
);

export default store;
