export interface CurrencyDetail {
  id: string;
  name: string;
  symbol: string;
  icon: string;
}

interface MovingValue {
  value: number;
  change: number;
}

export interface CurrencyGlimpse {
  totalSupply: number;
  maxSupply: number;
  circulatingSupply: number;
  icon: string;
  average: MovingValue;
  close: MovingValue;
  high: MovingValue;
  low: MovingValue;
}

// SAMPLE
// {
//   average: {'1': 5.084615384615386e-7, '2095': 0.02626209},
//   change: {'1': -3e-8, '2095': -0.00174294},
//   circulatingSupply: 236600238,
//   close: {'1': 5.002091556033479e-7, '2095': 0.02568396482418},
//   high: {'1': 5.3e-7, '2095': 0.0274269},
//   low: {'1': 4.993666792254696e-7, '2095': 0.02567851081825},
//   maxSupply: 336000000,
//   open: {'1': 5.3e-7, '2095': 0.0274269},
//   totalSupply: 336000000,
// }
