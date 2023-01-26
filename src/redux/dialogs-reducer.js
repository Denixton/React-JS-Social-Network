const SEND_MESSAGE = 'SEND-MESSAGE';

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
	]
};

const dialogsReducer = (state = initialState, action) => {

	switch(action.type) {
		case SEND_MESSAGE: 
			return {
				...state,
				messages: [...state.messages, {id: state.messages.length + 1, message: action.newMessageText}]
			};

		default:
			return state;
		}
}

export const sendMessage = (newMessageText) => ({
	type: SEND_MESSAGE,
	newMessageText
})

export default dialogsReducer;