import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authService from '../../services/auth.service'
import AxiosUtils from '../../../utils/axiosUtils'
import { ADMIN, PROVIDER, hasRole, isUser, isNotEmpty, user } from '../../../utils/userUtils'

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: isUser ? user : {},
    error: '',
    isProvider: hasRole(user, 'isProvider'),
    isExpert: hasRole(user, 'isExpert'),
    isSuperExpert: hasRole(user, 'isSuperExpert'),
    isAdmin: hasRole(user, 'isAdmin'),
    isLoading: true,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        const user = action.payload.user
        const isError = action.payload.error

        if (isError) {
          state.error = isError
          return
        }

        if (user) {
          state.user = user
          state.isProvider = hasRole(user, 'isProvider')
          state.isAdmin = hasRole(user, 'isAdmin')
          state.isExpert = hasRole(user, 'isExpert')
          state.isSuperExpert = hasRole(user, 'isSuperExpert')
        }
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = {}
        state.isUserLoggedIn = false
      })
  },
})

export const login = createAsyncThunk('auth/login', async ({ email, password }) => {
  try {
    const user = await authService.login(email, password)

    if (isNotEmpty(user)) {
      return {
        user: user,
      }
    }

    return {
      error: 'Wrong email or password',
      user: '',
    }
  } catch (error) {
    return AxiosUtils.handleError(error)
  }
})

export const logout = createAsyncThunk('auth/logout', async () => {
  try {
    await authService.logout()
    return {}
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
    return message
  }
})

export const auth = (state) => state.auth
export default authSlice.reducer
