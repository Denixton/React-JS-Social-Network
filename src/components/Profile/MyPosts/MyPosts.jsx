import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
	
	let posts = props.posts.map(post => <Post message={post.message} likesCount={post.likesCount} />);
	
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
				{posts}
			</div>
		</div>
	);
}

export default MyPosts;