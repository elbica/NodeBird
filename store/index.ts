import { createWrapper, HYDRATE } from "next-redux-wrapper"
import { combineReducers } from "redux"
import { configureStore } from "@reduxjs/toolkit"
import user from "./reducers/user"
import post from "./reducers/post"
import { TypedUseSelectorHook, useSelector } from "react-redux"

const combined = combineReducers({ user, post })

const store = configureStore({
	reducer: (s, a) => {
		switch (a.type) {
			case HYDRATE:
				return a.payload
			default:
				return combined(s, a)
		}
	},
	devTools: true
})

const makeStore = () => {
	return store
}

const wrapper = createWrapper(makeStore, { debug: process.env.NODE_ENV === "development" })
export default wrapper

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
