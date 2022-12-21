let rerenderEntireTree = () => {
	
}

let state = {

	profilePage: {
		posts: [
			{ id: 1, message: 'Hi, how are you?', likesCount: 11 },
			{ id: 2, message: 'It\'s my first post', likesCount: 23 },
			{ id: 3, message: 'Omg, what the hell?', likesCount: 51 },
			{ id: 4, message: 'No-no-nobody knows React', likesCount: 37 }
		],
		newPostText: 'it-kamasutra.com'
	},

	dialogsPage: {
		dialogs: [
			{ id: 1, name: 'Alexey' },
			{ id: 2, name: 'Ivan' },
			{ id: 3, name: 'Alexey' },
			{ id: 4, name: 'Nataliya' },
			{ id: 5, name: 'Anton' },
			{ id: 6, name: 'Dmitriy' }
		],
		messages: [
			{ id: 1, message: 'Hi' },
			{ id: 2, message: 'How is your IT?' },
			{ id: 3, message: 'Yo' },
			{ id: 4, message: 'So interesting thing!' },
			{ id: 5, message: "What's up?" },
			{ id: 6, message: 'Long-long day...' }
		],
		newMessageText: 'example text'
	},

	sidebarPage: {
		friends: [
			{ id: 1, name: 'Alexey' },
			{ id: 2, name: 'Ivan' },
			{ id: 3, name: 'Alexy' }
		]
	}
}

window.state = state;

// Функция добавления поста
export const addPost = () => {
	let newPost = {
		id: state.profilePage.posts.length + 1, message: state.profilePage.newPostText, likesCount: 0
	};
	state.profilePage.posts.push(newPost);
	state.profilePage.newPostText = '';
	rerenderEntireTree(state);
}

// Функция обновления поста в state при наборе текста поста
export const updateNewPostText = (newText) => {
	state.profilePage.newPostText = newText;
	rerenderEntireTree(state);
}

// Функция отправки сообщения
export const sendMessage = () => {
	let newMessage = {
		id: state.dialogsPage.messages.length + 1, message: state.dialogsPage.newMessageText
	};
	state.dialogsPage.messages.push(newMessage);
	state.dialogsPage.newMessageText = '';
	rerenderEntireTree(state);
}

// Функция обновления сообщения в state при наборе текста сообщения
export const updateNewMessageText = (newMessage) => {
	state.dialogsPage.newMessageText = newMessage;
	rerenderEntireTree(state);
}

// Функция перерисовки
export const subscribe = (observer) => {
	rerenderEntireTree = observer;
}

export default state;