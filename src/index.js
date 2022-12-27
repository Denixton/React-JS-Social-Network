import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './redux/redux-store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

export const rerenderEntireTree = () => {
	root.render(
		<React.StrictMode>
			<Provider store={store}>
				<App />
			</Provider>
		</React.StrictMode>
	);
}

rerenderEntireTree(store.getState());

// store.subscribe(rerenderEntireTree);

store.subscribe( () => {
	rerenderEntireTree();
});

reportWebVitals();


