import axios from 'axios'
import { config } from '../../../utils/config'
import { isNotEmpty } from '../../../utils/userUtils'

export const getProducts = (providerId = '', filters = {}) => {
  const { ingredients = '', nutritions = '', name = '', indeksT = '', productId = '' } = filters
  return axios.get(`${config.endpoints.product}`, {
    params: {
      idDostawca: providerId,
      nutritions: nutritions,
      idProdukt: productId,
      ingredients: ingredients,
      nazwaProdukt: name,
      indeksT: indeksT,
    },
  })
}

export const addProduct = (product) => {
  return axios.put(config.endpoints.product, product)
}

export const getPendingProducts = (providerId = '', isApproved = '') => {
  return axios.get(`${config.endpoints.temporaryProduct}?idDostawca=${providerId}&isApproved=${isApproved}`)
}

export const addPendingProduct = (product) => {
  return axios.put(config.endpoints.temporaryProduct, product)
}

export const uploadFileToPendingProduct = (product) => {
  return axios.put(config.endpoints.temporaryProduct, product, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
}

export const approveProduct = (provider) => {
  return axios.put(config.endpoints.approveProduct, provider)
}

export const getProductsReadyToReview = () => {
  return axios.get(config.endpoints.readytoReview)
}

export const getProductNutrition = (productId) => {
  return axios.get(`${config.endpoints.getNutrition}?idProdukt=${productId}`)
}

export const getPendingProductNutrition = (productId) => {
  return axios.get(`${config.endpoints.getPendingNutrition}?idProdukt=${productId}`)
}

export const getProductIngredients = (productId) => {
  return axios.get(`${config.endpoints.getIngredients}?idProdukt=${productId}`)
}

export const getProductIndexes = (productId) => {
  return axios.get(`${config.endpoints.getIndexes}?idProdukt=${productId}`)
}

export const getProductLabels = (productId) => {
  return axios.get(`${config.endpoints.getLabel}?idProdukt=${productId}`)
}

export const addPendingNutrition = (nutritions) => {
  return axios.put(`${config.endpoints.addPendingNutrition}`, nutritions)
}

export const addNutrition = (nutritions) => {
  return axios.put(`${config.endpoints.addNutrition}`, nutritions)
}

export const calculateIndexes = (nutritions) => {
  return axios.put(config.endpoints.calculateIndexes, nutritions)
}

export const getProductImage = (productId) => {
  return axios.get(`${config.endpoints.labelImage}?idProdukt=${productId}`, {
    responseType: 'arraybuffer',
  })
}

export const addPendingLabelImage = (formData) => {
  return axios.put(`${config.endpoints.storeTemporaryLabelImage}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
}

export const addLabelImage = (formData) => {
  return axios.put(`${config.endpoints.storeLabelImage}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
}
