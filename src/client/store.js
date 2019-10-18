//This is the shared reducer between the client and server
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from '../shared/reducers';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
const defaultState = {};
const store = createStore(
    reducer,
    defaultState,
    compose(applyMiddleware(sagaMiddleware)),
);
sagaMiddleware.run(sagas);

export default store;