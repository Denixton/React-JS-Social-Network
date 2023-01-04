import axios from 'axios';
import React from 'react';
import styles from './Users.module.css';
import userPhoto from '../../../src/assets/images/user.png';
import userNullPhoto from '../../../src/assets/images/null-user.png';


const Users = (props) => {
	
	let getUsers = () => {
		if (props.users.length === 0) {
			axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
				props.setUsers(response.data.items);
			});
		}
	}

	return <div> 
		<button onClick={getUsers}>
			Get Users
		</button>
			{
				props.users.map(user => <div key={user.id}>
					<span>
						<div>
							<img src={user.photos.small != null ? userNullPhoto : userPhoto} alt='user avatar' className={styles.userPhoto}/>
						</div>
					</span>
					<span>
						{user.followed ? <button onClick={ () => {props.unfollow(user.id)} }>Unfollow</button> : <button onClick={ () => {props.follow(user.id)} }>Follow</button>}
					</span>
					<span>
						<span>
							<div>{user.name}</div>
							<div>{user.status}</div>
						</span>
						<span>
							<div>{"user.location.country"}</div>
							<div>{"user.location.city"}</div>
						</span>
					</span>
				</div>)
			}
	</div>
}

export default Users;