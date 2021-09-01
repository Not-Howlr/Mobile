import React from "react";
import { TextInput } from "react-native-paper";
import { KeyboardTypeOptions, NativeSyntheticEvent, View } from "react-native";

import { ErrorMessage } from "./ErrorMessage";
import { Colors } from "../../Constants/Colors";

interface IFormInputProps {
	label: string,
	onChangeText: (((text: string) => void)) | undefined,
	onChange: ((e: NativeSyntheticEvent<unknown>) => void) | undefined,
	keyboardType?: KeyboardTypeOptions,
	disabled?: boolean,
	secureTextEntry?: boolean,
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
	icon?: string,
	error?: boolean,
	errorMsg?: string
}

export const FormInput: React.FC<IFormInputProps> = ({
	label,
	onChangeText,
	onChange,
	icon,
	secureTextEntry = false,
	textContentType ="none",
	keyboardType = "default",
	disabled = false,
	error = false,
	errorMsg = "network error"
}: IFormInputProps): JSX.Element => {
	return (
		<View style={{paddingTop: 10, paddingBottom: 10}}>
			<TextInput
				textContentType={textContentType}
				secureTextEntry={secureTextEntry}
				error={error}
				onChange={onChange}
				autoCorrect={false}
				keyboardType={keyboardType}
				disabled={disabled}
				autoCapitalize="none"
				theme={{ colors: { text: Colors.White, placeholder: Colors.White }, roundness: 5 }}
				outlineColor="white"
				// style={{backgroundColor: "white"}}
				onChangeText={onChangeText}
				left={icon ? <TextInput.Icon name={icon} color={Colors.Gray} /> : undefined}
				label={label}
				mode="outlined"
			/>
			<ErrorMessage visible={error} error={errorMsg} />
		</View>
	);
};
