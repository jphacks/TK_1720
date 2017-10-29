import axios from 'axios'
import * as url from './url'
import base from './apiBase'
import ToSnake from 'snake-case'

export default {
  createMethod (data, endpoint) {
    let params = new URLSearchParams()
    params.append('access_token', sessionStorage.getItem('accessToken'))
    base.nullCheck(data)
    for (var key in data) {
      params.append(ToSnake(key), data[key])
    }
    return axios({
      method: 'post',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      url: url.BASE_URL + endpoint,
      data: params
    })
  }
}
