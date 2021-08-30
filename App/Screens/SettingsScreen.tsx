import React from "react";
import { View } from "react-native";

import { AppText } from "../Components/AppText";

export const SettingsScreen: React.FC = (): JSX.Element => {
	return (
		<View style={{ maxWidth: 200 }}>
			<AppText size={30}>
					settings page
			</AppText>
		</View>
	);
};
