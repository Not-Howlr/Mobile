/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/display-name */
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { AccountStack } from "./Stacks/AccountStack";
import { HomeStack } from "./Stacks/HomeStack";
import { MessageStack } from "./Stacks/MessageStack";
import { Colors } from "../../Constants/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface IBottomTabProps {
	name: string,
	component: React.FC<any>,
	icon: any
}

const Tab = createBottomTabNavigator();

const BottomRoutes: IBottomTabProps[] = [
	{ name: "HomeTab", component: HomeStack, icon: "home" },
	{ name: "MessagesTab", component: MessageStack, icon: "message" },
	{ name: "AccountTab", component: AccountStack, icon: "account" },
];

export const BottomNavigator: React.FC = (): JSX.Element => {
	return (
		<Tab.Navigator
			screenOptions={{
				headerShown: false,
				tabBarShowLabel: false,
				tabBarStyle:
					{ backgroundColor: Colors.DarkBlack }
			}}>
			{BottomRoutes.map((route, index) => (
				<Tab.Screen
					key={index}
					options={{ tabBarIcon: ({ focused }: { focused: boolean }) =>
						<MaterialCommunityIcons
							size={30}
							name={route.icon}
							color={focused ? Colors.Purple : Colors.Gray} 
						/> }}
					name={route.name}
					component={route.component}
				/>
			))
			}
		</Tab.Navigator>
	);
};
