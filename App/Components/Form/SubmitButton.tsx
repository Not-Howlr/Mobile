/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

import { Colors } from "../../Constants/Colors";
import { AppButton } from "../AppButton";

interface ISubmitButtonProps {
	title: string,
	disabled: boolean,
	handleSubmit: (event: any) => void | undefined
}

export const SubmitButton: React.FC<ISubmitButtonProps> = ({ title, handleSubmit, disabled }: ISubmitButtonProps): JSX.Element => {
	return (
		<AppButton
			title={title}
			onPress={handleSubmit}
			color={Colors.Purple}
			disabled={disabled}
		/>
	);
};