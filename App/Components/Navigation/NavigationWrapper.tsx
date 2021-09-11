/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";

import { useApi } from "../../Hooks/useApi";
import { Loader } from "../Loader";
import { Navigator } from "./Navigator";
import { AuthNavigator } from "./AuthNavigation";
import { AppScreen } from "../AppScreen";
import { useAppSelector } from "../../Store/Hooks";
import { tokenSelector } from "../../Store/Slices/Token";

export const NavigationWrapper: React.FC = (): JSX.Element => {
	const token = useAppSelector(tokenSelector);
	const { loading, auth, Refresh } = useApi();

	useEffect(() => {
		Refresh();
	}, [token]);

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
