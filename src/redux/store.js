import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

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
				{ id: 3, name: 'Nataliya' }
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
		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
		this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action);

		this._callSubscriber(this._state);
	}
}

window.store = store;

export default store;