/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";

import { RootState } from "../../Store/Store";
import { useApi } from "../../Hooks/useApi";
import { navigatorTheme } from "../../Constants/Styles";
import { Loader } from "../Loader";
import { Navigator } from "./Navigator";
import { AuthNavigator } from "./AuthNavigation";


export const NavigationWrapper: React.FC = (): JSX.Element => {
	const user = useSelector((state: RootState) => state.user);
	const { loading, auth, Refresh } = useApi();

	useEffect(() => {
		Refresh();
		return () => { return; };
	}, [user]);

	return (
		<NavigationContainer theme={navigatorTheme}>
			{
				loading ? <Loader visible={loading} /> : (
					auth ? <Navigator /> : <AuthNavigator />
				)
			}
		</NavigationContainer>
	);
};
