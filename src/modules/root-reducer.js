// @flow
import { buildReducer } from 'redux-keto'

import type { CurrencyState } from './currency/currency-reducer.js'
import currency from './currency/currency-reducer.js'
import exchangeCache from './exchange/reducer.js'
import type { LoginState } from './login/login-reducer.js'
import login from './login/login-reducer.js'
import storageWallets from './storage/reducer.js'
import type { StorageWalletState } from './storage/reducer.js'

export interface RootState {
  currency: CurrencyState;
  login: LoginState;
  storageWallets: { [walletId: string]: StorageWalletState };
}

export default buildReducer({
  currency,
  exchangeCache,
  login,
  storageWallets
})
