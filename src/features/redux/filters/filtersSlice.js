import { createSlice } from '@reduxjs/toolkit'

export const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    date: '',
    balanceType: '',
  },
  reducers: {
    updateDate: (state, action) => {
      state.date = action.payload
    },
    updateBalanceType: (state, action) => {
      state.balanceType = action.payload
    },
  },
})

export const { updateDate, updateBalanceType } = filtersSlice.actions
export const filters = (state) => state.filters

export default filtersSlice.reducer
