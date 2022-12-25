import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './redux/redux-store';

const root = ReactDOM.createRoot(document.getElementById('root'));

export const rerenderEntireTree = (state) => {
	debugger;
	root.render(
		<React.StrictMode>
			<App state={state} dispatch={store.dispatch.bind(store)} />
		</React.StrictMode>
	);
}

rerenderEntireTree(store.getState());


// store.subscribe(rerenderEntireTree);


store.subscribe( () => {
	let state = store.getState();
	rerenderEntireTree(state);
});

reportWebVitals();


