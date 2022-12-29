import React from 'react';
import { connect } from 'react-redux';
import { followAC, setUsersAC, unfollowAC } from '../../redux/users-reducer';
import Users from './Users';

export const mapStateToProps = (state) => {
	return {
		users: state.usersPage.users
	}
}

export const mapDispatchToProps = (dispatch) => {
	return {
		follow: (userId) => {
			dispatch(followAC(userId))
		},

		unfollow: (userId) => {
			dispatch(unfollowAC(userId))
		},

		setUsers: (users) => {
			dispatch(setUsersAC(users))
		}
	}
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;