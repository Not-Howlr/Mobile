import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { MessagesScreen } from "../../../Screens/MessagesScreen";

const Stack = createStackNavigator();

export const MessageStack: React.FC = (): JSX.Element => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="MessagesScreen" component={MessagesScreen} />
		</Stack.Navigator>
	);
};
