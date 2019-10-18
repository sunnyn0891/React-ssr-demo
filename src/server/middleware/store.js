import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from '../../shared/reducers';
import sagas from '../../shared/sagas';
const sagaMiddleware = createSagaMiddleware();
const configureStore = () => {
    const store = createStore(
        reducer,
        compose(applyMiddleware(sagaMiddleware)),
    );
    return store;
};

const storeMiddleware = () => (req, res, next) => {
    const store = configureStore();
    sagaMiddleware.run(sagas);
    req.store = store;
    next();
};


export default storeMiddleware;