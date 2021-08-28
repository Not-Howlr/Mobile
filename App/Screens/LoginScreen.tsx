import React, { useState } from "react";
import { View } from "react-native";
// import * as Yup from "yup";

import { AppScreen } from "../Components/AppScreen";
import { AppText } from "../Components/AppText";
import { AppTextInput } from "../Components/AppTextInput";
// import { AppForm } from "../Components/Form/AppForm";
import { ErrorMessage } from "../Components/Form/ErrorMessage";
import { SubmitButton } from "../Components/Form/SubmitButton";
import { Loader } from "../Components/Loader";
import { useApi } from "../Hooks/useApi";

// const validationSchema = Yup.object().shape({
// 	email: Yup.string().required().email().label("Email"),
// 	password: Yup.string().required().min(4).label("Password")
// });

export interface ILogin {
	username: string | null,
	password: string | null
}

export const LoginScreen: React.FC = (): JSX.Element => {

	const [login, setLogin] = useState<ILogin>({ username: null, password: null });
	const{ loading, Login } =  useApi();

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
				<ErrorMessage visible={false} error="generic error" />
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
				<ErrorMessage visible={false} error="generic error" />
				<SubmitButton
					disabled={!login.password || !login.username || loading}
					title="Login"
					handleSubmit={() => Login(login)}
				/>
				<Loader visible={loading} />
			</View>
		</AppScreen>
	);
};