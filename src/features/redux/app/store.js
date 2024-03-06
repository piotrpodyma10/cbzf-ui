import { configureStore } from '@reduxjs/toolkit'
import filtersSlice from '../filters/filtersSlice'
import themeSlice from '../theme/themeSlice'
import transactionsSlice from '../transactions/transactionsSlice'
import authSlice from '../auth/authSlice'

export const store = configureStore({
  reducer: {
    theme: themeSlice,
    transactions: transactionsSlice,
    filters: filtersSlice,
    auth: authSlice,
  },
})
