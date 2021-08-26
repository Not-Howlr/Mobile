import React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

// import { Navigator } from "./App/Components/Navigation/Navigator";
import { Colors } from "./App/Constants/Colors";
import { AuthNavigator } from "./App/Components/Navigation/AuthNavigation";

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
			{/* <Navigator /> */}
			<AuthNavigator />
		</NavigationContainer>
	);
};

export default App;