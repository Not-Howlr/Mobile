import { configureStore } from "@reduxjs/toolkit";

import user from "./Slices/User";
import online from "./Slices/Online";

export const store = configureStore({
	reducer: {
		user,
		online
	}
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;