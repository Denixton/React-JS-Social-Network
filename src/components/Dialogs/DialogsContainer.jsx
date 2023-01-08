import React from 'react';
import { connect } from 'react-redux';
import { sendMessage, updateNewMessageText } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

const mapStateToProps = (state) => {
	return {
		dialogs: state.dialogsPage.dialogs,
		messages: state.dialogsPage.messages,
		newMessageText: state.dialogsPage.newMessageText
	}
}

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		sendMessage: () => {
// 			dispatch(sendMessageActionCreator());
// 		},

// 		updateNewMessageText: (messageText) => {
// 			dispatch(updateNewMessageTextActionCreator(messageText));
// 		}
// 	}
// }

const DialogsContainer = connect(mapStateToProps, {sendMessage, updateNewMessageText})(Dialogs);

export default DialogsContainer;