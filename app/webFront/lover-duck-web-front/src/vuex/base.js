export default {
  nullCheck (data) {
    for (var key in data) {
      if (data[key] === '' || data[key] === null || data[key] === undefined) {
        return false
      }
    }
    return true
  },
  sessionExpired (error) {
    if (error.includes('401')) {
      sessionStorage.removeItem('accessToken')
      window.location.href = '/auth/signin'
      return 'sessionが切れています'
    } else {
      return error
    }
  }
}
