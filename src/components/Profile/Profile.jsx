import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css';

const Profile = () => {
	return (
		<div>
			<div>
				<img src='https://storge.pic2.me/cm/5120x2880/566/593fd655eec57.jpg' alt='profile'></img>
			</div>
			<div>
				ava + description
			</div>
			<MyPosts />
		</div>
	);
}

export default Profile;