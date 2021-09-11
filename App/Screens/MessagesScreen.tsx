import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, FlatList, TouchableHighlight, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Divider, TextInput } from "react-native-paper";

import { Api } from "../Api/BaseClient";
import { WebSocket } from "../Api/SocketClient";
import { AppScreen } from "../Components/AppScreen";
import { Loader } from "../Components/Loader";
import { Colors } from "../Constants/Colors";
import { useAppSelector } from "../Store/Hooks";
import { messageSelector } from "../Store/Slices/Messages";

interface IMessage {
	from: string,
	content: string,
	sent: Date
}

interface IRoomResults {
	room: {
		updatedAt: Date,
		name: string,
		uid: string,
		unread_messages: number
	},
	members: {
		uid: string,
		username: string
	}[]
}

const _MessagesScreen: React.FC = (): JSX.Element => {

	const [messages, setMessages] = useState<IMessage[]>();
	const [content, setContent] = useState<string>();
	const messageState = useAppSelector(messageSelector);

	useEffect(() => {
		setMessages(messageState);
	}, [messageState]);

	return (
		// <AppScreen>
		// <View style={styles.container}>
		<>
			<View style={{ backgroundColor: Colors.DarkBlack, alignItems: "center" }}><Text style={{ color: "white" }}>Message</Text></View>
			<View style={{ flex: 1 }}>
				<View style={styles.container}>
					<ScrollView style={{ width: "100%", marginBottom: 10 }}>
						{
							messages?.map((msg, index) => (
								<View key={index}>
									<Text style={{ fontSize: 7, color: "lightgray" }}>
										{new Date(msg.sent).toLocaleDateString("en-US", { timeZone: "UTC" })}
									</Text>
									<Text style={{ color: "white" }}>
										{msg.from}: {msg.content}
									</Text>
									<Divider />
								</View>
							))
						}
					</ScrollView>
					<View
						style={{
							// height: 50,
							// position: "absolute",
							bottom: 0,
							width: "100%"
						}}
					>
						<TextInput
							value={content}
							maxLength={1000}
							right={<TextInput.Icon
								name="send"
								disabled={!content?.trim()}
								onPress={() => {
									WebSocket.SendMessage({
										content: content,
										room_uid: "67e2ae0d-c505-491e-baac-7b60d15eb066",
										to: "68af3734-a138-4efe-bde2-86cb846e56d5" // dev2
									});
									setContent("");
								}}
								color={Colors.Purple}
							/>}
							style={{ backgroundColor: "lightgray" }}
							onChangeText={content => setContent(content)}
						/>
						<Text style={{ backgroundColor: "lightgray" }}>{content?.length || 0}/1000</Text>
					</View>
				</View>
			</View>
		</>
		//</View>
		//</AppScreen>
	);
};

export const MessagesScreen: React.FC = (): JSX.Element => {
	const [chatRooms, setChatRooms] = useState<IRoomResults[]>();
	const [loading, setLoading] = useState(true);

	const getRooms = async () => {
		const { data } = await Api.client.get("user/rooms/all/1?limit=10") as any;
		setChatRooms(data.rooms);
		setLoading(false);
	};

	useEffect(() => {
		getRooms();
	}, []);
	return (
		<AppScreen>
			{
				loading ? <Loader visible={loading} /> : (
					<>
						<FlatList style={{ width: "100%" }} data={chatRooms}
							keyExtractor={room => room.room.uid}
							renderItem={({ item }) => (
								<>
									<TouchableHighlight style={{ alignContent: "center" }} underlayColor={Colors.Gray}>
										<View style={{ backgroundColor: Colors.Black, padding: 20, alignContent: "center" }}>
											{item.room.name ? <Text style={{color: Colors.White}}>{item.room.name}</Text> : null}
											<Text style={{color: Colors.White}}>
												{item.members.map((member, index) => (
													<Text key={index}>{member.username} </Text>
												))}
											</Text>
										</View>
									</TouchableHighlight>
									<Divider style={{backgroundColor: Colors.Gray}} />
								</>
							)}
						/>
						<View style={{position: "absolute", padding: 5, borderRadius: 40, right: 15, bottom: 15, backgroundColor: Colors.Gray}}>
							<TouchableOpacity>
								<MaterialCommunityIcons color={Colors.White} size={30} name="plus" />
							</TouchableOpacity>
						</View>
					</>
				)
			}
		</AppScreen>
	);
};

const styles = StyleSheet.create({
	container: {
		// flex: 1,
		height: "100%",
		backgroundColor: Colors.Black,
		alignItems: "center",
		// justifyContent: "center"
	},
	screen: {
		height: "100%",
		flex: 1
	}
});