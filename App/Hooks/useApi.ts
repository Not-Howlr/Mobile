/* eslint-disable @typescript-eslint/no-explicit-any */
import { IUser } from "@not-howlr/types";
import { useState } from "react";
// import * as yup from "yup";

import { Api } from "../Api/BaseClient";
import { ILogin } from "../Screens/LoginScreen";
import { IRegister } from "../Screens/RegisterScreen";
import { useAppDispatch } from "../Store/Hooks";
import { clearToken, setToken } from "../Store/Slices/Token";
import { add, remove } from "../Store/Slices/User";
import { KeyNames, RemoveAsync, SaveAsync } from "../Store/Storage";

interface IUseApi {
	loading: boolean,
	auth: boolean,
	error: string | undefined,
	setError: React.Dispatch<React.SetStateAction<string | undefined>>,
	Refresh: () => Promise<void>,
	Register: (register: IRegister) => Promise<void>,
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

// const registerSchema = yup.object().shape({
// 	username: yup.string().required(),
// 	email: yup.string().email().required(),
// 	password: yup.string().min(8).matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/).required()
// });

export const useApi = (): IUseApi => {
	const dispatch = useAppDispatch();
	const [error, setError] = useState<string | undefined>();
	const [loading, setLoading] = useState(false);
	const [auth, setAuth] = useState(false);

	const finishAuth = (isAuth: boolean, error: string | undefined = undefined) => {
		setAuth(isAuth);
		setError(error);
		setLoading(false);
	};

	const Refresh = async () => {
		setLoading(true);
		const { data } = await Api.client.post("user/refresh", {}) as IApiResponse;
		if (!data.ok) return finishAuth(false, "user not found");
		dispatch(add(data.user));
		dispatch(setToken(data.token));
		await SaveAsync(KeyNames.USER, data.user);
		await SaveAsync(KeyNames.TOKEN, data.token);
		finishAuth(true);
	};

	const Login = async (login: ILogin) => {
		setLoading(true);
		const { data } = await Api.client.post("user/login", login) as IApiResponse;
		if (!data.ok) return finishAuth(false, "incorrect username / password");
		dispatch(setToken(data.token));
		dispatch(add(data.user));
		finishAuth(true);
	};

	const Register = async (register: IRegister) => {
		setLoading(true);
		const { data } = await Api.client.post("user/register", register) as IApiResponse;
		if (!data.ok) return finishAuth(false, "username / email taken");
		dispatch(setToken(data.token));
		dispatch(add(data.user));
		finishAuth(true);
	};

	const Logout = async () => {
		setLoading(true);
		await Api.client.post("user/logout", {}) as IApiResponse;
		await RemoveAsync(KeyNames.USER);
		await RemoveAsync(KeyNames.TOKEN);
		dispatch(clearToken());
		dispatch(remove());
		finishAuth(false);
	};

	return {
		loading,
		auth,
		error,
		setError,
		Refresh,
		Register,
		Logout,
		Login
	};
};