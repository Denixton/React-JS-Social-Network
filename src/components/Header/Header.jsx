import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = (props) => {
	return (
		<header className={styles.header}>
				<img src='https://cdn.freelance.ru/img/portfolio/pics/00/3D/54/4019446.jpg?mt=5e1b3045' alt='header'></img>
				
				<div className={styles.loginBlock}>
					{props.isAuth 
						? <div className={styles.login}>
							{props.login}
						</div> 
						: <NavLink to={'/login'}>Log in</NavLink>}
				</div>
		</header>
	);
}

export default Header;