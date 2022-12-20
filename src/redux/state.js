import { rerenderEntireTree } from "../render";

let state = {

	profilePage: {
		posts: [
			{id: 1, message: 'Hi, how are you?', likesCount: 11}, 
			{id: 2, message: 'It\'s my first post', likesCount: 23}, 
			{id: 3, message: 'Omg, what the hell?', likesCount: 51}, 
			{id: 4, message: 'No-no-nobody knows React', likesCount: 37}
		]
	},

	dialogsPage: {
		dialogs: [
			{id: 1, name: 'Alexey'}, 
			{id: 2, name: 'Ivan'}, 
			{id: 3, name: 'Alexey'}, 
			{id: 4, name: 'Nataliya'}, 
			{id: 5, name: 'Anton'}, 
			{id: 6, name: 'Dmitriy'}
		],
		messages:  [
			{id: 1, message: 'Hi'}, 
			{id: 2, message: 'How is your IT?'}, 
			{id: 3, message: 'Yo'}, 
			{id: 4, message: 'So interesting thing!'}, 
			{id: 5, message: "What's up?"}, 
			{id: 6, message: 'Long-long day...'}
		]
	},
	
	sidebar: {
		
	}
} 

export const addPost = (postMessage) => {
	let newPost = {
		id: 5, 
		message: postMessage, 
		likesCount: 0
	};

	state.profilePage.posts.push(newPost);
	rerenderEntireTree(state);
}

export default state;