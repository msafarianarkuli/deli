import {configureStore} from "@reduxjs/toolkit";
import {createWrapper} from "next-redux-wrapper";
import templateReducer from "redux/template/templateReducer";
import addressMapReducer from "redux/addressMap/addressMapReducer";

const makeStore = () =>
  configureStore({
    reducer: {
      template: templateReducer,
      addressMap: addressMapReducer,
    },
    devTools: process.env.NODE_ENV === "development",
  });

const store = makeStore();

const wrapper = createWrapper(makeStore, {debug: process.env.NODE_ENV === "development"});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default wrapper;
