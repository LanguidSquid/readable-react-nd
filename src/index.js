import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import { Provider } from 'react-redux';

const logger = store => next => action => {
	console.group(action.type)
	console.info('dispatcing', action)
	let result = next(action)
	console.log('next state', store.getState())
	console.groupEnd(action.type)
	return result
}

const composeEnancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
	rootReducer,
	composeEnancers(
		applyMiddleware(logger)
	)
)

ReactDOM.render(<Provider store={store}>
                <App />
                </Provider>, document.getElementById('root'));
registerServiceWorker();
