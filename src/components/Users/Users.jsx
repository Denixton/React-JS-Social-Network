import React from 'react';
import styles from './Users.module.css'

const Users = (props) => {
	
	if (props.users.length === 0) {
		props.setUsers([
			{id: 1, photoUrl: 'https://assets.website-files.com/5d2ee243433de72453faf8b6/5e062e6f0b1ac5e0aff1dc54_strahov-big.jpg', followed: false, fullName: 'Alexey F.', status: 'I am looking for a job right now...', location: {city: 'Ukhta', country: 'Russia'} },
			{id: 2, photoUrl: 'https://assets.website-files.com/5d2ee243433de72453faf8b6/5e062e6f0b1ac5e0aff1dc54_strahov-big.jpg', followed: true, fullName: 'Alexey K.', status: 'I don\'t like programming, LOL!', location: {city: 'Ukhta', country: 'Russia'} },
			{id: 3, photoUrl: 'https://assets.website-files.com/5d2ee243433de72453faf8b6/5e062e6f0b1ac5e0aff1dc54_strahov-big.jpg', followed: false, fullName: 'Nataliya F.', status: 'Want to live like a princess.', location: {city: 'Moscow', country: 'Russia'} },
			{id: 4, photoUrl: 'https://assets.website-files.com/5d2ee243433de72453faf8b6/5e062e6f0b1ac5e0aff1dc54_strahov-big.jpg', followed: true, fullName: 'Ivan T.', status: 'Valhalla calling me.', location: {city: 'Valhalla-city', country: 'Valhalla'} }
		]
	)
}
	
	return <div> 
			{
				props.users.map(user => <div key={user.id}>
					<span>
						<div>
							<img src={user.photoUrl} alt='user avatar' className={styles.userPhoto}/>
						</div>
					</span>
					<span>
						{user.followed ? <button onClick={ () => {props.unfollow(user.id)} }>Unfollow</button> : <button onClick={ () => {props.follow(user.id)} }>Follow</button>}
					</span>
					<span>
						<span>
							<div>{user.fullName}</div>
							<div>{user.status}</div>
						</span>
						<span>
							<div>{user.location.country}</div>
							<div>{user.location.city}</div>
						</span>
					</span>
				</div>)
			}
	</div>
}

export default Users;