import React from 'react';
import { connect } from 'react-redux';
import Profile from '../Profile';
import { getUserProfile } from '../../../redux/profile-reducer';
import { useParams } from 'react-router-dom';
import { withAuthNavigate } from '../../HOC/WithAuthNavigate';
import { compose } from 'redux';


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
            userId = 2; 
        }
		this.props.getUserProfile(userId);
        
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

export default compose(
	connect(mapStateToProps, {getUserProfile}),
	withRouter,
	withAuthNavigate,
)(ProfileContainer);