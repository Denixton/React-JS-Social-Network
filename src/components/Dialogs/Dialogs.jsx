import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import classes from './Dialogs.module.css';

const Dialogs = (props) => {

let dialogs = [
		{id: 1, name: 'Alexey'}, 
		{id: 2, name: 'Ivan'}, 
		{id: 3, name: 'Alexey'}, 
		{id: 4, name: 'Nataliya'}, 
		{id: 5, name: 'Anton'}, 
		{id: 6, name: 'Dmitriy'}
];

let messages = [
	{id: 1, message: 'Hi'}, 
	{id: 2, message: 'How is your IT?'}, 
	{id: 3, message: 'Yo'}, 
	{id: 4, message: 'So interesting thing!'}, 
	{id: 5, message: "What's up?"}, 
	{id: 6, message: 'Long-long day...'}
]; 

let dialogsElements = dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);

let messagesElements = messages.map(message => <Message message={message.message} />);

	return (
		<div className={classes.dialogs}>
			<div className={classes.dialogsItems}>
				{dialogsElements}
			</div>

			<div className={classes.messages}>
				{messagesElements}
			</div>
		</div>
	);
}

export default Dialogs;