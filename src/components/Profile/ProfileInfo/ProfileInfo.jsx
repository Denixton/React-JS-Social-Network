import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
	return (
		<div >
			<div>
				<img src='https://storge.pic2.me/cm/5120x2880/566/593fd655eec57.jpg' alt='profile'></img>
			</div>
			<div className={classes.descriptionBlock}>
				ava + description
			</div>
		</div>
	);
}

export default ProfileInfo;