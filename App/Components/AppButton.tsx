/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Button } from "react-native-paper";
import { View } from "react-native";

interface IAppButtonProps {
	onPress: (() => void) | undefined,
	icon?: string,
	children: string,
	disabled?: boolean,
}

export const AppButton: React.FC<IAppButtonProps> = ({
	onPress,
	children,
	icon,
	disabled = false,
}: IAppButtonProps): JSX.Element => {
	return (
		<View style={{ paddingTop: 10, paddingBottom: 10 }}>
			<Button
				style={{ minHeight: 50, justifyContent: "center" }}
				disabled={disabled}
				icon={icon}
				uppercase
				onPress={onPress}
				mode="contained"
			>
				{children}
			</Button>
		</View>
	);
};