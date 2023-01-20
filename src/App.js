import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar/Navbar';
//import Sidebar from './components/Sidebar/Sidebar';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileInfo/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
// import News from './components/News/News';
// import Music from './components/Music/Music';
// import Settings from './components/Settings/Settings';

const App = (props) => {

	return (
		<BrowserRouter>
			<div className='app-wrapper'>
				<HeaderContainer />
				<Navbar />
				{/* <Sidebar sidebarPage={props.store.sidebarPage} /> */}
				<div className='app-wrapper-content'>
					<Routes>
						<Route path="/profile" element={<ProfileContainer isMain={true}/>} />
						<Route path="/profile/:userId" element={<ProfileContainer />} />
						<Route path='/dialogs' element={<DialogsContainer />} />
						<Route path='/users' element={<UsersContainer />} />
						<Route path='/login' element={<Login />} />
						{/* <Route path='/news' element={<News />}/>
						<Route path='/music' element={<Music />}/>
						<Route path='/settings' element={<Settings />}/> */}
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
