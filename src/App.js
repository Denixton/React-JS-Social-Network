import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';
import Sidebar from './components/Sidebar/Sidebar';

const App = (props) => {
	
	return(
		<BrowserRouter>
			<div className='app-wrapper'>
				<Header />
				<Navbar />
				{/* <Sidebar sidebarPage={props.state.sidebarPage} /> */}
				<div className='app-wrapper-content'>
					<Routes>
						<Route path='/profile' element={<Profile profilePage={props.state.profilePage} addPost={props.store.addPost.bind(props.store)} updateNewPostText={props.store.updateNewPostText.bind(props.store)} />} />
						<Route path='/dialogs' element={<Dialogs dialogsPage={props.state.dialogsPage} sendMessage={props.store.sendMessage.bind(props.store)} updateNewMessageText={props.store.updateNewMessageText.bind(props.store)} />} />
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
