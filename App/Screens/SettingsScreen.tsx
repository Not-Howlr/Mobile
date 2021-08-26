import React from "react";
import { View } from "react-native";

import { AppScreen } from "../Components/AppScreen";
import { AppText } from "../Components/AppText";

export const SettingsScreen: React.FC = (): JSX.Element => {
	return (
		<AppScreen>
			<View style={{ maxWidth: 200 }}>
				<AppText size={30}>
					settings page
				</AppText>
			</View>
		</AppScreen>
	);
};
