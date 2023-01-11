import React from 'react';
import styles from './Users.module.css';
import userPhoto from '../../../src/assets/images/user.png';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const Users = (props) => {
	
	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
	let pages = [];

	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}
	
	let curP = props.currentPage;
	let curPF = ((curP - 2) < 0) ? 0 : curP - 2;
	let curPL = curP + 1;
	let slicedPages = pages.slice(curPF, curPL);

	return <div>
		
			<div className={styles.pageNumber}>
				<span className={styles.backPages} onClick={ () => {props.onPageChanged(1)} }>{`<<`}</span>
					{slicedPages.map(page => {
						return <span onClick={ (e) => {props.onPageChanged(page)} } className={props.currentPage === page ? styles.selectedPage : styles.nonSelectedPage} key={page}>{page}</span>
					})}
				<span className={styles.nextPages} onClick={ () => {props.onPageChanged(pagesCount)} }>{`>>`}</span>
			</div>

			{
				props.users.map(user => <div key={user.id}>
					<span>
						<div>
							<NavLink to={'/profile/' + user.id}>
								<img src={user.photos.small != null ? user.photos.small : userPhoto} alt='user avatar' className={styles.userPhoto} />
							</NavLink>
						</div>
					</span>
					<span>
						{user.followed ? <button onClick={() => {
							props.unfollow(user.id) 
							axios
							.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, 
								{
									withCredentials: true, 
									headers: {
										'API-KEY': '7c76c913-106b-4d3f-8b8b-fd609d29332d'
									}})
								.then((response) => {
									if (response.data.resultCode === 0) {
										props.unfollow(user.id) 
									} 
								});
						}}>Unfollow</button> 

						: <button onClick={() => { 
							axios
							.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {withCredentials: true})
								.then((response) => {
									if (response.data.resultCode === 0) {
										props.follow(user.id) 
									} 
								});
							

						}}>Follow</button>}

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