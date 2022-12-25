import React from 'react';
import classes from './Friend.module.css';

const Friend = (props) => {
	return (
		<div>
			<div className={classes.friendBlock}>
				<img src='https://konkatsudanshi.com/wp-content/uploads/2020/03/creepy-man-without-a-face-in-a-hoodie-picjumbo-com.jpg' alt='Friend'></img>
				<div className={classes.friendName}>
					{props.name}
				</div>
			</div>
		</div>
	)
}

export default Friend;