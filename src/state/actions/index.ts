import {CurrencyActionType} from '../action-types';
import {CurrencyDetail, CurrencyGlimpse} from '../types';

interface FetchListAction {
  type: CurrencyActionType.FETCH_LIST;
}

export interface FetchListCompleteAction {
  type: CurrencyActionType.FETCH_LIST_COMPLETE;
  payload: CurrencyGlimpse[];
}

interface SelectCurrencyAction {
  type: CurrencyActionType.SELECT_CURRENCY;
  payload: string;
}

interface FetchDetailAction {
  type: CurrencyActionType.FETCH_DETAIL;
}

export interface FetchDetailCompleteAction {
  type: CurrencyActionType.FETCH_DETAIL_COMPLETE;
  payload: CurrencyDetail;
}

export interface FetchErrorAction {
  type: CurrencyActionType.FETCH_ERROR;
  payload: string;
}

export type CurrencyAction =
  | FetchListAction
  | FetchListCompleteAction
  | SelectCurrencyAction
  | FetchDetailAction
  | FetchDetailCompleteAction
  | FetchErrorAction;
