const handleError = (error, thunkAPI) => {
  const message =
    (error.response && error.response.data && error.response.data.message) || error.message || error.toString()

  if (thunkAPI) {
    thunkAPI.rejectWithValue(message)
  }

  return message
}

const handleResponse = (response) => {
  return response.data
}

const axiosUtils = {
  handleError,
  handleResponse,
}

export default axiosUtils
