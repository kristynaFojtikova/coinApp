import produce from 'immer';
import {CurrencyAction} from '../actions';
import {CurrencyActionType} from '../action-types';
import {CurrencyDetail, CurrencyGlimpse} from '..';

interface CurrencyState {
  loading: boolean;
  error: string | null;
  listData: CurrencyGlimpse[];
  selectedCurrencyId: string | null;
  selectedCurrencyDetail: CurrencyDetail | null;
}

const initialState: CurrencyState = {
  loading: false,
  error: null,
  listData: [],
  selectedCurrencyId: null,
  selectedCurrencyDetail: null,
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
      case CurrencyActionType.SELECT_CURRENCY:
        state.selectedCurrencyId = action.payload;
        state.selectedCurrencyDetail = null;
        return state;
      case CurrencyActionType.FETCH_DETAIL:
        state.error = null;
        state.loading = true;
        return state;
      case CurrencyActionType.FETCH_DETAIL_COMPLETE:
        state.selectedCurrencyDetail = action.payload;
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
