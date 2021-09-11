import { configureStore } from "@reduxjs/toolkit";

import user from "./Slices/User";
import online from "./Slices/Online";
import messages from "./Slices/Messages";
import token from "./Slices/Token";

export const store = configureStore({
	reducer: {
		user,
		online,
		messages,
		token
	}
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;