import { path, concat, contains } from 'ramda'
import { BUYSELL } from '../config'
import { kvStorePath } from '../../paths'

export const getMetadata = path([kvStorePath, BUYSELL])

export const getSfoxTrades = state => getMetadata(state).map(path(['value', 'sfox', 'trades']))

export const getSfoxUser = state => getMetadata(state).map(path(['value', 'sfox', 'user']))

export const getCoinifyTrades = state => getMetadata(state).map(path(['value', 'coinify', 'trades']))

export const getBuySellTxHashMatch = (state, hash) => getMetadata(state).map(data => {
  const allTrades = concat(getSfoxTrades(state).getOrElse([]), getCoinifyTrades(state).getOrElse([]))
  const tradeHashes = allTrades.map(t => t.tx_hash)
  const shouldHaveLabel = contains(hash, tradeHashes)
  return shouldHaveLabel && 'buy-sell'
}).getOrElse(false)
