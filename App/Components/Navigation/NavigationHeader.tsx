import React, {useEffect, useState} from "react";
import { TouchableOpacity } from "react-native";
import { Appbar, Avatar } from "react-native-paper";
import { DrawerHeaderProps } from "@react-navigation/drawer/lib/typescript/src/types";

import { Colors } from "../../Constants/Colors";
import { WebSocket } from "../../Api/SocketClient";
import { useAppSelector } from "../../Store/Hooks";
import { onlineSelector } from "../../Store/Slices/Online";

const tempIcon = "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.detectiveconanworld.com%2Fwiki%2Fimages%2Fthumb%2F2%2F2b%2FGeneric_Profile.jpg%2F275px-Generic_Profile.jpg&f=1&nofb=1";

export const NavigationHeader: React.FC<DrawerHeaderProps> = ({
	navigation
}: DrawerHeaderProps): JSX.Element => {
	const [online, setOnline] = useState(WebSocket.online);
	const isOnline = useAppSelector(onlineSelector);

	useEffect(() => {
		setOnline(isOnline);
	}, [isOnline]);

	return (
		<Appbar.Header style={{
			backgroundColor: Colors.DarkBlack,
			height: 50,
			alignItems: "flex-end",
			paddingTop: 3,
			flexDirection: "column"
		}}>
			<TouchableOpacity style={{borderColor: online ? "green": "red", borderWidth: 2, borderRadius: 25}} onPress={navigation.openDrawer}>
				<Avatar.Image size={40} source={{ uri: tempIcon }} />
			</TouchableOpacity>
		</Appbar.Header>
	);
};
