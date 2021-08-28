import { IUser } from "../Reducers/UserReducer";
import { store } from "../Store";

export const getUser = (): { user: IUser | null } => {
	return store.getState();
};