import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import classes from './Dialogs.module.css';

const Dialogs = (props) => {
	
	let state = props.dialogsPage;

	let dialogsElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} key={dialog.id}/>);

	let messagesElements = state.messages.map(message => <Message message={message.message} key={message.id} />);

	const onSendMessageClick = () => {
		props.sendMessage();
	}

	const onNewMessageChange = (e) => {
		let messageText = e.target.value;
		props.updateNewMessageText(messageText);
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
						<textarea placeholder='Enter your message' onChange={onNewMessageChange} value={state.newMessageText} />
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