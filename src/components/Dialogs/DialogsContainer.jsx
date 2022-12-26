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
		<Dialogs sendMessage={onSendMessageClick} updateNewMessageText={onNewMessageChange} dialogsPage={state}/>
	);
}

export default DialogsContainer;