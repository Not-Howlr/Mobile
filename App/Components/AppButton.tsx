/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

import { Colors } from "../Constants/Colors";

interface IAppButtonProps {
	title: string,
	onPress: (event: any) => void | undefined | Promise<any>,
	disabled?: boolean,
	color?: string
}

export const AppButton: React.FC<IAppButtonProps> = ({
	title,
	onPress,
	disabled = false,
	color = Colors.Primary
}: IAppButtonProps): JSX.Element => {
	return (
		<TouchableOpacity disabled={disabled} style={[styles.button, { backgroundColor: color, opacity: disabled ? 0.3 : 1 }]} onPress={onPress}>
			<Text style={[styles.text, { opacity: disabled ? 0.3 : 1 }]}>{title}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	button: {
		backgroundColor: Colors.Primary,
		borderRadius: 15,
		justifyContent: "center",
		alignItems: "center",
		padding: 15,
		width: "100%",
		marginVertical: 10
	},
	text: {
		color: Colors.White,
		fontSize: 18,
		textTransform: "uppercase",
		fontWeight: "bold"
	}
});