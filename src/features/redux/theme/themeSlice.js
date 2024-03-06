import { createSlice } from '@reduxjs/toolkit'

const themeFromLocalStorage = window.localStorage.getItem('theme')

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    themeMode: themeFromLocalStorage ? themeFromLocalStorage : 'dark',
  },
  reducers: {
    selectTheme: (state, action) => {
      window.localStorage.setItem('theme', action.payload)
      state.themeMode = action.payload
    },
  },
})

export const { selectTheme } = themeSlice.actions
export const themeMode = (state) => state.theme.themeMode

export default themeSlice.reducer
