/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { TextInput, View, StyleSheet, NativeSyntheticEvent, TextInputFocusEventData, KeyboardTypeOptions } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Colors } from "../Constants/Colors";
import { DefaultStyles } from "../Constants/Styles";

interface IAppTextInputProps {
	icon?: any,
	width?: string,
	placeholder?: string,
	autoCapitalize?: "none" | "sentences" | "words" | "characters",
	autoCorrect?: boolean,
	keyboardType?: KeyboardTypeOptions,
	secureTextEntry?: boolean,
	disabled?: boolean,
	textContentType?: | "none"
	| "URL"
	| "addressCity"
	| "addressCityAndState"
	| "addressState"
	| "countryName"
	| "creditCardNumber"
	| "emailAddress"
	| "familyName"
	| "fullStreetAddress"
	| "givenName"
	| "jobTitle"
	| "location"
	| "middleName"
	| "name"
	| "namePrefix"
	| "nameSuffix"
	| "nickname"
	| "organizationName"
	| "postalCode"
	| "streetAddressLine1"
	| "streetAddressLine2"
	| "sublocality"
	| "telephoneNumber"
	| "username"
	| "password"
	| "newPassword"
	| "oneTimeCode",
	onChangeText?: ((text: string) => void) | undefined,
	onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void | undefined
}

export const AppTextInput: React.FC<IAppTextInputProps> = ({
	icon,
	onChangeText,
	onBlur,
	placeholder,
	autoCapitalize,
	secureTextEntry,
	autoCorrect,
	keyboardType,
	textContentType,
	disabled = false,
	width = "100%",
}: IAppTextInputProps): JSX.Element => {
	return (
		<View style={[styles.container, { width }]}>
			{icon && <MaterialCommunityIcons name={icon} size={20} style={styles.icon} />}
			<TextInput
				placeholder={placeholder}
				editable={!disabled}
				selectTextOnFocus={!disabled}
				autoCorrect={autoCorrect}
				keyboardType={keyboardType}
				secureTextEntry={secureTextEntry}
				textContentType={textContentType}
				onBlur={onBlur}
				autoCapitalize={autoCapitalize}
				onChangeText={onChangeText}
				placeholderTextColor={Colors.Gray}
				style={[{ width: "100%", opacity: disabled ? .4 : 1 }, DefaultStyles.text]} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: "lightgray",
		borderRadius: 25,
		flexDirection: "row",
		padding: 15,
		marginVertical: 10
	},
	icon: {
		marginRight: 10,
		marginTop: 5
	}
});