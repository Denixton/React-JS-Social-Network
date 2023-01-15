import React from "react";
import { connect } from "react-redux";
import {
	follow,
	setUsers,
	unfollow,
	setCurrentPage,
	setTotalUsersCount,
	toggleIsFetching,
	toggleFollowingProgress
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import { usersAPI } from "../../api/api";

class UsersContainer extends React.Component {
	componentDidMount() {
    this.props.toggleIsFetching(true);
	usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then((data) => {
			this.props.toggleIsFetching(false);
			this.props.setUsers(data.items);
			this.props.setTotalUsersCount(data.totalCount);
		});
	}

	onPageChanged = (pageNumber) => {
		this.props.setCurrentPage(pageNumber);
		this.props.toggleIsFetching(true);
		usersAPI.getUsers(pageNumber, this.props.pageSize).then((data) => {
			this.props.toggleIsFetching(false);
			this.props.setUsers(data.items);
		});
	};

	unfollowUser = (userId) => {
		this.props.toggleFollowingProgress(true, userId);
		usersAPI.unfollowUser(userId).then((data) => {
			if (data.resultCode === 0) {
				this.props.unfollow(userId);
				this.props.toggleFollowingProgress(false, userId);
			} 
		});
	}

	followUser = (userId) => {
		this.props.toggleFollowingProgress(true, userId);
		usersAPI.followUser(userId).then((data) => {
			if (data.resultCode === 0) {
				this.props.follow(userId);
				this.props.toggleFollowingProgress(false, userId);
			} 
		});
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
	follow,
	unfollow,
	setUsers,
	setCurrentPage,
	setTotalUsersCount,
	toggleIsFetching,
	toggleFollowingProgress
})(UsersContainer);
