import React from 'react';
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {

	let state = props.store.getState().dialogsPage;

	const onSendMessageClick = () => {
		props.store.dispatch(sendMessageActionCreator());
	}

	const onNewMessageChange = (messageText) => {
		props.store.dispatch(updateNewMessageTextActionCreator(messageText));
	}

	return (
<<<<<<< HEAD
		<Dialogs sendMessage={onSendMessageClick} updateNewMessageText={onNewMessageChange} dialogsPage={state}/>
=======
		<Dialogs sendMessage={onSendMessageClick} updateNewMessageText={onNewMessageChange} 
		dialogsPage={state} />
>>>>>>> c480ce5a512c02c01ab255e57e1e31ed8f1f3cff
	);
}

export default DialogsContainer;