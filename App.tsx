import React from "react";
import { Provider } from "react-redux";

import { NavigationWrapper } from "./App/Components/Navigation/NavigationWrapper";
import { store } from "./App/Store/Store";

const Wrapper = (): JSX.Element => {
	return (
		<Provider store={store}>
			<NavigationWrapper />
		</Provider>
	);
};

export default Wrapper;