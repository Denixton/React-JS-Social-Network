import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './../Dialogs.module.css';

const DialogItem = (props) => {
	let path = '/dialogs/' + props.id;
	return (
		<div className={classes.dialog}>
			<img src='https://klike.net/uploads/posts/2021-11/1637823417_17.jpg' alt='Avatar'></img>
			<NavLink className={classes.dialogLink} to={path}> {props.name} </NavLink>
		</div>
	);
}

export default DialogItem;