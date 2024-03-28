import axios from 'axios'
import { config } from '../../../utils/config'

export const getRateOfProduct = (productId) => {
  return axios.get(`${config.endpoints.rate}?id=${productId}`, productId)
}

export const rateProduct = (rates) => {
  return axios.put(config.endpoints.rate, rates)
}
