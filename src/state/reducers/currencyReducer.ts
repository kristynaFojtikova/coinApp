import {CurrencyDetail, CurrencyGlimpse} from '../types/currency-types';
import produce from 'immer';
import {CurrencyAction} from '../actions';
import {CurrencyActionType} from '../action-types';

interface CurrencyState {
  loading: boolean;
  error: string | null;
  listData: CurrencyGlimpse[];
  detail: CurrencyDetail | null;
}

const initialState: CurrencyState = {
  loading: false,
  error: null,
  listData: [],
  detail: null,
};

const currencyReducer = produce(
  (
    state: CurrencyState = initialState,
    action: CurrencyAction,
  ): CurrencyState => {
    switch (action.type) {
      case CurrencyActionType.FETCH_LIST:
        state.loading = true;
        state.error = null;
        return state;
      case CurrencyActionType.FETCH_LIST_COMPLETE:
        state.listData = action.payload;
        state.loading = false;
        return state;
      case CurrencyActionType.FETCH_DETAIL:
        state.loading = true;
        state.error = null;
        return state;
      case CurrencyActionType.FETCH_DETAIL_COMPLETE:
        state.detail = action.payload;
        state.loading = false;
        return state;
      case CurrencyActionType.FETCH_ERROR:
        state.loading = false;
        state.error = action.payload;
        return state;
      default:
        return state;
    }
  },
);

export default currencyReducer;
