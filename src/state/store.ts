import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {persistStore} from 'redux-persist';
import reducers from './reducers';

const middleware = applyMiddleware(thunk);
export const store = createStore(reducers, middleware);

export const persistor = persistStore(store);
