import { UserTypes } from "../ActionTypes/User";

export interface IUser {
    uid: string;
    username: string;
    token_version: number;
    is_verified: boolean;
}

export interface IUserAction {
	type: UserTypes,
	payload: {
		user: IUser | null
	}
}

let user: IUser | null = null;

export const userReducer = (state = user, action: IUserAction): IUser | null => {
	if(action.type === UserTypes.ADD) {
		user = action.payload.user;
		return user;
	}
	else if(action.type === UserTypes.REMOVE) {
		user = null;
		return user;
	}
	else return state;
};