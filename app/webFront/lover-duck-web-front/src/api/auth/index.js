import util from '@/api/common/util'
import * as url from '@/api/common/url'
import base from '@/api/common/apiBase'

export default {
  authSignup (
    params,
    callback,
    callbackFailed
  ) {
    return util.createMethod(params, url.ENDPOINTS.authSignup)
    .then(response => {
      let responseData = base.createCamel(response.data)
      callback(responseData)
    })
    .catch(error => { callbackFailed(error) })
  },
  authSignin (
    params,
    callback,
    callbackFailed
  ) {
    return util.createMethod(params, url.ENDPOINTS.authSignin)
    .then(response => {
      let responseData = base.createCamel(response.data)
      callback(responseData)
    })
    .catch(error => { callbackFailed(error) })
  },
  authProfile (
    params,
    callback,
    callbackFailed
  ) {
    return util.createMethod(params, url.ENDPOINTS.authProfile)
    .then(response => {
      let responseData = base.createCamel(response.data)
      callback(responseData)
    })
    .catch(error => { callbackFailed(error) })
  },
  authPasswordEdit (
    params,
    callback,
    callbackFailed
  ) {
    return util.createMethod(params, url.ENDPOINTS.authPasswordEdit)
    .then(response => {
      let responseData = base.createCamel(response.data)
      callback(responseData)
    })
    .catch(error => { callbackFailed(error) })
  },
  authProfileEdit (
    params,
    callback,
    callbackFailed
  ) {
    return util.createMethod(params, url.ENDPOINTS.authProfileEdit)
    .then(response => {
      let responseData = base.createCamel(response.data)
      callback(responseData)
    })
    .catch(error => { callbackFailed(error) })
  }
}
