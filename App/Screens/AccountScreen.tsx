import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { View } from "react-native";
import { IUser } from "@not-howlr/types";

import { AppButton } from "../Components/AppButton";
import { AppScreen } from "../Components/AppScreen";
import { AppText } from "../Components/AppText";
import { Loader } from "../Components/Loader";
import { useApi } from "../Hooks/useApi";
import { GetAsync, KeyNames } from "../Store/Storage";

export const AccountScreen: React.FC = (): JSX.Element => {
	const { Logout, loading } = useApi();
	const [user, setuser] = useState<IUser>();

	useEffect(() => {
		(async () => {
			setuser(await GetAsync(KeyNames.USER));
		})();
	}, []);

	return (
		<AppScreen>
			<View style={{ maxWidth: 200 }}>
				<AppText size={20}>
					{user?.username}
				</AppText>
				<AppText size={30}>
					account page
				</AppText>
				<AppButton title="logout" onPress={Logout} />
			</View>
			<Loader visible={loading} />
		</AppScreen>
	);
};
