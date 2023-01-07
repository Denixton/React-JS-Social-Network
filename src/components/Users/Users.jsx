import React from 'react';
import styles from './Users.module.css';
import userPhoto from '../../../src/assets/images/user.png';

const Users = (props) => {
	
	//const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
	const pages = [];

	for (let i=1; i <= 10; i++) {
		pages.push(i);
	}

	return <div>

			<div className={styles.pageNumber}>
				{pages.map(page => {
					return <span onClick={ (e) => {props.onPageChanged(page)} } className={props.currentPage === page ? styles.selectedPage : styles.nonSelectedPage}>{page}</span>
				})}
			</div>

			{
				props.users.map(user => <div key={user.id}>
					<span>
						<div>
							<img src={user.photos.small != null ? user.photos.small : userPhoto} alt='user avatar' className={styles.userPhoto} />
						</div>
					</span>
					<span>
						{user.followed ? <button onClick={() => { props.unfollow(user.id) }}>Unfollow</button> : <button onClick={() => { props.follow(user.id) }}>Follow</button>}
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