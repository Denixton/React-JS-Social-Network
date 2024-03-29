import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import classes from './Dialogs.module.css';
import { Field, reduxForm } from 'redux-form';
import {FormControl} from '../Common/FormsControls/FormsControls';
import { maxLengthCreator, required } from '../../utils/validators/validators';

const Dialogs = (props) => {

	let dialogsElements = props.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} key={dialog.id}/>);

	let messagesElements = props.messages.map(message => <Message message={message.message} key={message.id} />);

	const addNewMessage = (values) => {
		props.sendMessage(values.newMessageText);
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
				<AddMessageReduxForm onSubmit={addNewMessage} />
			</div>
		</div>
	);
}

const maxLength50 = maxLengthCreator(50);

const addMessageForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
		<div>
			<Field component={FormControl} name={'newMessageText'} placeholder='Enter your message' 
			validate={[required, maxLength50]} type={'textarea'} />
		</div>
		<div>
			<button>
				Send message
			</button>
		</div>
	</form>
	)
}

const AddMessageReduxForm = reduxForm({
	form: 'dialogAddMessageForm'
})(addMessageForm);

export default Dialogs;