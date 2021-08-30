import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, View } from "react-native";
import Constants from "expo-constants";

import { Colors } from "../Constants/Colors";

interface IAppScreenProps {
	children: React.ReactNode
}

export const AppScreen: React.FC<IAppScreenProps> = ({
	children
}: IAppScreenProps): JSX.Element => {
	return (
		<SafeAreaView style={styles.screen}>
			<View style={styles.container}>
				{ children }
			</View>
			<StatusBar backgroundColor={Colors.White} />
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.Black,
		alignItems: "center",
		justifyContent: "center"
	},
	screen: {
		paddingTop: Constants.statusBarHeight,
		flex: 1
	}
});