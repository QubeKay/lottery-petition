import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

import layoutSlice from "./layout/layoutSlice";
// import filtersReducer from "./features/filters/filtersSlice";

const makeStore = () =>
  configureStore({
    reducer: {
      // Define a top-level state field named `todos`, handled by `todosReducer`
      [layoutSlice.name]: layoutSlice.reducer,
      // filters: filtersReducer,
    },
    devTools: true,
  });


export const wrapper = createWrapper(makeStore);
