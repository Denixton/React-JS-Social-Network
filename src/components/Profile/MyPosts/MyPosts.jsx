import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

	let posts = [
		{id: 1, message: 'Hi, how are you?', likesCount: 11}, 
		{id: 2, message: 'It\'s my first post', likesCount: 23}, 
		{id: 3, message: 'Omg, what the hell?', likesCount: 51}, 
		{id: 4, message: 'No-no-nobody knows React', likesCount: 37}
	]; 

	let postsElements = posts.map(post => <Post message={post.message} likesCount={post.likesCount} />);

	return (
		<div className={classes.postsBlock}>
			<h3>My posts</h3>
			<div>
				<div>
					<textarea></textarea>
				</div>
				<button>Add post</button>
			</div>
				<div className={classes.posts}>
					{postsElements}
				</div>
		</div>
	);
}

export default MyPosts;