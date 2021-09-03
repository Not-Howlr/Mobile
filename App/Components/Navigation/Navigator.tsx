/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/display-name */
import React, { useEffect } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerHeaderProps } from "@react-navigation/drawer/lib/typescript/src/types";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";

import { Colors } from "../../Constants/Colors";
import { WebSocket } from "../../Api/SocketClient";
import { AccountStack } from "./Stacks/AccountStack";
import { MessageStack } from "./Stacks/MessageStack";
import { BottomNavigator } from "./BottomNavigator";
import { NavigationHeader } from "./NavigationHeader";

interface IDrawerRouteProps {
	name: string,
	component: React.FC<any>,
	icon: any
}

const Drawer = createDrawerNavigator();

const Routes: IDrawerRouteProps[] = [
	{ name: "Home", component: BottomNavigator, icon: "home" },
	{ name: "Account", component: AccountStack, icon: "account" },
	{ name: "Messages", component: MessageStack, icon: "message" }
];

export const Navigator: React.FC = (): JSX.Element => {

	useEffect(() => {
		WebSocket.Connect();
	}, []);

	return (
		<Drawer.Navigator initialRouteName="Home" screenOptions={{
			drawerLabelStyle: { color: Colors.White },
			drawerActiveBackgroundColor: Colors.Purple,
			drawerStyle: { backgroundColor: Colors.Black },
			// headerShown: false,
			header: (props: DrawerHeaderProps) =>
				<NavigationHeader
					navigation={props.navigation}
					layout={props.layout}
					options={props.options}
					route={props.route}
				/>
		}}>
			{
				Routes.map((route, index) => (
					<Drawer.Screen
						key={index}
						name={route.name}
						options={{ drawerIcon: () => <Icon name={route.icon} size={20} color={Colors.White} /> }}
					>
						{() => (
							<route.component />
						)}
					</Drawer.Screen>
				))
			}
		</Drawer.Navigator>
	);
};