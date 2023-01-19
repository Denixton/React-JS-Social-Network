import { usersAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
	posts: [
		{ id: 1, message: 'Hi, how are you?', likesCount: 11 },
		{ id: 2, message: 'It\'s my first post', likesCount: 23 },
		{ id: 3, message: 'Omg, what the hell?', likesCount: 51 },
		{ id: 4, message: 'No-no-nobody knows React', likesCount: 37 }
	],
	newPostText: '',
	profile: null
};

const profileReducer = (state = initialState, action) => {
	switch(action.type) {
		case ADD_POST:
			return {
				...state,
				posts: [...state.posts, {id: state.posts.length + 1, message: state.newPostText, likesCount: 0}],
				newPostText: ''
			}
			
		case UPDATE_NEW_POST_TEXT: 
			return {
				...state,
				newPostText: action.updatedPostText
			}
		
		case SET_USER_PROFILE:
			return {
				...state,
				profile: action.profile
			}
			
		default: 
			return state;
	}
}

export const addPost = () => ({
	type: ADD_POST
});

export const updateNewPostText = (postText) => ({
	type: UPDATE_NEW_POST_TEXT,
	updatedPostText: postText
});

export const setUserProfile = (profile) => ({
	type: SET_USER_PROFILE,
	profile
});

/* getUserProfile thunk */
export const getUserProfile = (userId) => {
	return (dispatch) => {
		usersAPI.getUserProfile(userId).then(data => {
			dispatch(setUserProfile(data));
		})
	}
}

export default profileReducer;