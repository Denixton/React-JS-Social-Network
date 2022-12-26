import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

	let state = props.profilePage;

	let postsElements = state.posts.map(post => <Post message={post.message} likesCount={post.likesCount} />);

<<<<<<< HEAD
	const addPost = () => {
=======
	const onAddPost = () => {
>>>>>>> c480ce5a512c02c01ab255e57e1e31ed8f1f3cff
		props.addPost();
	}

	let onPostChange = (e) => {	
		let postText = e.target.value;
		props.updateNewPostText(postText);
	}

	return (
		<div className={classes.postsBlock}>
			<h3>My posts</h3>
			<div>
				<div>
					<textarea onChange={onPostChange} value={state.newPostText} />
				</div>
				<button onClick={onAddPost}>
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