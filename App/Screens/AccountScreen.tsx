/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { View, Text } from "react-native";
import { IUser } from "@not-howlr/types";
import { Button } from "react-native-paper";

import { AppButton } from "../Components/AppButton";
import { AppText } from "../Components/AppText";
import { Loader } from "../Components/Loader";
import { useApi } from "../Hooks/useApi";
import { GetAsync, KeyNames } from "../Store/Storage";
import { AppScreen } from "../Components/AppScreen";
import { WebSocket } from "../Api/SocketClient";

interface IAccountScreenProps {
	navigation: NavigatorProps
}

export const AccountScreen: React.FC<IAccountScreenProps> = ({
	navigation,
}: IAccountScreenProps): JSX.Element => {
	const { Logout, loading } = useApi();
	const [user, setuser] = useState<IUser>();
	const [online, setOnline] = useState<boolean>(WebSocket.online);

	useEffect((): any => {
		(async () => {
			setuser(await GetAsync(KeyNames.USER));
		})();
	}, []);

	useEffect((): any => {
		WebSocket.io.on("disconnect", () => setOnline(false));
		WebSocket.io.on("connect", () => setOnline(true));
	}, [WebSocket.io]);

	return (
		<AppScreen>
			<View style={{ maxWidth: 200 }}>
				<Text style={{ textAlign: "center", color: online ? "green" : "salmon" }}>
					{online ? <Text>online</Text> : <Text>offline</Text>}
				</Text>
				<AppText size={20}>
					{user?.username}
				</AppText>
				<AppText size={30}>
					account page
				</AppText>
				<AppButton
					onPress={Logout}>
					Logout
				</AppButton>
				<Button onPress={() => navigation.navigate("SettingsScreen")}>Go To Settings</Button>
				<Loader visible={loading} />
			</View>
		</AppScreen>
	);
};