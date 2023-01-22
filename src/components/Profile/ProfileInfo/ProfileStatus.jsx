import React from 'react';
import Preloader from '../../Common/Preloader/Preloader';
import styles from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {

	// if (!props.profile) {
	// 	return <Preloader />
	// }

	state = {
		editMode: false
	}

	activateEditMode = () => {
		this.setState({
			editMode: true
		})
	}

	deactivateEditMode = () => {
		this.setState({
			editMode: false
		})
	}

	render() {
		return (
			<div>
				{!this.state.editMode
					? <div className={styles.statusBlock}>
						<span onDoubleClick={this.activateEditMode} className={styles.statusText}>{this.props.status}</span>
					</div>
					: <div className={styles.statusInputBlock}>
						<input autoFocus={true} onBlur={this.deactivateEditMode} value={this.props.status} className={styles.statusText}></input>
					</div>
				}
			</div>
		)
	}
}

export default ProfileStatus;