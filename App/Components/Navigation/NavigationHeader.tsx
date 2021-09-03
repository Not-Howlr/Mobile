import React from "react";
import { TouchableOpacity } from "react-native";
import { Appbar, Avatar } from "react-native-paper";
import { DrawerHeaderProps } from "@react-navigation/drawer/lib/typescript/src/types";

import { Colors } from "../../Constants/Colors";

const tempIcon = "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.detectiveconanworld.com%2Fwiki%2Fimages%2Fthumb%2F2%2F2b%2FGeneric_Profile.jpg%2F275px-Generic_Profile.jpg&f=1&nofb=1";

export const NavigationHeader: React.FC<DrawerHeaderProps> = ({
	navigation
}: DrawerHeaderProps): JSX.Element => {
	return (
		<Appbar.Header style={{
			backgroundColor: Colors.DarkBlack,
			height: 50,
			alignItems: "flex-end",
			paddingTop: 5,
			flexDirection: "column"
		}}>
			<TouchableOpacity onPress={navigation.openDrawer}>
				<Avatar.Image size={40} source={{ uri: tempIcon }} />
			</TouchableOpacity>
		</Appbar.Header>
	);
};
