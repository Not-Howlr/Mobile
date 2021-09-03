import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { AccountScreen } from "../../../Screens/AccountScreen";
import { SettingsScreen } from "../../../Screens/SettingsScreen";

const Stack = createStackNavigator();

export const AccountStack: React.FC = (): JSX.Element => {
	return (

		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="AccountScreen" component={AccountScreen} />
			<Stack.Screen name="SettingsScreen" component={SettingsScreen} />
		</Stack.Navigator>
	);
};
