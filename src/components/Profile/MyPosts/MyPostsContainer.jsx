import React from 'react';
import { connect } from 'react-redux';
import { addPost, updateNewPostText } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

const mapStateToProps = (state) => {
	return {
		posts: state.profilePage.posts,
		newPostText: state.profilePage.newPostText
	}
}

// const mapDispatchToProps = (dispatch) => {

// 	return {
// 		addPost: () => {
// 			dispatch(addPostActionCreator());
// 		},

// 		updateNewPostText: (postText) => {
// 			dispatch(updateNewPostTextActionCreator(postText));
// 		}
// 	}
// }

const MyPostsContainer = connect(mapStateToProps, {addPost, updateNewPostText})(MyPosts);

export default MyPostsContainer;