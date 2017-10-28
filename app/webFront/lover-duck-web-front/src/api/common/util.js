import axios from 'axios'
import * as url from './url'
import base from './apiBase'

export default {
  createMethod (data, endpoint) {
    let params = new URLSearchParams()
    params.append('session', sessionStorage.getItem('accessToken'))
    base.nullCheck(data)
    params.append('data', base.createJson(data))
    return axios({
      method: 'post',
      url: url.BASE_URL + endpoint,
      data: params
    })
  }
}
