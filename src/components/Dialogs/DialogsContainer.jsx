import { connect } from 'react-redux';
import { compose } from 'redux';
import { sendMessage, updateNewMessageText } from '../../redux/dialogs-reducer';
import { withAuthNavigate } from '../HOC/WithAuthNavigate';
import Dialogs from './Dialogs';

const mapStateToProps = (state) => {
	return {
		dialogs: state.dialogsPage.dialogs,
		messages: state.dialogsPage.messages,
		newMessageText: state.dialogsPage.newMessageText
	}
}

export default compose(
	connect(mapStateToProps, {sendMessage, updateNewMessageText}),
	withAuthNavigate
)(Dialogs);