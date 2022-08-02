import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase";

const initialState = {
  auth: {},
  loading: true,
};

export const fetchLoginGoogle = createAsyncThunk(
  "auth/fetchLoginGoogle",
  async (thunk) => {
    try {
      const res = await signInWithPopup(auth, provider);
      return res;
    } catch (error) {
      console.error(error);
    }
  }
);

export const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchLoginGoogle.pending, (state, { payload }) => {
        state.loading = true;
      })
      .addCase(fetchLoginGoogle.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.auth = payload;
      })
      .addCase(fetchLoginGoogle.rejected, (state, { payload }) => {
        state.loading = false;
      });
  },
});

export default authenticationSlice.reducer;
