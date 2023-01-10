import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import Profile from '../Profile';
import { setUserProfile } from '../../../redux/profile-reducer';
import { useParams } from 'react-router-dom';

const withRouter = (Component) => {
	return(props) => {
		const match = {params: useParams()};
		return <Component {...props} match={match} />
	}
}

class ProfileContainer extends React.Component {
    redirectToMainUser() {
        let userId = this.props.match.params.userId;
        if(!userId) {
            userId = 2; //Пишем Ваш id
        }
		axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {
			this.props.setUserProfile(response.data);
		})
        
    }

    componentDidMount() {
        this.redirectToMainUser();
    }

    componentDidUpdate(prevProps){
        if(this.props.isMain !== prevProps.isMain) {
            if(this.props.isMain){
                this.redirectToMainUser();
            }
        }
    }

	render() {
		return <Profile {...this.props} profile={this.props.profile}/>
	}
}

const mapStateToProps = (state) => ({
	profile: state.profilePage.profile
});

const WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);