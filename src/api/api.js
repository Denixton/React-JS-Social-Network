import React from "react";
import axios from "axios";

const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {
		'API-KEY': '7c76c913-106b-4d3f-8b8b-fd609d29332d'
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
		return instance.post(`follow/${userId}`, {}).then(response => {
			return response.data;
		});
	}
}

export const authAPI = {
	getAuth() {
		return instance.get(`auth/me`).then(response => {
			return response.data;
		});
	}
}

export const userProfileAPI = {
	getUserProfile(userId) {
		return instance.get(`profile/${userId}`).then(response => {
			return response.data;
		});
	}
}
