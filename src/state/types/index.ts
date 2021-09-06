export interface MovingValue {
  '1': number;
  '2095': number;
}

export interface CurrencyGlimpse {
  id: string;
  currencyName: string;
  symbol: string;
  icon?: string;
  rank: number;
}

// GLIMPSE
// id: 1586,
// currencyName: 'DACC',
// symbol: 'DACC',
// createdAt: '2018-01-31T22:49:44.048Z',
// updatedAt: '2021-09-06T06:00:28.746Z',
// type: 'crypto',
// fetchingDisabled: true,
// icon: null,
// priority: 50,
// isTaxable: false,
// cmcId: 2986,
// rank: 3481,
// platformId: 257,
// contractAddress: '0xf8c595d070d104377f58715ce2e6c93e49a87f3c',

export interface CurrencyDetail {
  open?: MovingValue;
  low?: MovingValue;
  high?: MovingValue;
  close?: MovingValue;
  average?: MovingValue;
  circulatingSupply?: number;
  totalSupply?: number;
  maxSupply?: number;
}

// DETAIL
// open: {'1': 5.3e-7, '2095': 0.0274269},
// low: {'1': 5e-7, '2095': 0.02560054},
// high: {'1': 5.3e-7, '2095': 0.0274269},
// close: {'1': 5.200900417434897e-7, '2095': 0.02683802062176},
// change: {'1': -1e-8, '2095': -0.00058888},
// average: {'1': 5.093750000000001e-7, '2095': 0.026281600000000002},
// circulatingSupply: 236600238,
// totalSupply: 336000000,
// maxSupply: 336000000,
