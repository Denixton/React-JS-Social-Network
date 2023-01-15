import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { setAuthUserData, authIsFetching } from '../../redux/auth-reducer';
import Preloader from '../Common/Preloader/Preloader';
import { authAPI } from '../../api/api';

class HeaderContainer extends React.Component {

	componentDidMount() {
		this.props.authIsFetching(true);
		authAPI.getAuth().then((data) => {
			this.props.authIsFetching(false);
			if (data.resultCode === 0) {
				let {id, email, login} = data.data;
				this.props.setAuthUserData(id, email, login);
			}
		});
	}

	render() {
		return (
			<>
			{this.props.authIsFetching ? <Preloader /> : null}
			<Header {...this.props} />
			</>
		)
	}
}

export const mapStateToProps = (state) => {
	return {
		isAuth: state.auth.isAuth,
		login: state.auth.login,
		authIsFetching: state.auth.authIsFetching
	}
}

export default connect(mapStateToProps, {setAuthUserData, authIsFetching})(HeaderContainer);