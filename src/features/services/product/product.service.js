import axios from 'axios'
import { config } from '../../../utils/config'
import { isNotEmpty } from '../../../utils/userUtils'

export const getProducts = (providerId = '', filters = {}) => {
  const { idKraj = '', pi = '', name = '', kodEAN = '' } = filters
  return axios.get(
    `${config.endpoints.product}`
    // `${config.endpoints.product}?idDostawca=${providerId}?idKraj=${idKraj}?pi=${pi}?name=${name}?kodEAN=${kodEAN}`
  )
}

export const addProduct = (product) => {
  return axios.put(config.endpoints.product, product)
}

export const getPendingProducts = () => {
  return axios.get(config.endpoints.temporaryProduct)
}

export const addPendingProduct = (provider) => {
  return axios.put(config.endpoints.temporaryProduct, provider)
}

export const approveProduct = (provider) => {
  return axios.put(config.endpoints.approveProduct, provider)
}

export const getProductsReadyToReview = () => {
  return axios.get(config.endpoints.readytoReview)
}
