import React from "react";
import { View } from "react-native";

import { AppButton } from "../Components/AppButton";
import { AppScreen } from "../Components/AppScreen";
import { AppText } from "../Components/AppText";
import { Loader } from "../Components/Loader";
import { useApi } from "../Hooks/useApi";

export const AccountScreen: React.FC = (): JSX.Element => {
	const { Logout, loading } = useApi();
	return (
		<AppScreen>
			<View style={{ maxWidth: 200 }}>
				<AppText size={30}>
					account page
				</AppText>
				<AppButton title="logout" onPress={Logout} />
			</View>
			<Loader visible={loading} />
		</AppScreen>
	);
};
