import React, { useState } from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";

import { AppButton } from "../Components/AppButton";
import { AppScreen } from "../Components/AppScreen";
import { AppText } from "../Components/AppText";
import { FormInput } from "../Components/Form/FormInput";
import { Loader } from "../Components/Loader";
import { useApi } from "../Hooks/useApi";

export interface ILogin {
	username: string | null,
	password: string | null
}

interface ILoginScreenProps {
	navigation: NavigatorProps
}

export const LoginScreen: React.FC<ILoginScreenProps> = ({
	navigation
}: ILoginScreenProps): JSX.Element => {

	const [login, setLogin] = useState<ILogin>({ username: null, password: null });
	const { loading, Login, error, setError } = useApi();

	return (
		<AppScreen>
			<View style={{ width: 300 }}>
				<AppText size={30}>
					LOGIN
				</AppText>
				<FormInput
					disabled={loading}
					error={error !== undefined}
					errorMsg={error}
					label="username"
					icon="account"
					onChange={() => setError(undefined)}
					onChangeText={username => setLogin({ ...login, username })}
				/>
				<FormInput
					disabled={loading}
					error={error !== undefined}
					errorMsg={error}
					label="password"
					textContentType="password"
					secureTextEntry
					icon="lock"
					onChange={() => setError(undefined)}
					onChangeText={password => setLogin({ ...login, password })}
				/>
				<AppButton
					icon="send"
					disabled={!login.password || !login.username || loading}
					onPress={() => Login(login)}
				>
					login
				</AppButton>
				<Button onPress={() => navigation.navigate("RegisterScreen")}>create a new account</Button>
			</View>
			<Loader visible={loading} />
		</AppScreen>
	);
};