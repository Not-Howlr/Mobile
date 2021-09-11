import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { LoginScreen } from "../../Screens/LoginScreen";
import { RegisterScreen } from "../../Screens/RegisterScreen";

const Stack = createStackNavigator();

export const AuthNavigator: React.FC = (): JSX.Element => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="LoginScreen"
				component={LoginScreen}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="RegisterScreen"
				component={RegisterScreen}
				options={{headerShown: false}}
			/>
		</Stack.Navigator>
	);
};
