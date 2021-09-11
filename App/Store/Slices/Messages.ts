import { INewMessage } from "@not-howlr/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../Store";

const initialState: INewMessage[] = [];

const messageSlice = createSlice({
	name: "message",
	initialState,
	reducers: {
		addMessage: (state, action: PayloadAction<INewMessage>) => {
			state.push(action.payload);
			return state;
		},
		clear: () => {
			return [];
		}
	}
});

export const { addMessage, clear } = messageSlice.actions;

export const messageSelector = (state: RootState): INewMessage[] => state.messages;

export default messageSlice.reducer;