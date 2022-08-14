import { createSlice } from "@reduxjs/toolkit"

const userInit = {
	me: {Posts: [] as {id: any}[]},
	userInfo: {},
	loadLoginInfo : false,
	loadUser : false,
	login : false,
	logout: true,
	signup: false,
	changeNickName : false,
	followLoading: false,
};

const userSlice = createSlice({
	name:'user',
	initialState: userInit,
	reducers: {
		addPostToMe: (state, action) => {
			state.me.Posts.unshift({ id: action.payload })
		},
		removePostToMe: (state, action) => {
			state.me.Posts = state.me.Posts.filter( v => v.id !== action.payload)
		},
		login: (state, action) => {
			state.login = true
			state.logout = false
		},
		logout: (state, action) => {
			state.logout = true
			state.login = false
		},
		signup: (state, action) => {
			state.signup = true
		}
	}
})
export default userSlice.reducer;
export const {addPostToMe, removePostToMe, logout, login, signup} = userSlice.actions;
