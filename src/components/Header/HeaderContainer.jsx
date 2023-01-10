import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { setAuthUserData, authIsFetching } from '../../redux/auth-reducer';
import axios from 'axios';
import Preloader from '../Common/Preloader/Preloader';

class HeaderContainer extends React.Component {

	componentDidMount() {
		this.props.authIsFetching(true);
		axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
			withCredentials: true
		}).then((response) => {
			this.props.authIsFetching(false);
			if (response.data.resultCode === 0) {
				let {id, email, login} = response.data.data;
				this.props.setAuthUserData(id, email, login);
			}
		});
	}

	render() {
		return (
			<>
			{this.props.isFetching ? <Preloader /> : null}
			<Header {...this.props} />
			</>
		)
	}
}

export const mapStateToProps = (state) => {
	return {
		isAuth: state.auth.isAuth,
		login: state.auth.login,
		isFetching: state.auth.isFetching
	}
}

export default connect(mapStateToProps, {setAuthUserData, authIsFetching})(HeaderContainer);