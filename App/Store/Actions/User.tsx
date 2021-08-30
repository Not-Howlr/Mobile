import { IUser } from "@not-howlr/types";

import { UserTypes } from "../ActionTypes/User";
import { IUserAction } from "../Reducers/UserReducer";

export const userAdd = (user: IUser): IUserAction => ({
	type: UserTypes.ADD,
	payload: {
		user
	}
});

export const userRemove = (): IUserAction => ({
	type: UserTypes.REMOVE,
	payload: {
		user: {
			uid: "",
			username: "",
			token_version: 0,
			is_verified: false
		}
	}
});