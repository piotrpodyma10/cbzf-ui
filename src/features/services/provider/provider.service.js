import axios from 'axios'
import { config } from '../../../utils/config'

// http://localhost:8080/cbzf/producent

export const getProviders = () => {
  return axios.get(config.endpoints.provider)
}

export const getPendingProviders = (providerId) => {
  let url = config.endpoints.temporaryProvider
  if (providerId) {
    url = `${url}?idDostawca=${providerId}`
  }

  return axios.get(url)
}

export const addProvider = (provider) => {
  return axios.put(config.endpoints.provider, provider)
}

export const addPendingProvider = (provider) => {
  return axios.put(config.endpoints.temporaryProvider, provider)
}

export const getNotApprovedProviders = () => {
  return axios.get(config.endpoints.notApproved)
}
