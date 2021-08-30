/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as SecureStore from "expo-secure-store";

export enum KeyNames {
	USER = "USER"
}

export const SaveAsync = async (key: KeyNames, value: any): Promise<void> => {
	await SecureStore.setItemAsync(key, JSON.stringify(value));
};
export const RemoveAsync = async (key: KeyNames): Promise<void> => {
	await SecureStore.deleteItemAsync(key);
};
export const GetAsync = async (key: KeyNames): Promise<any> => {
	return JSON.parse(await SecureStore.getItemAsync(key) as string);
};