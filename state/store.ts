import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "../screens/auth/AuthSlice";

const configureAppStore = () => {
  return configureStore({
    reducer: {
      ...authReducer,
    },
  });
};

const store = configureAppStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
