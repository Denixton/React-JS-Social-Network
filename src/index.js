import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './redux/state';

const root = ReactDOM.createRoot(document.getElementById('root')); 

export const rerenderEntireTree = (state) => {
	root.render(
		<React.StrictMode>
			<App state={state} store={store} />
		</React.StrictMode>
	);
}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);

reportWebVitals();


