import React, { useEffect } from "react";
import { Provider, useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";

import { Navigator } from "./App/Components/Navigation/Navigator";
import { AuthNavigator } from "./App/Components/Navigation/AuthNavigation";
import { useApi } from "./App/Hooks/useApi";
import { RootState, store } from "./App/Store/Store";
import { Loader } from "./App/Components/Loader";
import { navigatorTheme } from "./App/Constants/Styles";

const App: React.FC = (): JSX.Element => {

	const user = useSelector((state: RootState) => state.user);
	const { loading, auth, Refresh } = useApi();

	useEffect(() => {
		Refresh();
		console.log(user);
	}, [user]);

	return (
		<NavigationContainer theme={navigatorTheme}>
			{
				loading ? <Loader visible={loading} /> : auth ? <Navigator /> : <AuthNavigator />
			}
		</NavigationContainer>
	);
};

const Wrapper = (): JSX.Element => {
	return (
		<Provider store={store}>
			<App />
		</Provider>
	);
};

export default Wrapper;