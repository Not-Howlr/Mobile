/* eslint-disable @typescript-eslint/no-explicit-any */
import { IUser } from "@not-howlr/types";
import { useState } from "react";

import { Api } from "../Api/BaseClient";
import { ILogin } from "../Screens/LoginScreen";
import { useAppDispatch } from "../Store/Hooks";
import { add, remove } from "../Store/Slices/User";
import { KeyNames, RemoveAsync, SaveAsync } from "../Store/Storage";

interface IUseApi {
	loading: boolean,
	auth: boolean,
	error: string | undefined,
	setError: React.Dispatch<React.SetStateAction<string | undefined>>,
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
		try {
			setLoading(true);
			const { data } = await Api.client.post("user/refresh", {}) as IApiResponse;
			if (data.ok) {
				await SaveAsync(KeyNames.USER, data.user);
				return finishAuth(true);
			}
			finishAuth(false, "user not found");
		} catch (error) {
			finishAuth(false, "an error has occured");
			console.log(error);
		}
	};

	const Login = async (login: ILogin) => {
		try {
			setLoading(true);
			const { data } = await Api.client.post("user/login", login) as IApiResponse;
			if (data.ok) {
				finishAuth(true);
				dispatch(add(data.user));
				return;
			}
			finishAuth(false, "incorrect username / password");
		} catch (error) {
			dispatch(remove());
			finishAuth(false, "an error has occured");
			console.log("error", error);
		}
	};

	const Logout = async () => {
		try {
			setLoading(true);
			await Api.client.post("user/logout", {}) as IApiResponse;
			await RemoveAsync(KeyNames.USER);
			dispatch(remove());
			finishAuth(false);
		} catch (error) {
			dispatch(remove());
			finishAuth(false);
			console.log("error", error);
		}
	};

	return {
		loading,
		auth,
		error,
		setError,
		Refresh,
		Logout,
		Login
	};
};