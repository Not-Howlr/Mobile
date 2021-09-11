import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../Store";

const initialState = "";

const tokenSlice = createSlice({
	name: "token",
	initialState,
	reducers: {
		setToken: (_, action: PayloadAction<string>) => {
			return action.payload;
		},
		clearToken: () => {
			return "";
		}
	}
});

export const { setToken, clearToken } = tokenSlice.actions;

export const tokenSelector = (state: RootState): string => state.token;

export default tokenSlice.reducer;