import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {

<<<<<<< HEAD
	let state = props.store.getState().profilePage;
=======
	let state = props.store.getState();
>>>>>>> c480ce5a512c02c01ab255e57e1e31ed8f1f3cff

	const addPost = () => {
		props.store.dispatch(addPostActionCreator());
	}

<<<<<<< HEAD
	const onPostChange = (postText) => {
=======
	let onPostChange = (postText) => {
>>>>>>> c480ce5a512c02c01ab255e57e1e31ed8f1f3cff
		props.store.dispatch(updateNewPostTextActionCreator(postText));
	}

	return (
<<<<<<< HEAD
		<MyPosts addPost={addPost} updateNewPostText={onPostChange} profilePage={state}/>
=======
		<MyPosts addPost={addPost} updateNewPostText={onPostChange} 
				posts={state.profilePage.posts} newPostText={state.profilePage.newPostText}/>
>>>>>>> c480ce5a512c02c01ab255e57e1e31ed8f1f3cff
	);
}

export default MyPostsContainer;