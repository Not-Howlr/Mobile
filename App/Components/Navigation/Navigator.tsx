/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/display-name */
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { HomeScreen } from "../../Screens/HomeScreen";
import { SettingsScreen } from "../../Screens/SettingsScreen";
import { MessagesScreen } from "../../Screens/MessagesScreen";
import { AccountScreen } from "../../Screens/AccountScreen";
import { Colors } from "../../Constants/Colors";

const Tab = createBottomTabNavigator();

interface ITabProps {
	color: string,
	size: number
}

interface IRouteProps {
	name: string,
	component: React.FC<any>,
	icon: any
}

const Routes = [
	{ name: "Home", component: HomeScreen, icon: "home" },
	{ name: "Messages", component: MessagesScreen, icon: "message" },
	{ name: "Account", component: AccountScreen, icon: "account" },
	{ name: "Settings", component: SettingsScreen, icon: "cog" }
] as IRouteProps[];

export const Navigator: React.FC = (): JSX.Element => {

	return (
		<Tab.Navigator
			screenOptions={{
				headerShown: true,
				headerTintColor: Colors.Primary,
				headerStyle: { backgroundColor: Colors.DarkBlack },
				tabBarStyle: { backgroundColor: Colors.DarkBlack },
			}}
		>
			{
				Routes.map((route, index) => (
					<Tab.Screen
						key={index}
						name={route.name}
						options={{
							tabBarIcon: ({ color, size }: ITabProps) =>
								<MaterialCommunityIcons
									name={route.icon}
									color={color}
									size={size}
								/>
						}}
					>
						{() => <route.component />}
					</Tab.Screen>
				))
			}
		</Tab.Navigator>
	);
};
