import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import classes from './Dialogs.module.css';

const Dialogs = (props) => {
	
let dialogs = props.dialogsPage.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);

let messages = props.dialogsPage.messages.map(message => <Message message={message.message} />);

let newMessageElement = React.createRef();

const sendMessage = () => {
	props.sendMessage();
}

const onMessageChange = () => {
	let textMessage = newMessageElement.current.value;
	props.updateNewMessageText(textMessage);
}

	return (
		<div className={classes.dialogs}>
			<div className={classes.dialogsItems}>
				{dialogs}
			</div>

			<div className={classes.messages}>
				{messages}
			</div>

			<textarea onChange={onMessageChange} ref={newMessageElement} value={props.dialogsPage.newMessageText} />
			<button onClick={sendMessage}>
				Send message
			</button>
		</div>
	);
}

export default Dialogs;