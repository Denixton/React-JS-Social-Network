import { authAPI } from "../api/api";

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
				...action.payload,
			}

		case AUTH_IS_FETCHING:
			return {
				...state,
				isFetching: action.isFetching
			}
	}
	return state;
}

export const setAuthUserData = (userId, email, login, isAuth) => ({
	type: SET_AUTH_USER_DATA,
	payload: {
		userId,
		email,
		login,
		isAuth
	}
});

export const authIsFetching = (authIsFetching) => ({
	type: AUTH_IS_FETCHING,
	authIsFetching
});

/* authMe thunkCreator */
export const getAuthUserData = () => {
	/* thunk */
	return (dispatch) => {
		dispatch(authIsFetching(true));
		authAPI.authMe().then((data) => {
			dispatch(authIsFetching(false));
			if (data.resultCode === 0) {
				let {id, email, login} = data.data;
				dispatch(setAuthUserData(id, email, login, true));
			}
		});
	}
}

export const login = (email, password, rememberMe) => (dispatch) => {
	authAPI.login(email, password, rememberMe).then(data => {
		if (data.resultCode === 0) {
			dispatch(getAuthUserData());
		}
	});
}

export const logout = () => (dispatch) => {
	authAPI.logout().then(data => {
		if (data.resultCode === 0) {
			dispatch(setAuthUserData(null, null, null, false));
		}
	});
}

export default authReducer;

