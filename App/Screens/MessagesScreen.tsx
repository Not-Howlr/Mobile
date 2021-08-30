import React from "react";
import { View } from "react-native";

import { AppText } from "../Components/AppText";

export const MessagesScreen: React.FC = (): JSX.Element => {
	return (
		<View style={{ maxWidth: 200 }}>
			<AppText size={30}>
					messages page
			</AppText>
		</View>
	);
};
