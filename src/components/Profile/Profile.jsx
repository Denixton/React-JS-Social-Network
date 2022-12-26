import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
<<<<<<< HEAD
=======
import classes from './Profile.module.css';
>>>>>>> c480ce5a512c02c01ab255e57e1e31ed8f1f3cff
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
	return (
		<div>
			<ProfileInfo />
			<MyPostsContainer store={props.store} />
		</div>
	);
}

export default Profile;