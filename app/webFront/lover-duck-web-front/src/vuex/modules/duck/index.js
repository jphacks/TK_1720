import manager from '@/api/duck'
import base from '@/vuex/base'
import Vue from 'vue'

const state = {
  duckCreateRequest: {
    uniqueId: null,
    postalCode: null,
    address: null,
    password: null,
    name: null
  },
  duckCreateResponse: {},
  duckRegisterRequest: {
    uniqueId: null,
    password: null
  },
  duckRegisterResponse: {},
  duckListRequest: {
  },
  duckListResponse: {},
  duckDetailRequest: {
    duckId: null
  },
  duckDetailResponse: {},
  duckDailylogRequest: {
    duckId: null,
    perPage: null,
    page: null
  },
  duckDailylogResponse: {},
  duckAlertlogRequest: {
    duckId: null,
    perPage: null,
    page: null
  },
  duckAlertlogResponse: {},
  duckAlertlogUpdateRequest: {
    alertId: null,
    status: null
  },
  duckAlertlogUpdateResponse: {},
  duckReactionlogRequest: {
    alertId: null
  },
  duckReactionlogResponse: {}
}

const actions = {
  updateDuckCreateUniqueId (
    { commit, state },
      params
    ) {
    commit('UPDATE_DUCK_CREATE_UNIQUE_ID', params)
  },
  updateDuckCreatePostalCode (
    { commit, state },
      params
    ) {
    commit('UPDATE_DUCK_CREATE_POSTAL_CODE', params)
  },
  updateDuckCreateAddress (
    { commit, state },
      params
    ) {
    commit('UPDATE_DUCK_CREATE_ADDRESS', params)
  },
  updateDuckCreatePassword (
    { commit, state },
      params
    ) {
    commit('UPDATE_DUCK_CREATE_PASSWORD', params)
  },
  updateDuckCreateName (
    { commit, state },
      params
    ) {
    commit('UPDATE_DUCK_CREATE_NAME', params)
  },
  duckCreateResponse (
  {commit, state}
  ) {
    commit('START_CONNECTION', null, { root: true })
    if (base.nullCheck(state.duckCreateRequest)) {
      manager.duckCreate(
        state.duckCreateRequest,
        response => {
          if (response.message === 'ok' || response.message === undefined || !response.message.match(/error/)) {
            if (response.accessToken) {
              sessionStorage.setItem('accessToken', response.accessToken)
            }
            commit('GOT_DUCK_CREATE_RESPONSE', response)
            commit('END_CONNECTION', null, { root: true })
          } else {
            commit('GOT_ERROR', response.message, { root: true })
          }
        },
        error => {
          error = base.sessionExpired(error.toString())
          commit('GOT_ERROR', '通信エラーです' + '\n' + error, { root: true })
        }
      )
    } else {
      commit('GOT_ERROR', 'パラメーターが空です', { root: true })
    }
  },
  updateDuckRegisterUniqueId (
    { commit, state },
      params
    ) {
    commit('UPDATE_DUCK_REGISTER_UNIQUE_ID', params)
  },
  updateDuckRegisterPassword (
    { commit, state },
      params
    ) {
    commit('UPDATE_DUCK_REGISTER_PASSWORD', params)
  },
  duckRegisterResponse (
  {commit, state}
  ) {
    commit('START_CONNECTION', null, { root: true })
    if (base.nullCheck(state.duckRegisterRequest)) {
      manager.duckRegister(
        state.duckRegisterRequest,
        response => {
          if (response.message === 'ok' || response.message === undefined || !response.message.match(/error/)) {
            if (response.accessToken) {
              sessionStorage.setItem('accessToken', response.accessToken)
            }
            commit('GOT_DUCK_REGISTER_RESPONSE', response)
            commit('END_CONNECTION', null, { root: true })
          } else {
            commit('GOT_ERROR', response.message, { root: true })
          }
        },
        error => {
          error = base.sessionExpired(error.toString())
          commit('GOT_ERROR', '通信エラーです' + '\n' + error, { root: true })
        }
      )
    } else {
      commit('GOT_ERROR', 'パラメーターが空です', { root: true })
    }
  },
  duckListResponse (
  {commit, state}
  ) {
    commit('START_CONNECTION', null, { root: true })
    if (base.nullCheck(state.duckListRequest)) {
      manager.duckList(
        state.duckListRequest,
        response => {
          if (response.message === 'ok' || response.message === undefined || !response.message.match(/error/)) {
            if (response.accessToken) {
              sessionStorage.setItem('accessToken', response.accessToken)
            }
            commit('GOT_DUCK_LIST_RESPONSE', response)
            commit('END_CONNECTION', null, { root: true })
          } else {
            commit('GOT_ERROR', response.message, { root: true })
          }
        },
        error => {
          error = base.sessionExpired(error.toString())
          commit('GOT_ERROR', '通信エラーです' + '\n' + error, { root: true })
        }
      )
    } else {
      commit('GOT_ERROR', 'パラメーターが空です', { root: true })
    }
  },
  updateDuckDetailDuckId (
    { commit, state },
      params
    ) {
    commit('UPDATE_DUCK_DETAIL_DUCK_ID', params)
  },
  duckDetailResponse (
  {commit, state}
  ) {
    commit('START_CONNECTION', null, { root: true })
    if (base.nullCheck(state.duckDetailRequest)) {
      manager.duckDetail(
        state.duckDetailRequest,
        response => {
          if (response.message === 'ok' || response.message === undefined || !response.message.match(/error/)) {
            if (response.accessToken) {
              sessionStorage.setItem('accessToken', response.accessToken)
            }
            commit('GOT_DUCK_DETAIL_RESPONSE', response)
            commit('END_CONNECTION', null, { root: true })
          } else {
            commit('GOT_ERROR', response.message, { root: true })
          }
        },
        error => {
          error = base.sessionExpired(error.toString())
          commit('GOT_ERROR', '通信エラーです' + '\n' + error, { root: true })
        }
      )
    } else {
      commit('GOT_ERROR', 'パラメーターが空です', { root: true })
    }
  },
  updateDuckDailylogDuckId (
    { commit, state },
      params
    ) {
    commit('UPDATE_DUCK_DAILYLOG_DUCK_ID', params)
  },
  updateDuckDailylogPerPage (
    { commit, state },
      params
    ) {
    commit('UPDATE_DUCK_DAILYLOG_PER_PAGE', params)
  },
  updateDuckDailylogPage (
    { commit, state },
      params
    ) {
    commit('UPDATE_DUCK_DAILYLOG_PAGE', params)
  },
  duckDailylogResponse (
  {commit, state}
  ) {
    commit('START_CONNECTION', null, { root: true })
    if (base.nullCheck(state.duckDailylogRequest)) {
      manager.duckDailylog(
        state.duckDailylogRequest,
        response => {
          if (response.message === 'ok' || response.message === undefined || !response.message.match(/error/)) {
            if (response.accessToken) {
              sessionStorage.setItem('accessToken', response.accessToken)
            }
            commit('GOT_DUCK_DAILYLOG_RESPONSE', response)
            commit('END_CONNECTION', null, { root: true })
          } else {
            commit('GOT_ERROR', response.message, { root: true })
          }
        },
        error => {
          error = base.sessionExpired(error.toString())
          commit('GOT_ERROR', '通信エラーです' + '\n' + error, { root: true })
        }
      )
    } else {
      commit('GOT_ERROR', 'パラメーターが空です', { root: true })
    }
  },
  updateDuckAlertlogDuckId (
    { commit, state },
      params
    ) {
    commit('UPDATE_DUCK_ALERTLOG_DUCK_ID', params)
  },
  updateDuckAlertlogPerPage (
    { commit, state },
      params
    ) {
    commit('UPDATE_DUCK_ALERTLOG_PER_PAGE', params)
  },
  updateDuckAlertlogPage (
    { commit, state },
      params
    ) {
    commit('UPDATE_DUCK_ALERTLOG_PAGE', params)
  },
  duckAlertlogResponse (
  {commit, state}
  ) {
    commit('START_CONNECTION', null, { root: true })
    if (base.nullCheck(state.duckAlertlogRequest)) {
      manager.duckAlertlog(
        state.duckAlertlogRequest,
        response => {
          if (response.message === 'ok' || response.message === undefined || !response.message.match(/error/)) {
            if (response.accessToken) {
              sessionStorage.setItem('accessToken', response.accessToken)
            }
            commit('GOT_DUCK_ALERTLOG_RESPONSE', response)
            commit('END_CONNECTION', null, { root: true })
          } else {
            commit('GOT_ERROR', response.message, { root: true })
          }
        },
        error => {
          error = base.sessionExpired(error.toString())
          commit('GOT_ERROR', '通信エラーです' + '\n' + error, { root: true })
        }
      )
    } else {
      commit('GOT_ERROR', 'パラメーターが空です', { root: true })
    }
  },
  updateDuckAlertlogUpdateAlertId (
    { commit, state },
      params
    ) {
    commit('UPDATE_DUCK_ALERTLOG_UPDATE_ALERT_ID', params)
  },
  updateDuckAlertlogUpdateStatus (
    { commit, state },
      params
    ) {
    commit('UPDATE_DUCK_ALERTLOG_UPDATE_STATUS', params)
  },
  duckAlertlogUpdateResponse (
  {commit, state}
  ) {
    commit('START_CONNECTION', null, { root: true })
    if (base.nullCheck(state.duckAlertlogUpdateRequest)) {
      manager.duckAlertlogUpdate(
        state.duckAlertlogUpdateRequest,
        response => {
          if (response.message === 'ok' || response.message === undefined || !response.message.match(/error/)) {
            if (response.accessToken) {
              sessionStorage.setItem('accessToken', response.accessToken)
            }
            commit('GOT_DUCK_ALERTLOG_UPDATE_RESPONSE', response)
            commit('END_CONNECTION', null, { root: true })
          } else {
            commit('GOT_ERROR', response.message, { root: true })
          }
        },
        error => {
          error = base.sessionExpired(error.toString())
          commit('GOT_ERROR', '通信エラーです' + '\n' + error, { root: true })
        }
      )
    } else {
      commit('GOT_ERROR', 'パラメーターが空です', { root: true })
    }
  },
  updateDuckReactionlogAlertId (
    { commit, state },
      params
    ) {
    commit('UPDATE_DUCK_REACTIONLOG_ALERT_ID', params)
  },
  duckReactionlogResponse (
  {commit, state}
  ) {
    commit('START_CONNECTION', null, { root: true })
    if (base.nullCheck(state.duckReactionlogRequest)) {
      manager.duckReactionlog(
        state.duckReactionlogRequest,
        response => {
          if (response.message === 'ok' || response.message === undefined || !response.message.match(/error/)) {
            if (response.accessToken) {
              sessionStorage.setItem('accessToken', response.accessToken)
            }
            commit('GOT_DUCK_REACTIONLOG_RESPONSE', response)
            commit('END_CONNECTION', null, { root: true })
          } else {
            commit('GOT_ERROR', response.message, { root: true })
          }
        },
        error => {
          error = base.sessionExpired(error.toString())
          commit('GOT_ERROR', '通信エラーです' + '\n' + error, { root: true })
        }
      )
    } else {
      commit('GOT_ERROR', 'パラメーターが空です', { root: true })
    }
  }
}

const getters = {
  getDuckCreateResponse: state => {
    return state.duckCreateResponse
  },
  getDuckRegisterResponse: state => {
    return state.duckRegisterResponse
  },
  getDuckListResponse: state => {
    return state.duckListResponse
  },
  getDuckDetailResponse: state => {
    return state.duckDetailResponse
  },
  getDuckDailylogResponse: state => {
    return state.duckDailylogResponse
  },
  getDuckAlertlogResponse: state => {
    return state.duckAlertlogResponse
  },
  getDuckAlertlogUpdateResponse: state => {
    return state.duckAlertlogUpdateResponse
  },
  getDuckReactionlogResponse: state => {
    return state.duckReactionlogResponse
  }
}

const mutations = {
  UPDATE_DUCK_CREATE_UNIQUE_ID (state, data) {
    Vue.set(state.duckCreateRequest, 'uniqueId', data)
  },
  UPDATE_DUCK_CREATE_POSTAL_CODE (state, data) {
    Vue.set(state.duckCreateRequest, 'postalCode', data)
  },
  UPDATE_DUCK_CREATE_ADDRESS (state, data) {
    Vue.set(state.duckCreateRequest, 'address', data)
  },
  UPDATE_DUCK_CREATE_PASSWORD (state, data) {
    Vue.set(state.duckCreateRequest, 'password', data)
  },
  UPDATE_DUCK_CREATE_NAME (state, data) {
    Vue.set(state.duckCreateRequest, 'name', data)
  },
  GOT_DUCK_CREATE_RESPONSE (state, data) {
    state.duckCreateResponse = data
  },
  UPDATE_DUCK_REGISTER_UNIQUE_ID (state, data) {
    Vue.set(state.duckRegisterRequest, 'uniqueId', data)
  },
  UPDATE_DUCK_REGISTER_PASSWORD (state, data) {
    Vue.set(state.duckRegisterRequest, 'password', data)
  },
  GOT_DUCK_REGISTER_RESPONSE (state, data) {
    state.duckRegisterResponse = data
  },
  GOT_DUCK_LIST_RESPONSE (state, data) {
    state.duckListResponse = data
  },
  UPDATE_DUCK_DETAIL_DUCK_ID (state, data) {
    Vue.set(state.duckDetailRequest, 'duckId', data)
  },
  GOT_DUCK_DETAIL_RESPONSE (state, data) {
    state.duckDetailResponse = data
  },
  UPDATE_DUCK_DAILYLOG_DUCK_ID (state, data) {
    Vue.set(state.duckDailylogRequest, 'duckId', data)
  },
  UPDATE_DUCK_DAILYLOG_PER_PAGE (state, data) {
    Vue.set(state.duckDailylogRequest, 'perPage', data)
  },
  UPDATE_DUCK_DAILYLOG_PAGE (state, data) {
    Vue.set(state.duckDailylogRequest, 'page', data)
  },
  GOT_DUCK_DAILYLOG_RESPONSE (state, data) {
    state.duckDailylogResponse = data
  },
  UPDATE_DUCK_ALERTLOG_DUCK_ID (state, data) {
    Vue.set(state.duckAlertlogRequest, 'duckId', data)
  },
  UPDATE_DUCK_ALERTLOG_PER_PAGE (state, data) {
    Vue.set(state.duckAlertlogRequest, 'perPage', data)
  },
  UPDATE_DUCK_ALERTLOG_PAGE (state, data) {
    Vue.set(state.duckAlertlogRequest, 'page', data)
  },
  GOT_DUCK_ALERTLOG_RESPONSE (state, data) {
    state.duckAlertlogResponse = data
  },
  UPDATE_DUCK_ALERTLOG_UPDATE_ALERT_ID (state, data) {
    Vue.set(state.duckAlertlogUpdateRequest, 'alertId', data)
  },
  UPDATE_DUCK_ALERTLOG_UPDATE_STATUS (state, data) {
    Vue.set(state.duckAlertlogUpdateRequest, 'status', data)
  },
  GOT_DUCK_ALERTLOG_UPDATE_RESPONSE (state, data) {
    state.duckAlertlogUpdateResponse = data
  },
  UPDATE_DUCK_REACTIONLOG_ALERT_ID (state, data) {
    Vue.set(state.duckReactionlogRequest, 'alertId', data)
  },
  GOT_DUCK_REACTIONLOG_RESPONSE (state, data) {
    state.duckReactionlogResponse = data
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
