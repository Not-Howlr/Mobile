/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useDispatch } from "react-redux";

import { Api } from "../Api/BaseClient";
import { ILogin } from "../Screens/LoginScreen";
import { userAdd, userRemove } from "../Store/Actions/User";
import { IUser } from "../Store/Reducers/UserReducer";
// import { getUser } from "../Store/Dispatchers/User";
// import { IUser } from "../Store/Reducers/UserReducer";

interface IUseApi {
	loading: boolean,
	auth: boolean,
	// user: IUser | undefined,
	Refresh: () => Promise<void>
	Logout: () => Promise<void>,
	Login: (login: ILogin) => Promise<void>
}

interface IApiResponse {
	data: {
		ok: boolean,
		token: string,
		user: IUser
	}
}

export const useApi = (): IUseApi => {
	const dispatch = useDispatch();
	const [loading, setLoading] = useState(false);
	const [auth, setAuth] = useState(false);

	const finishAuth = (isAuth: boolean) => {
		setLoading(false);
		setAuth(isAuth);
	};

	const Refresh = async () => {
		try {
			setLoading(true);
			const { data } = await Api.client.post("user/refresh", {}) as IApiResponse;
			if (data.ok) {
				return finishAuth(true);
			}
			finishAuth(false);
		} catch (error) {
			finishAuth(false);
			console.log(error);
		}
	};

	const Login = async (login: ILogin) => {
		try {
			setLoading(true);
			const { data } = await Api.client.post("user/login", login) as IApiResponse;
			if (data.ok) {
				finishAuth(true);
				dispatch(userAdd(data.user));
				return;
			}
			dispatch(userRemove());
			finishAuth(false);
		} catch (error) {
			dispatch(userRemove());
			finishAuth(false);
			console.log("error", error);
		}
	};

	const Logout = async () => {
		try {
			setLoading(true);
			await Api.client.post("user/logout", {}) as IApiResponse;
			finishAuth(false);
			dispatch(userRemove());
		} catch (error) {
			dispatch(userRemove());
			finishAuth(false);
			console.log("error", error);
		}
	};

	return {
		loading,
		auth,
		Refresh,
		Logout,
		Login
	};
};