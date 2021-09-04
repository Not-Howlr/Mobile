import { IUser } from "@not-howlr/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../Store";

const initialState: IUser = {
	uid: "",
	username: "",
	token_version: 0,
	is_verified: false,
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		add: (_, action: PayloadAction<IUser>) => {
			return action.payload;
		},
		remove: () => {
			return {
				uid: "",
				username: "",
				token_version: 0,
				is_verified: false,
			};
		}
	}
});

export const { add, remove } = userSlice.actions;

export const userSelector = (state: RootState): IUser => state.user;

export default userSlice.reducer;