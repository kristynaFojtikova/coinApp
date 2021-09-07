import {Dispatch} from 'redux';
import {CurrencyActionType} from '../action-types';
import {CurrencyAction} from '../actions';
import {CurrencyDetail, CurrencyGlimpse} from '..';
import {currencyService} from '../../services/currencyService';
import {navigate} from '../../util/navigationRef';

const fetchCurrencyList = () => {
  return async (dispatch: Dispatch<CurrencyAction>) => {
    dispatch({type: CurrencyActionType.FETCH_LIST});
    try {
      const data: CurrencyGlimpse[] = await currencyService.fetchList();
      data.sort((a, b) => {
        if (!a.rank) {
          return 1;
        }
        if (!b.rank) {
          return -1;
        }
        return a.rank > b.rank ? 1 : -1;
      });
      dispatch({
        type: CurrencyActionType.FETCH_LIST_COMPLETE,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: CurrencyActionType.FETCH_ERROR,
        payload: err.message || 'Server error',
      });
    }
  };
};

const selectCurrencyAction = (id: string, name: string) => {
  return async (dispatch: Dispatch<CurrencyAction>) => {
    dispatch({type: CurrencyActionType.SELECT_CURRENCY, payload: id});
    navigate('CoinDetail', {name: name});
  };
};

const fetchCurrencyDetail = (id: string) => {
  return async (dispatch: Dispatch<CurrencyAction>) => {
    dispatch({type: CurrencyActionType.FETCH_DETAIL});
    try {
      const data: CurrencyDetail = await currencyService.fetchDetail({
        currencyId: id,
      });
      dispatch({
        type: CurrencyActionType.FETCH_DETAIL_COMPLETE,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: CurrencyActionType.FETCH_ERROR,
        payload: err.message || 'Server error',
      });
    }
  };
};

const updateListSearch = (string: string) => {
  return {
    type: CurrencyActionType.UPDATE_LIST_SEARCH,
    payload: string,
  };
};

const toggleListSearchVisibility = () => {
  return {
    type: CurrencyActionType.TOGGLE_LIST_SEARCH_VISIBILITY,
  };
};

export const actionCreators = {
  fetchCurrencyList,
  selectCurrencyAction,
  fetchCurrencyDetail,
  updateListSearch,
  toggleListSearchVisibility,
};
