import React from "react";
import { Provider } from "react-redux";
import { Provider as PaperProvider, DefaultTheme } from "react-native-paper";

import { NavigationWrapper } from "./App/Components/Navigation/NavigationWrapper";
import { store } from "./App/Store/Store";
import { Colors } from "./App/Constants/Colors";

const theme = {
	...DefaultTheme,
	roundness: 2,
	colors: {
		...DefaultTheme.colors,
		background: Colors.Black,
		primary: Colors.Purple,
	}
};

const Wrapper = (): JSX.Element => {
	return (
		<Provider store={store}>
			<PaperProvider theme={theme}>
				<NavigationWrapper />
			</PaperProvider>
		</Provider>
	);
};

export default Wrapper;