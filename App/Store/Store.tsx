import { createStore, combineReducers } from "redux";

import { userReducer } from "./Reducers/UserReducer";

const reducers = combineReducers({
	user: userReducer
});

export const store = createStore(reducers);

export type RootState = ReturnType<typeof reducers>;