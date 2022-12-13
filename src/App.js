import React from 'react';
import './App.css';

import Header from './components/Header';
import Navbar from './components/Navbar';
import Profile from './components/Profile';


const App = () => {
	return (
		<div className='app-wrapper'>

			{/* Header start */}
			<Header />

			{/* Navbar start */}
			<Navbar />

			{/* Content start */}
			<Profile />

			{/* Footer start */}
			<footer className='footer'>
				
			</footer>
		</div>
	);
}

export default App;
