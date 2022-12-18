import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import classes from './Dialogs.module.css';

const Dialogs = (props) => {
	
let dialogs = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);

let messages = props.state.messages.map(message => <Message message={message.message} />);

	return (
		<div className={classes.dialogs}>
			<div className={classes.dialogsItems}>
				{dialogs}
			</div>

			<div className={classes.messages}>
				{messages}
			</div>
		</div>
	);
}

export default Dialogs;