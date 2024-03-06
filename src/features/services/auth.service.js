import axios from 'axios'
import { EXPERT, PROVIDER, SUPER_EXPERT, allRoles, isNotEmpty } from '../../utils/userUtils'
import { config } from '../../utils/config'

// import config from '../config'

const login = async (email, password) => {
  try {
    const userResponse = await axios.post(config.endpoints.log, {
      email: email,
      password: password,
    })

    const response = isNotEmpty(userResponse.data) ? userResponse.data : {}

    // const user = {
    //   email: email,
    //   roles: allRoles,
    //   firstName: 'Jan',
    //   lastName: 'Kowalski',
    // }

    if (response) {
      const user = response
      user.roles = [user.role]
      localStorage.setItem('user', JSON.stringify(user))
      return user
    }

    return {}
  } catch (e) {
    return {}
  }

  // return {}

  // const user = {
  //   email: email,
  //   roles: allRoles,
  //   firstName: 'Jan',
  //   lastName: 'Kowalski',
  // }

  // if (email === 'e@e.com') {
  //   user.roles = [EXPERT]
  // }

  // if (email === 'se@se.com') {
  //   user.roles = [SUPER_EXPERT]
  // }

  // if (email === 'pr@pr.com') {
  //   user.roles = [PROVIDER]
  // }

  // if (isNotEmpty(user)) {
  //   localStorage.setItem('user', JSON.stringify(user))
  // }

  // return user
}

const logout = () => {
  localStorage.removeItem('user')
  return {}
}

export const editUser = async (userId, userData) => {
  try {
    const response = await axios.patch(`${config.endpoints.edit_user}/${userId}`, userData)
    return response
  } catch (e) {
    console.log('Error', e)
  }
}

export const addUser = async (user) => {
  try {
    const response = await axios.post(config.endpoints.add_user, user)
    return response
  } catch (e) {
    console.log('Error', e)
  }
}

export const deleteUser = async (userId) => {
  try {
    const response = await axios.delete(`${config.endpoints.delete_user}?id=${userId}`)
    return response
  } catch (e) {
    console.log('Error', e)
  }
}

const authService = {
  login,
  logout,
}

export default authService
