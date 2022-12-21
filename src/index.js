import reportWebVitals from './reportWebVitals';
import state, { subscribe } from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {sendMessage, addPost, updateNewMessageText, updateNewPostText} from './redux/state';

const root = ReactDOM.createRoot(document.getElementById('root')); 

export const rerenderEntireTree = (state) => {
	root.render(
		<React.StrictMode>
			<App state={state} addPost={addPost} updateNewPostText={updateNewPostText} sendMessage={sendMessage} updateNewMessageText={updateNewMessageText}/>
		</React.StrictMode>
	);
}

rerenderEntireTree(state);

subscribe(rerenderEntireTree);

reportWebVitals();


