import { createSlice } from '@reduxjs/toolkit'
import { combineRecords } from './transactionsUtils'

export const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: {
    history: [],
  },
  reducers: {
    getHistoryTransactions: (state) => {
      if (state.history.length < 1) {
        state.history = combineRecords()
      }
    },
  },
})

export const { getHistoryTransactions } = transactionsSlice.actions
export const transactions = (state) => state.transactions

export default transactionsSlice.reducer
