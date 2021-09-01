import React from "react";
import { View } from "react-native";
import { AppScreen } from "../Components/AppScreen";

import { AppText } from "../Components/AppText";

export const HomeScreen: React.FC = (): JSX.Element => {
	return (
		<AppScreen>
			<View style={{ maxWidth: 200 }}>
				<AppText size={30}>
					Open up App.tsx to start working on your app!
				</AppText>
			</View>
		</AppScreen>
	);
};
