import React, { useEffect } from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";
import { WebSocket } from "../Api/SocketClient";
import { AppScreen } from "../Components/AppScreen";

import { AppText } from "../Components/AppText";

export const MessagesScreen: React.FC = (): JSX.Element => {

	useEffect(() => {
		WebSocket.io.on("recieve_message", (data) => {
			alert(data);
		});
	}, [WebSocket.io]);

	return (
		<AppScreen>
			<View style={{ maxWidth: 200 }}>
				<AppText size={30}>
					messages page
				</AppText>
				<Button onPress={() => 
					WebSocket.SendMessage({
						content: "dummy message",
						// to: "8d6500f0-1b38-4b54-b79c-a0523f03ec70", // dev2
						to: "f278ab32-a3d0-4f82-a03c-e3203c649a63", // dev
						sent: new Date()
					})
				}>send test message</Button>
			</View>
		</AppScreen>
	);
};
