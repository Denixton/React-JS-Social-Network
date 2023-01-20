import { usersAPI } from "../api/api";

/* eslint-disable default-case */
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

const initialState = {
	users: [],
	pageSize: 5,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: false,
	followingInProgress: []
};

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				users: state.users.map(user => {
					if (user.id === action.userId) {
						return {
							...user, followed: true
						}
					}
					return user;
				})
			}

		case UNFOLLOW:
			return {
				...state,
				users: state.users.map(user => {
					if (user.id === action.userId) {
						return {
							...user, followed: false
						}
					}
					return user;
				})
			}

		case SET_USERS:
			return {
				...state,
				users: action.users
			}

		case SET_CURRENT_PAGE:
			return {
				...state,
				currentPage: action.currentPage
			}

		case SET_TOTAL_USERS_COUNT:
			return {
				...state,
				totalUsersCount: action.totalCount
			}

		case TOGGLE_IS_FETCHING:
			return {
				...state,
				isFetching: action.isFetching
			}

		case TOGGLE_IS_FOLLOWING_PROGRESS:
			return {
				...state,
				followingInProgress: action.followingInProgress
					? [...state.followingInProgress, action.userId]
					: [state.followingInProgress.filter(id => id !== action.userId)]
			}
	}
	return state;
}

export const follow = (userId) => ({
	type: FOLLOW,
	userId
});

export const unfollow = (userId) => ({
	type: UNFOLLOW,
	userId
});

export const setUsers = (users) => ({
	type: SET_USERS,
	users
});

export const setCurrentPage = (currentPage) => ({
	type: SET_CURRENT_PAGE,
	currentPage
});

export const setTotalUsersCount = (totalCount) => ({
	type: SET_TOTAL_USERS_COUNT,
	totalCount
});

export const toggleIsFetching = (isFetching) => ({
	type: TOGGLE_IS_FETCHING,
	isFetching
});

export const toggleFollowingProgress = (followingInProgress, userId) => ({
	type: TOGGLE_IS_FOLLOWING_PROGRESS,
	followingInProgress,
	userId
});

/* THUNKS */

/* Get users thunkCreator */
export const getUsers = (currentPage, pageSize) => {
	/* thunk */
	return (dispatch) => {
		dispatch(toggleIsFetching(true));
		usersAPI.getUsers(currentPage, pageSize).then((data) => {
			dispatch(toggleIsFetching(false));
			dispatch(setUsers(data.items));
			dispatch(setTotalUsersCount(data.totalCount));
		});
	}
}

/* changePage thunkCreator */
export const changePage = (pageNumber, pageSize) => {
	/* thunk */
	return (dispatch) => {
		dispatch(setCurrentPage(pageNumber));
		dispatch(toggleIsFetching(true));
		usersAPI.getUsers(pageNumber, pageSize).then((data) => {
			dispatch(toggleIsFetching(false));
			dispatch(setUsers(data.items));
		});
	}
}

/* followUser thunkCreator */
export const Follow = (userId) => {
	/* thunk */
	return (dispatch) => {
		dispatch(toggleFollowingProgress(true, userId));
		usersAPI.followUser(userId).then((data) => {
			if (data.resultCode === 0) {
				dispatch(follow(userId));
				dispatch(toggleFollowingProgress(false, userId));
			} 
		});
	}
}

/* unfollowUser thunkCreator */
export const Unfollow = (userId) => {
	/* thunk */
	return (dispatch) => {
		dispatch(toggleFollowingProgress(true, userId));
		usersAPI.unfollowUser(userId).then((data) => {
			if (data.resultCode === 0) {
				dispatch(unfollow(userId));
				dispatch(toggleFollowingProgress(false, userId));
			} 
		});
	}
}

export default usersReducer;

