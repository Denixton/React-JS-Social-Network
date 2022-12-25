import React from 'react';
import classes from './Sidebar.module.css';
import MyFriends from './MyFriends/MyFriends';

const Sidebar = (props) => {
	return (
		<div className={classes.friends}>
			<MyFriends friends={props.sidebarPage.friends} />
		</div>
	);
	
}

export default Sidebar;