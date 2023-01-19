import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { getAuthUserData } from '../../redux/auth-reducer';
import Preloader from '../Common/Preloader/Preloader';


class HeaderContainer extends React.Component {

	componentDidMount() {
		this.props.getAuthUserData();
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

export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer);