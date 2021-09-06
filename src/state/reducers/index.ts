import {combineReducers} from 'redux';
import currencyReducer from './currencyReducer';

const reducers = combineReducers({
  currencies: currencyReducer,
});

export type RootState = ReturnType<typeof reducers>;

export default reducers;
