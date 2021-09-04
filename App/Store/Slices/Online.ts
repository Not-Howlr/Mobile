import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../Store";

const initialState = false;

const onlineSlice = createSlice({
	name: "online",
	initialState,
	reducers: {
		online: (_, action: PayloadAction<boolean>) => {
			return action.payload;
		},
		offline: () => {
			return false;
		}
	}
});

export const { online, offline } = onlineSlice.actions;

export const onlineSelector = (state: RootState): boolean => state.online;

export default onlineSlice.reducer;