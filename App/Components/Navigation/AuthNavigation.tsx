import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { LoginScreen } from "../../Screens/LoginScreen";

const Stack = createStackNavigator();

export const AuthNavigator: React.FC = (): JSX.Element => {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
		</Stack.Navigator>
	);
};
