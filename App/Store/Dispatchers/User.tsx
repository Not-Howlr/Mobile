import { IUser } from "@not-howlr/types";

import { store } from "../Store";

export const getUser = (): { user: IUser } => {
	return store.getState();
};