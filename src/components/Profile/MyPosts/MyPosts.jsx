import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

	let postsElements = props.posts.map(post => <Post message={post.message} likesCount={post.likesCount} key={post.id} />);

	const onAddPost = () => {
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
					<textarea onChange={onPostChange} value={props.newPostText} />
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