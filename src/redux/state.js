let store = {
	_callSubscriber() {
		console.log('State changed');
	},

	_state: {
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
		},
	},
	
	getState() {
		return this._state;
	},

	addPost() {
		let newPost = {
			id: this._state.profilePage.posts.length + 1, message: this._state.profilePage.newPostText, likesCount: 0
		};
		this._state.profilePage.posts.push(newPost);
		this._state.profilePage.newPostText = '';
		this._callSubscriber(this._state);
	},

	updateNewPostText(newText) {
		this._state.profilePage.newPostText = newText;
		this._callSubscriber(this._state);
	},

	sendMessage() {
		let newMessage = {
			id: this._state.dialogsPage.messages.length + 1, message: this._state.dialogsPage.newMessageText
		};
		this._state.dialogsPage.messages.push(newMessage);
		this._state.dialogsPage.newMessageText = '';
		this._callSubscriber(this._state);
	},
	
	// Функция обновления сообщения в state при наборе текста сообщения
	updateNewMessageText(newMessage) {
		this._state.dialogsPage.newMessageText = newMessage;
		this._callSubscriber(this._state);
	},

	subscribe(observer) {
		this._callSubscriber = observer;
	}
}

window.store = store;

export default store;