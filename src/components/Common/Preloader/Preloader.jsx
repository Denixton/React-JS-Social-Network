import React from 'react';
import styles from './Preloader.module.css';
import preloader from '../../../assets/images/preloader.gif'

const Preloader = (props) => {
	return <div>
			<img className={styles.preloader} src={preloader} alt='preloader' />
		</div>
}

export default Preloader;