import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import classes from './Dialogs.module.css';
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/state';

const Dialogs = (props) => {

	let dialogsElements = props.dialogsPage.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);

	let messagesElements = props.dialogsPage.messages.map(message => <Message message={message.message} />);

	const onSendMessageClick = () => {
		props.dispatch(sendMessageActionCreator());
	}

	const onNewMessageChange = (e) => {
		let messageText = e.target.value;
		props.dispatch(updateNewMessageTextActionCreator(messageText));
	}

	return (
		<div className={classes.dialogs}>
			<div className={classes.dialogsItems}>
				{dialogsElements}
			</div>

			<div className={classes.messages}>
				<div>
					{messagesElements}
				</div>
				<div>
					<div>
						<textarea placeholder='Enter your message' onChange={onNewMessageChange} value={props.dialogsPage.newMessageText} />
					</div>
					<div>
						<button onClick={onSendMessageClick}>
							Send message
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Dialogs;