import React from "react";
import { ActivityIndicator, View } from "react-native";

import { Colors } from "../Constants/Colors";

interface ILoaderProps {
	visible: boolean
}

export const Loader: React.FC<ILoaderProps> = ({ visible }: ILoaderProps): JSX.Element | null => {
	if (!visible) return null;

	return (
		<View style={{width: "100%", alignItems: "center", height: "100%", justifyContent: "center", position: "absolute"}}>
			<ActivityIndicator color={Colors.Purple} size={70} animating={visible} />
		</View>
	);
};
