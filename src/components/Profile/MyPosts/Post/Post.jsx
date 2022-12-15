import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
	return (
		<div>
			<div className={classes.item}>
				<img src='https://klike.net/uploads/posts/2021-11/1637823417_17.jpg' alt='Avatar'></img>
					{props.message}
				<div>
					<span>like</span> {props.likesCount}
				</div>
			</div>
		</div>
	);
}

export default Post;