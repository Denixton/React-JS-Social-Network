const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
	switch(action.type) {
		case SEND_MESSAGE: {
			let newMessage = {
				id: state.messages.length + 1, message: state.newMessageText
			};
			let stateCopy = {
				...state,
				messages: [...state.messages]
			};
			
			stateCopy.messages.push(newMessage);
			stateCopy.newMessageText = '';
			return stateCopy;
		}
		
		case UPDATE_NEW_MESSAGE_TEXT:
			let stateCopy = {...state};
			stateCopy.messages = [...state.messages];
			stateCopy.newMessageText = action.updatedMessageText;
			return stateCopy;

		default:
			return state;
		}
}

export const sendMessageActionCreator = () => ({
	type: SEND_MESSAGE
})

export const updateNewMessageTextActionCreator = (messageText) => ({
	type: UPDATE_NEW_MESSAGE_TEXT,
	updatedMessageText: messageText
})

export default dialogsReducer;