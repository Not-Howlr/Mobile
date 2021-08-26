import React from "react";
import { View } from "react-native";

import { Colors } from "../../Constants/Colors";
import { AppText } from "../AppText";

interface IErrorMessageProps {
	visible: boolean,
	error: string
}

export const ErrorMessage: React.FC<IErrorMessageProps> = ({
	visible,
	error
}: IErrorMessageProps): JSX.Element | null => {
	if (!visible || !error) return null;
	return (
		<View style={{ alignItems: "flex-start" }}>
			<AppText color={Colors.Red}>
				{error}
			</AppText>
		</View>
	);
};