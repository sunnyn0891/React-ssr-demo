import { combineReducers } from 'redux';
import login from '../client/app/containers/Login/reducers';
export default function createReducer(injectedReducers = {}) {
    const rootReducer = combineReducers({
        login
    });

    return rootReducer;
}