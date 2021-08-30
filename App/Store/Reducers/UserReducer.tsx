import { IUser } from "@not-howlr/types";

import { UserTypes } from "../ActionTypes/User";

export interface IUserAction {
	type: UserTypes,
	payload: { user: IUser }
}

let user: IUser = {
	uid: "",
	username: "",
	token_version: 0,
	is_verified: false
};

export const userReducer = (state = user, action: IUserAction): IUser => {
	if(action.type === UserTypes.ADD) {
		user = action.payload.user;
		return user;
	}
	else if(action.type === UserTypes.REMOVE) {
		user = {
			uid: "",
			username: "",
			token_version: 0,
			is_verified: false,
		};
		return user;
	}
	else return state;
};