import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import Profile from '../Profile';
import { setUserProfile } from '../../../redux/profile-reducer';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const ProfileContainer = (props) => {

		const params = useParams();
		if (!params.userId) {
			params.userId = 3;
		}

		useEffect( () => {
			axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${params.userId}`).then(response => {
				props.setUserProfile(response.data);
			});
		});
		
		return <Profile profile={props.profile}/>
	}

const mapStateToProps = (state) => ({
	profile: state.profilePage.profile
});

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);