import {combineReducers} from 'redux';
import currencyReducer from './currencyReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['listData'],
};

const reducers = combineReducers({
  currencies: persistReducer(persistConfig, currencyReducer),
});

export type RootState = ReturnType<typeof reducers>;

export default reducers;
