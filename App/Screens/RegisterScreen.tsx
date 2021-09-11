import React, { useState } from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";
import { AppButton } from "../Components/AppButton";

import { AppScreen } from "../Components/AppScreen";
import { AppText } from "../Components/AppText";
import { FormInput } from "../Components/Form/FormInput";
import { useApi } from "../Hooks/useApi";

export interface IRegister {
	username: string | null,
	email: string | null,
	password: string | null
}

interface IRegisterScreenProps {
	navigation: NavigatorProps
}

export const RegisterScreen: React.FC<IRegisterScreenProps> = ({
	navigation
}: IRegisterScreenProps): JSX.Element => {

	const [registration, setRegistration] = useState<IRegister>({ username: null, email: null, password: null });
	const { loading, Register, error, setError } = useApi();

	return (
		<AppScreen>
			<View style={{ width: 300 }}>
				<AppText size={30}>
					REGISTER
				</AppText>
				<FormInput
					disabled={loading}
					error={error !== undefined}
					errorMsg={error}
					label="email"
					keyboardType="email-address"
					textContentType="emailAddress"
					icon="email"
					onChange={() => setError(undefined)}
					onChangeText={email => setRegistration({ ...registration, email })}
				/>
				<FormInput
					disabled={loading}
					error={error !== undefined}
					errorMsg={error}
					label="username"
					icon="account"
					onChange={() => setError(undefined)}
					onChangeText={username => setRegistration({ ...registration, username })}
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
					onChangeText={password => setRegistration({ ...registration, password })}
				/>
				<AppButton
					icon="send"
					disabled={!registration.password || !registration.username || !registration.email || loading}
					onPress={() => Register(registration)}
				>
					register
				</AppButton>
				<Button onPress={() => navigation.navigate("LoginScreen")}>login with an existing account</Button>
			</View>
		</AppScreen>
	);
};
