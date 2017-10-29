import util from '@/api/common/util'
import * as url from '@/api/common/url'
import base from '@/api/common/apiBase'

export default {
  duckCreate (
    params,
    callback,
    callbackFailed
  ) {
    return util.createMethod(params, url.ENDPOINTS.duckCreate)
    .then(response => {
      let responseData = base.createCamel(response.data)
      callback(responseData)
    })
    .catch(error => { callbackFailed(error) })
  },
  duckRegister (
    params,
    callback,
    callbackFailed
  ) {
    return util.createMethod(params, url.ENDPOINTS.duckRegister)
    .then(response => {
      let responseData = base.createCamel(response.data)
      callback(responseData)
    })
    .catch(error => { callbackFailed(error) })
  },
  duckList (
    params,
    callback,
    callbackFailed
  ) {
    return util.createMethod(params, url.ENDPOINTS.duckList)
    .then(response => {
      let responseData = base.createCamel(response.data)
      callback(responseData)
    })
    .catch(error => { callbackFailed(error) })
  },
  duckDetail (
    params,
    callback,
    callbackFailed
  ) {
    return util.createMethod(params, url.ENDPOINTS.duckDetail)
    .then(response => {
      let responseData = base.createCamel(response.data)
      callback(responseData)
    })
    .catch(error => { callbackFailed(error) })
  },
  duckDailylog (
    params,
    callback,
    callbackFailed
  ) {
    return util.createMethod(params, url.ENDPOINTS.duckDailylog)
    .then(response => {
      let responseData = base.createCamel(response.data)
      callback(responseData)
    })
    .catch(error => { callbackFailed(error) })
  },
  duckAlertlog (
    params,
    callback,
    callbackFailed
  ) {
    return util.createMethod(params, url.ENDPOINTS.duckAlertlog)
    .then(response => {
      let responseData = base.createCamel(response.data)
      callback(responseData)
    })
    .catch(error => { callbackFailed(error) })
  },
  duckAlertlogUpdate (
    params,
    callback,
    callbackFailed
  ) {
    return util.createMethod(params, url.ENDPOINTS.duckAlertlogUpdate)
    .then(response => {
      let responseData = base.createCamel(response.data)
      callback(responseData)
    })
    .catch(error => { callbackFailed(error) })
  },
  duckReactionlog (
    params,
    callback,
    callbackFailed
  ) {
    return util.createMethod(params, url.ENDPOINTS.duckReactionlog)
    .then(response => {
      let responseData = base.createCamel(response.data)
      callback(responseData)
    })
    .catch(error => { callbackFailed(error) })
  }
}
