const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let store = {
	_state: {
		profilePage: {
			posts: [
				{ id: 1, message: 'Hi, how are you?', likesCount: 11 },
				{ id: 2, message: 'It\'s my first post', likesCount: 23 },
				{ id: 3, message: 'Omg, what the hell?', likesCount: 51 },
				{ id: 4, message: 'No-no-nobody knows React', likesCount: 37 }
			],
			newPostText: ''
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
			newMessageText: ''
		},

		sidebarPage: {
			friends: [
				{ id: 1, name: 'Alexey' },
				{ id: 2, name: 'Ivan' },
				{ id: 3, name: 'Alexy' }
			]
		},
	},
	_callSubscriber() {
		console.log('State changed');
	},

	getState() {
		return this._state;
	},
	subscribe(observer) {
		this._callSubscriber = observer;
	},

	dispatch(action) {
		if (action.type === ADD_POST) {
			let newPost = {
				id: this._state.profilePage.posts.length + 1, message: this._state.profilePage.newPostText, likesCount: 0
			};
			this._state.profilePage.posts.push(newPost);
			this._state.profilePage.newPostText = '';
			this._callSubscriber(this._state);
		}
		else if (action.type === UPDATE_NEW_POST_TEXT) {
			this._state.profilePage.newPostText = action.updatedPostText;
			this._callSubscriber(this._state);
		}
		else if (action.type === SEND_MESSAGE) {
			let newMessage = {
				id: this._state.dialogsPage.messages.length + 1, message: this._state.dialogsPage.newMessageText
			};
			this._state.dialogsPage.messages.push(newMessage);
			this._state.dialogsPage.newMessageText = '';
			this._callSubscriber(this._state);
		}
		else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
			this._state.dialogsPage.newMessageText = action.updatedMessageText;
			this._callSubscriber(this._state);
		}
	}
}

export const addPostActionCreator = () => ({
		type: ADD_POST
})

export const updateNewPostTextActionCreator = (postText) => ({
		type: UPDATE_NEW_POST_TEXT,
		updatedPostText: postText
})

export const sendMessageActionCreator = () => ({
		type: SEND_MESSAGE
})

export const updateNewMessageTextActionCreator = (messageText) => ({
		type: UPDATE_NEW_MESSAGE_TEXT,
		updatedMessageText: messageText
})

window.store = store;

export default store;