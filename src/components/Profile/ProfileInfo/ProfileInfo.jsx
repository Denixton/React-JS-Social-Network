import React from 'react';
import Preloader from '../../Common/Preloader/Preloader';
import styles from './ProfileInfo.module.css';
import lookingForAJob from '../../../assets/images/lookingForAJob-smile.jpg';
import notLookingForAJob from '../../../assets/images/notLookingForAJob-smile.jpg';
import userPhoto from '../../../../src/assets/images/user.png';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {

	if (!props.profile) {
		return <Preloader />
	}

	return (
		<div >
			{/* <div>
				<img src='https://storge.pic2.me/cm/5120x2880/566/593fd655eec57.jpg' alt='profile'></img>
			</div> */}
			<div className={styles.descriptionBlock}>

				{props.profile.photos.large 
					? <img src={props.profile.photos.large} alt='User avatar'/> 
					: <img className={styles.userPhoto} src={userPhoto} alt='User avatar' />}

				

				<div className={styles.userInfoWrapper}>
					<ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
					<div className={styles.userText}>
						<span className={styles.infoTitle}>Обо мне:</span> {props.profile.aboutMe}
					</div>
					<div className={`${styles.jobSearching} ${styles.userText}`}>
						<span  className={styles.infoTitle}>Поиск работы:</span> {props.profile.lookingForAJobDescription}
							{props.profile.lookingForAJob 
							? <img className={styles.jobPicture} src={lookingForAJob} alt='looking for a job' />  
							: <img className={styles.jobPicture} src={notLookingForAJob} alt='not looking for a job'/>}
					</div>
					<div className={styles.userText}>
						<span className={styles.infoTitle}>Полное имя:</span>{props.profile.fullName}
					</div>
					<div className={styles.userText}>
						<span className={styles.infoTitle}>Я в интернете:</span> {props.profile.contacts.vk}
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProfileInfo;