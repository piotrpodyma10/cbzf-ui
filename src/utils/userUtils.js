export const isUser = localStorage.getItem('user') ? true : false
export const user = JSON.parse(localStorage.getItem('user'))
export const ADMIN = 'Administrator'
export const PROVIDER = 'Dostawca'
export const EXPERT = 'Ekspert'
export const SUPER_EXPERT = 'Super Ekspert'
export const allRoles = [ADMIN, PROVIDER, EXPERT, SUPER_EXPERT]
export const hasAccess = (access, user) => {
  if (access === 'ALL') {
    return true
  }
  return Array.isArray(access) && access.some((role) => user?.roles?.includes(role))
}

export const roles = [
  { label: ADMIN, value: ADMIN },
  { label: PROVIDER, value: PROVIDER },
  { label: EXPERT, value: EXPERT },
  { label: SUPER_EXPERT, value: SUPER_EXPERT },
]

export const isProvider = user?.roles?.length === 1 && user?.roles?.includes(PROVIDER)
export const isAdmin = user?.roles?.length > 0 && user?.roles?.includes(ADMIN)

export const hasRole = (user, role) => {
  if (role === 'isProvider') {
    return user ? user?.roles?.length === 1 && user?.roles?.includes(PROVIDER) : false
  }
  if (role === 'isAdmin') {
    return user ? user?.roles?.length > 0 && user?.roles?.includes(ADMIN) : false
  }
  if (role === 'isExpert') {
    return user ? user?.roles?.length === 1 && user?.roles?.includes(EXPERT) : false
  }
  if (role === 'isSuperExpert') {
    return user ? user?.roles?.length === 1 && user?.roles?.includes(SUPER_EXPERT) : false
  }
}

export const isNotEmpty = (obj) => Object.entries(obj).length > 0
