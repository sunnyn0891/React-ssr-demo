import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
// import configureStore, { sagaMiddleware } from './store';
import reducer from '../shared/reducers';
import createSagaMiddleware from 'redux-saga';
import './index.css';
import sagas from '../shared/sagas';
import App from './app/containers/App';

// const store = configureStore();
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
	reducer,
	compose(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(sagas);
ReactDOM.hydrate(<ReduxProvider store={store}>
	<BrowserRouter>
		<App />
	</BrowserRouter>
</ReduxProvider>,
	document.getElementById('root'));
