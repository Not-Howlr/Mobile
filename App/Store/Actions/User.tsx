import { UserTypes } from "../ActionTypes/User";
import { IUser, IUserAction } from "../Reducers/UserReducer";

export const userAdd = (user: IUser): IUserAction => ({
	type: UserTypes.ADD,
	payload: {
		user
	}
});

export const userRemove = (): IUserAction => ({
	type: UserTypes.REMOVE,
	payload: {
		user: null
	}
});