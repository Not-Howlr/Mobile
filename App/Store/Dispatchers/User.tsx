import { IUser } from "@not-howlr/types";

import { store } from "../Store";

export const getUser = (): IUser => {
	return store.getState().user;
};