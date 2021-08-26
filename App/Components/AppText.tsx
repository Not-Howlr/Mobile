import React from "react";
import { StyleSheet, Text } from "react-native";

import { Colors, Fonts } from "../Constants/Colors";

interface IAppTextProps {
	children: React.ReactNode,
	size?: number,
	color?: string
}

export const AppText: React.FC<IAppTextProps> = ({
	size = 15,
	color = Colors.White,
	children
}: IAppTextProps): JSX.Element => {
	return (
		<Text style={[{ color, fontSize: size, }, styles.text]}>
			{children}
		</Text>
	);
};

const styles = StyleSheet.create({
	text: {
		textAlign: "center",
		fontFamily: Fonts.SansSerifThin,
	},
});