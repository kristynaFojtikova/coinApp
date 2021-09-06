import axios from 'axios';
import {CurrencyDetail, CurrencyGlimpse} from '../state';

const API_BASE_URL = 'https://www.accointing.com/api/';

export const currencyService = {
  fetchList,
  fetchDetail,
};

const currencyClient = axios.create({
  baseURL: API_BASE_URL,
});

async function fetchList(): Promise<CurrencyGlimpse[]> {
  const response = await currencyClient.get('data/currencies/allCurrencies');
  return response.data;
}

async function fetchDetail({
  currencyId,
}: {
  currencyId: String;
}): Promise<CurrencyDetail> {
  const response = await currencyClient.get(
    `markets/coinPerformanceByCurrencyId/${currencyId}`,
  );
  return response.data;
}
