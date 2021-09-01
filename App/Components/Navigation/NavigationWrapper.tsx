/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";

import { RootState } from "../../Store/Store";
import { useApi } from "../../Hooks/useApi";
import { Loader } from "../Loader";
import { Navigator } from "./Navigator";
import { AuthNavigator } from "./AuthNavigation";
import { AppScreen } from "../AppScreen";

export const NavigationWrapper: React.FC = (): JSX.Element => {
	const user = useSelector((state: RootState) => state.user);
	const { loading, auth, Refresh } = useApi();

	useEffect(() => {
		Refresh();
	}, [user]);

	return (
		<NavigationContainer>
			{
				loading ? (
					<AppScreen>
						<Loader visible={loading} />
					</AppScreen>)
					: (auth ? <Navigator /> : <AuthNavigator />)
			}
		</NavigationContainer>
	);
};
