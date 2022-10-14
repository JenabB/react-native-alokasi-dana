import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
import axios from "axios";
import * as SecureStore from "expo-secure-store";

const HOST = "https://svc-not-e.herokuapp.com";

interface RegisterProps {
  fullName: string;
  email: string;
  password: string;
}

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (params: RegisterProps, { rejectWithValue }) => {
    try {
      const response = await axios
        .post(`${HOST}/v1/user/register/owner`, {
          ...params,
          contactNumber: "12",
        })
        .then((res) => res.data);

      return response;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

interface LoginParams {
  email: string;
  password: string;
}

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (params: LoginParams, { rejectWithValue }) => {
    try {
      const response = await axios
        .post(`${HOST}/v1/user/login/owner`, params)
        .then((res) => {
          SecureStore.setItemAsync("alokasi-auth", res.data.token);
          return res.data;
        })
        .catch((error) => {
          console.log(error, "error");
          return error.response.data;
        });

      console.log(response, "login error");

      return response;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const clearAuth = createAction("auth/clearAuth", () => ({
  payload: {
    error: false,
    status: 0,
    message: "",
  },
}));
