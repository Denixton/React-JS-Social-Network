/* eslint-disable default-case */
const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';
const AUTH_IS_FETCHING = 'AUTH_IS_FETCHING'

const initialState = {
	userId: null,
	email: null,
	login: null,
	isAuth: false,
	authIsFetching: false
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_AUTH_USER_DATA:
			return {
				...state,
				...action.data,
				isAuth: true
			}

		case AUTH_IS_FETCHING:
			return {
				...state,
				isFetching: action.isFetching
			}
	}
	return state;
}

export const setAuthUserData = (userId, email, login) => ({
	type: SET_AUTH_USER_DATA,
	data: {
		userId,
		email,
		login
	}
});

export const authIsFetching = (authIsFetching) => ({
	type: AUTH_IS_FETCHING,
	authIsFetching
});

export default authReducer;

