import React from "react";
import { StyleSheet, Text } from "react-native";

import { Colors, Fonts } from "../Constants/Colors";

interface IAppTextProps {
	size?: number,
	children: React.ReactNode
}

export const AppText: React.FC<IAppTextProps> = ({
	size = 15,
	children
}: IAppTextProps): JSX.Element => {
	return (
		<Text style={[{ fontSize: size }, styles.text]}>
			{children}
		</Text>
	);
};

const styles = StyleSheet.create({
	text: {
		color: Colors.White,
		textAlign: "center",
		fontFamily: Fonts.SansSerifThin,
		fontWeight: "bold"
	},
});