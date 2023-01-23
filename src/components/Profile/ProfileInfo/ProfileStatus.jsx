import React from 'react';
import Preloader from '../../Common/Preloader/Preloader';
import styles from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {

	// if (!props.profile) {
	// 	return <Preloader />
	// }

	state = {
		editMode: false,
		status: this.props.status
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
		this.props.updateStatus(this.state.status);
	}

	onStatusChange = (e) => {
		this.setState({
			status: e.target.value
		});
	}

	componentDidUpdate(prevProps) {
		if (prevProps.status !== this.props.status) {
			this.setState({
				status: this.props.status
			});
		}
	}

	render() {
		return (
			<div>
				{!this.state.editMode
					? <div className={styles.statusBlock}>
						<span onDoubleClick={this.activateEditMode} className={styles.statusText}>{this.props.status || "No status"}</span>
					</div>
					: <div className={styles.statusInputBlock}>
						<input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status} 
						className={styles.statusText}></input>
					</div>
				}
			</div>
		)
	}
}

export default ProfileStatus;