import React, { useState } from "react";
import { View } from "react-native";

import { AppScreen } from "../Components/AppScreen";
import { AppText } from "../Components/AppText";
import { AppTextInput } from "../Components/AppTextInput";
import { ErrorMessage } from "../Components/Form/ErrorMessage";
import { SubmitButton } from "../Components/Form/SubmitButton";
import { Loader } from "../Components/Loader";
import { useApi } from "../Hooks/useApi";

export interface ILogin {
	username: string | null,
	password: string | null
}

export const LoginScreen: React.FC = (): JSX.Element => {

	const [login, setLogin] = useState<ILogin>({ username: null, password: null });
	const { loading, Login, error } = useApi();

	return (
		<AppScreen>
			<View style={{ width: 300 }}>
				<AppText size={30}>
					LOGIN
				</AppText>
				<AppTextInput
					icon="account"
					disabled={loading}
					autoCapitalize="none"
					autoCorrect={false}
					keyboardType="email-address"
					placeholder="username..."
					onChangeText={username => setLogin({ ...login, username })}
					textContentType="emailAddress"
				/>
				<ErrorMessage visible={error !== undefined} error={error || "network error"} />
				<AppTextInput
					autoCapitalize="none"
					disabled={loading}
					autoCorrect={false}
					icon="lock"
					placeholder="password..."
					secureTextEntry={true}
					onChangeText={password => setLogin({ ...login, password })}
					textContentType="password"
				/>
				<ErrorMessage visible={error !== undefined} error={error || "network error"} />
				<SubmitButton
					disabled={!login.password || !login.username || loading}
					title="Login"
					handleSubmit={() => Login(login)}
				/>
			</View>
			<Loader visible={loading} />
		</AppScreen>
	);
};