import React from 'react';
import classes from './MyFriends.module.css';
import Friend from './Friend/Friend';

const MyFriends = (props) => {

	let friendsElements = props.friends.map(friend => <Friend name={friend.name} key={friend.id} />);

	return (
		<div className={classes.friendsBlock}>
			<h3 className={classes.friendsTitle}>
				My friends
			</h3>
			<div className={classes.friends}>
				{friendsElements}
			</div>
		</div>
		
	)
}

export default MyFriends;

