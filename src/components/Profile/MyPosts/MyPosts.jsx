import React from 'react';
import { Field, reduxForm } from 'redux-form';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

	let postsElements = props.posts.map(post => <Post message={post.message} likesCount={post.likesCount} key={post.id} />);

	let addNewPost = (values) => {	
		props.addPost(values.newPostText);
	}

	return (
		<div className={classes.postsBlock}>
			<h3>My posts</h3>
			<AddPostReduxForm onSubmit={addNewPost} />
			<div className={classes.posts}>
				{postsElements}
			</div>
		</div>
	);
}

const addNewPostForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field component={'textarea'} name={'newPostText'} placeholder={`Enter post's text`} />
			</div>
			<button>
				Add post
			</button>
		</form>
	)
}

const AddPostReduxForm = reduxForm({
	form: 'myPostsAddPostForm'
})(addNewPostForm);


export default MyPosts;