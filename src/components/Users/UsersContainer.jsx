import React from "react";
import { connect } from "react-redux";
import {
	getUsers,
	changePage,
	followSuccess,
	unfollowSuccess
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";


class UsersContainer extends React.Component {
	componentDidMount() {
		this.props.getUsers(this.props.currentPage, this.props.pageSize);
	}

	onPageChanged = (pageNumber) => {
		this.props.changePage(pageNumber, this.props.pageSize);
	};

	unfollowUser = (userId) => {
		this.props.unfollowSuccess(userId);
	}

	followUser = (userId) => {
		this.props.followSuccess(userId);
	}

	render() {
		return (
		<>
			{this.props.isFetching ? <Preloader /> : null}

			<Users
			totalUsersCount={this.props.totalUsersCount}
			pageSize={this.props.pageSize}
			currentPage={this.props.currentPage}
			onPageChanged={this.onPageChanged}
			users={this.props.users}
			followUser={this.followUser}
			unfollowUser={this.unfollowUser}
			followingInProgress={this.props.followingInProgress}
			/>
		</>
		);
	}
}

	export const mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching,
		followingInProgress: state.usersPage.followingInProgress
	};
};

	export default connect(mapStateToProps, {
	getUsers,
	followSuccess,
	unfollowSuccess,
	changePage
})(UsersContainer);
