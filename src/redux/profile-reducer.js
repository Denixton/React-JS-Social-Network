const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
	posts: [
		{ id: 1, message: 'Hi, how are you?', likesCount: 11 },
		{ id: 2, message: 'It\'s my first post', likesCount: 23 },
		{ id: 3, message: 'Omg, what the hell?', likesCount: 51 },
		{ id: 4, message: 'No-no-nobody knows React', likesCount: 37 }
	],
	newPostText: ''
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
			
		default: 
			return state;
	}
}

export const addPostActionCreator = () => ({
	type: ADD_POST
})

export const updateNewPostTextActionCreator = (postText) => ({
	type: UPDATE_NEW_POST_TEXT,
	updatedPostText: postText
})

export default profileReducer;