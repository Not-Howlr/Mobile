/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/display-name */
import React from "react";
import { TouchableOpacity } from "react-native";
import { Appbar, Avatar, BottomNavigation } from "react-native-paper";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerHeaderProps } from "@react-navigation/drawer/lib/typescript/src/types";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";

import { HomeScreen } from "../../Screens/HomeScreen";
import { SettingsScreen } from "../../Screens/SettingsScreen";
import { MessagesScreen } from "../../Screens/MessagesScreen";
import { AccountScreen } from "../../Screens/AccountScreen";
import { Colors } from "../../Constants/Colors";

const Drawer = createDrawerNavigator();

interface IRouteProps {
	name: string,
	component: React.FC<any>,
	icon: any
}

const renderScene = BottomNavigation.SceneMap({
	home: HomeScreen,
	messages: MessagesScreen
});

const BottomNavigator = () => {
	const [index, setIndex] = React.useState(0);
	const [routes] = React.useState([
		{ key: "home", title: "Home", icon: "home" },
		{ key: "messages", title: "Meesages", icon: "message" },
	]);

	return (
		<BottomNavigation
			barStyle={{ backgroundColor: Colors.DarkBlack }}
			activeColor={Colors.Purple}
			labeled={false}
			navigationState={{ index, routes }}
			onIndexChange={setIndex}
			renderScene={renderScene}
		/>
	);
};

const Routes: IRouteProps[] = [
	{ name: "Home", component: BottomNavigator, icon: "home" },
	{ name: "Account", component: AccountScreen, icon: "account" },
	{ name: "Settings", component: SettingsScreen, icon: "cog" },
];

function AppHeader({
	navigation
}: DrawerHeaderProps) {
	return (
		<Appbar.Header style={{
			backgroundColor: Colors.DarkBlack,
			height: 50,
			alignItems: "flex-end",
			paddingTop: 5,
			flexDirection: "column"
		}}>
			<TouchableOpacity onPress={navigation.openDrawer}>
				<Avatar.Image size={40} source={{ uri: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.detectiveconanworld.com%2Fwiki%2Fimages%2Fthumb%2F2%2F2b%2FGeneric_Profile.jpg%2F275px-Generic_Profile.jpg&f=1&nofb=1" }} />
			</TouchableOpacity>
		</Appbar.Header>
	);
}

export const Navigator: React.FC = (): JSX.Element => {

	return (
		<Drawer.Navigator initialRouteName="Home" screenOptions={{
			drawerLabelStyle: { color: Colors.White },
			drawerActiveBackgroundColor: Colors.Purple,
			drawerStyle: { backgroundColor: Colors.Black },
			header: (props: DrawerHeaderProps) => 
				<AppHeader navigation={props.navigation} layout={props.layout} options={props.options} route={props.route} />
		}}>
			{
				Routes.map((route, index) => (
					<Drawer.Screen
						key={index}
						component={route.component}
						name={route.name}
						options={{ drawerIcon: () => <Icon name={route.icon} size={20} color={Colors.White} /> }}
					/>
				))
			}
		</Drawer.Navigator>
	);
};