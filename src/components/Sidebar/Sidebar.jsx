import React from 'react';
import classes from './Sidebar.module.css';

const Sidebar = (props) => {
	
	return (
		<div className={classes.friends}>
			<div className={classes.friend}>
				<img src='https://i.pinimg.com/736x/21/13/ee/2113ee8054b3309e98a03daeafa1defa--fedoras-beautiful-people.jpg' alt='friends'></img>
			</div>
			<div>
				Alexey
			</div>
		</div>

	);
	
}

export default Sidebar;