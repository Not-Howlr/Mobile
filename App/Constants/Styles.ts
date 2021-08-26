import { Platform } from "react-native";

import { Colors } from "./Colors";

export const DefaultStyles = {
	text: {
		fontSize: 18,
		color: Colors.Gray,
		...Platform.select({
			ios: {
				fontSize: 20,
				fontFamily: "Avenir"
			},
			android: {
				fontSize: 18,
				fontFamily: "Roboto"
			}
		})
	}
};