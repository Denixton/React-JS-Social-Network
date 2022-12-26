import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {

	let state = props.store.getState().profilePage;

	const addPost = () => {
		props.store.dispatch(addPostActionCreator());
	}

	const onPostChange = (postText) => {
		props.store.dispatch(updateNewPostTextActionCreator(postText));
	}

	return (
		<MyPosts addPost={addPost} updateNewPostText={onPostChange} profilePage={state}/>
	);
}

export default MyPostsContainer;