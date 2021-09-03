import React from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";

import { AppScreen } from "../Components/AppScreen";
import { AppText } from "../Components/AppText";

interface ISettingsScreen {
	navigation: NavigatorProps
}

export const SettingsScreen: React.FC<ISettingsScreen> = ({
	navigation
}:ISettingsScreen): JSX.Element => {
	return (
		<AppScreen>
			<View style={{ maxWidth: 200 }}>
				<AppText size={30}>
					settings page
				</AppText>
				<Button onPress={() => navigation.navigate("AccountScreen")}>Back to account</Button>
			</View>
		</AppScreen>
	);
};
