// import React from "react";
import axios from "axios";

const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {
		'API-KEY': '89d986b6-12cb-47c0-beb9-e4251eb36517'
	}
})

export const usersAPI = {
	getUsers(currentPage = 1, pageSize = 10) {
		return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
			return response.data;
		});
	},

	unfollowUser(userId) {
		return instance.delete(`follow/${userId}`).then(response => {
			return response.data;
		});
	},
	
	followUser(userId) {
		return instance.post(`follow/${userId}`).then(response => {
			return response.data;
		});
	},

	getUserProfile(userId) {
		return instance.get(`profile/${userId}`).then(response => {
			return response.data;
		});
	}
}

export const authAPI = {
	authMe() {
		return instance.get(`auth/me`).then(response => {
			return response.data;
		});
	}
}

