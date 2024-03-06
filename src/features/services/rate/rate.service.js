import axios from 'axios'
import { config } from '../../../utils/config'

export const getRateOfProduct = () => {
  return axioss.get(config.endpoints.rate)
}

export const rateProduct = (rates) => {
  return axios.put(config.endpoints.rate, rates)
}
