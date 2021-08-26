import React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

import { Navigator } from "./App/Components/Navigator";
import { Colors } from "./App/Constants/Colors";

const theme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		primary: Colors.Primary,
		background: Colors.Black
	}
};

const App: React.FC = (): JSX.Element => {
	return (
		<NavigationContainer theme={theme}>
			<Navigator />
		</NavigationContainer>
	);
};

export default App;