import React from "react";
import Spinner from "react-native-loading-spinner-overlay";

import { Colors } from "../Constants/Colors";

interface ILoaderProps {
	visible: boolean
}

export const Loader: React.FC<ILoaderProps> = ({ visible }: ILoaderProps): JSX.Element => {
	return (
		<Spinner
			visible={visible}
			color={Colors.Primary}
			animation="fade"
			size="large"
			textStyle={{ color: Colors.White }}
			textContent={""}
		/>
	);
};
