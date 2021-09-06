import {Dispatch} from 'redux';
import {CurrencyActionType} from '../action-types';
import {CurrencyAction} from '../actions';
import {CurrencyDetail, CurrencyGlimpse} from '..';
import {currencyService} from '../../services/currencyService';

const fetchCurrencyList = () => {
  return async (dispatch: Dispatch<CurrencyAction>) => {
    dispatch({type: CurrencyActionType.FETCH_LIST});
    try {
      const data: CurrencyGlimpse[] = await currencyService.fetchList();
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

export const actionCreators = {fetchCurrencyDetail, fetchCurrencyList};
