import { createSlice } from "@reduxjs/toolkit"

const postInit = {
	mainPosts:[],
	hasMorePosts: true,
	singlePost: null,
	imagePaths: [],
	loadPosts: false,
	addPost: false,
	updatePost: false,
	removePost: false,
	addComment: false,
	likePost: false,
	uploadImages: false,
	retweet: false,
}

const postSlice = createSlice({
	name:'post',
	initialState: postInit,
	reducers:{
		removeImage: (state, action) => {
			state.imagePaths = state.imagePaths.filter((v, i) => i !== action.payload);
		}
	}
})

export default postSlice.reducer

