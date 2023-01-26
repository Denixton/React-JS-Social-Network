import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
	posts: [
		{ id: 1, message: 'Hi, how are you?', likesCount: 11 },
		{ id: 2, message: 'It\'s my first post', likesCount: 23 },
		{ id: 3, message: 'Omg, what the hell?', likesCount: 51 },
		{ id: 4, message: 'No-no-nobody knows React', likesCount: 37 }
	],
	profile: null,
	status: ''
};

const profileReducer = (state = initialState, action) => {
	switch(action.type) {
		case ADD_POST:
			return {
				...state,
				posts: [...state.posts, {id: state.posts.length + 1, message: action.newPostText, likesCount: 0}]
			}
		
		case SET_USER_PROFILE:
			return {
				...state,
				profile: action.profile
			}
		
		case SET_STATUS:
			return {
				...state,
				status: action.status
			}
			
		default: 
			return state;
	}
}

export const addPost = (newPostText) => ({
	type: ADD_POST,
	newPostText
});

export const setUserProfile = (profile) => ({
	type: SET_USER_PROFILE,
	profile
});

export const setStatus = (status) => ({
	type: SET_STATUS,
	status
})

/* getUserProfile thunk */
export const getUserProfile = (userId) => {
	return (dispatch) => {
		usersAPI.getUserProfile(userId).then(data => {
			dispatch(setUserProfile(data));
		});
	}
}

export const getStatus = (userId) => {
	return (dispatch) => {
		profileAPI.getStatus(userId).then(data => {
			dispatch(setStatus(data));
		});
	}
}

export const updateStatus = (status) => {
	return (dispatch) => {
		profileAPI.updateStatus(status).then(data => {
			if (data.resultCode === 0) {
				dispatch(setStatus(status));
			}
		});
	}
}

export default profileReducer;