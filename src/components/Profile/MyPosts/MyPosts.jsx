import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

	let postsElements = props.posts.map(post => <Post message={post.message} likesCount={post.likesCount} />);

	const addPost = () => {
		props.dispatch(addPostActionCreator());
	}

	let onPostChange = (e) => {
		let postText = e.target.value;
		props.dispatch(updateNewPostTextActionCreator(postText));
	}

	return (
		<div className={classes.postsBlock}>
			<h3>My posts</h3>
			<div>
				<div>
					<textarea onChange={onPostChange} value={props.newPostText} />
				</div>
				<button onClick={addPost}>
					Add post
				</button>
			</div>
			<div className={classes.posts}>
				{postsElements}
			</div>
		</div>
	);
}

export default MyPosts;