import { configureStore } from "@reduxjs/toolkit";

const testingReducer = (store, action) => {
  switch (action.type) {
    default:
      return store;
  }
};

const store = configureStore({
  reducer: testingReducer,
});

export default store;
