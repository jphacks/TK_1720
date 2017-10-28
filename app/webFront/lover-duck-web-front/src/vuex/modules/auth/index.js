import manager from '@/api/auth'
import base from '@/vuex/base'
import Vue from 'vue'

const state = {
  authSignupRequest: {
    mail: null,
    password: null,
    name: null,
    tel: null
  },
  authSignupResponse: {},
  authSigninRequest: {
    mail: null,
    password: null
  },
  authSigninResponse: {},
  authProfileRequest: {
  },
  authProfileResponse: {},
  authPasswordEditRequest: {
    oldPassword: null,
    newPassword: null
  },
  authPasswordEditResponse: {},
  authProfileEditRequest: {
    name: null,
    tel: null
  },
  authProfileEditResponse: {}
}

const actions = {
  updateAuthSignupMail (
    { commit, state },
      params
    ) {
    commit('UPDATE_AUTH_SIGNUP_MAIL', params)
  },
  updateAuthSignupPassword (
    { commit, state },
      params
    ) {
    commit('UPDATE_AUTH_SIGNUP_PASSWORD', params)
  },
  updateAuthSignupName (
    { commit, state },
      params
    ) {
    commit('UPDATE_AUTH_SIGNUP_NAME', params)
  },
  updateAuthSignupTel (
    { commit, state },
      params
    ) {
    commit('UPDATE_AUTH_SIGNUP_TEL', params)
  },
  authSignupResponse (
  {commit, state}
  ) {
    commit('START_CONNECTION', null, { root: true })
    if (base.nullCheck(state.authSignupRequest)) {
      manager.authSignup(
        state.authSignupRequest,
        response => {
          if (response.message === 'ok' || response.message === undefined || !response.message.match(/error/)) {
            if (response.accessToken) {
              sessionStorage.setItem('accessToken', response.accessToken)
            }
            commit('GOT_AUTH_SIGNUP_RESPONSE', response)
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
  updateAuthSigninMail (
    { commit, state },
      params
    ) {
    commit('UPDATE_AUTH_SIGNIN_MAIL', params)
  },
  updateAuthSigninPassword (
    { commit, state },
      params
    ) {
    commit('UPDATE_AUTH_SIGNIN_PASSWORD', params)
  },
  authSigninResponse (
  {commit, state}
  ) {
    commit('START_CONNECTION', null, { root: true })
    if (base.nullCheck(state.authSigninRequest)) {
      manager.authSignin(
        state.authSigninRequest,
        response => {
          if (response.message === 'ok' || response.message === undefined || !response.message.match(/error/)) {
            if (response.accessToken) {
              sessionStorage.setItem('accessToken', response.accessToken)
            }
            commit('GOT_AUTH_SIGNIN_RESPONSE', response)
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
  authProfileResponse (
  {commit, state}
  ) {
    commit('START_CONNECTION', null, { root: true })
    if (base.nullCheck(state.authProfileRequest)) {
      manager.authProfile(
        state.authProfileRequest,
        response => {
          if (response.message === 'ok' || response.message === undefined || !response.message.match(/error/)) {
            if (response.accessToken) {
              sessionStorage.setItem('accessToken', response.accessToken)
            }
            commit('GOT_AUTH_PROFILE_RESPONSE', response)
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
  updateAuthPasswordEditOldPassword (
    { commit, state },
      params
    ) {
    commit('UPDATE_AUTH_PASSWORD_EDIT_OLD_PASSWORD', params)
  },
  updateAuthPasswordEditNewPassword (
    { commit, state },
      params
    ) {
    commit('UPDATE_AUTH_PASSWORD_EDIT_NEW_PASSWORD', params)
  },
  authPasswordEditResponse (
  {commit, state}
  ) {
    commit('START_CONNECTION', null, { root: true })
    if (base.nullCheck(state.authPasswordEditRequest)) {
      manager.authPasswordEdit(
        state.authPasswordEditRequest,
        response => {
          if (response.message === 'ok' || response.message === undefined || !response.message.match(/error/)) {
            if (response.accessToken) {
              sessionStorage.setItem('accessToken', response.accessToken)
            }
            commit('GOT_AUTH_PASSWORD_EDIT_RESPONSE', response)
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
  updateAuthProfileEditName (
    { commit, state },
      params
    ) {
    commit('UPDATE_AUTH_PROFILE_EDIT_NAME', params)
  },
  updateAuthProfileEditTel (
    { commit, state },
      params
    ) {
    commit('UPDATE_AUTH_PROFILE_EDIT_TEL', params)
  },
  authProfileEditResponse (
  {commit, state}
  ) {
    commit('START_CONNECTION', null, { root: true })
    if (base.nullCheck(state.authProfileEditRequest)) {
      manager.authProfileEdit(
        state.authProfileEditRequest,
        response => {
          if (response.message === 'ok' || response.message === undefined || !response.message.match(/error/)) {
            if (response.accessToken) {
              sessionStorage.setItem('accessToken', response.accessToken)
            }
            commit('GOT_AUTH_PROFILE_EDIT_RESPONSE', response)
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
  getAuthSignupResponse: state => {
    return state.authSignupResponse
  },
  getAuthSigninResponse: state => {
    return state.authSigninResponse
  },
  getAuthProfileResponse: state => {
    return state.authProfileResponse
  },
  getAuthPasswordEditResponse: state => {
    return state.authPasswordEditResponse
  },
  getAuthProfileEditResponse: state => {
    return state.authProfileEditResponse
  }
}

const mutations = {
  UPDATE_AUTH_SIGNUP_MAIL (state, data) {
    Vue.set(state.authSignupRequest, 'mail', data)
  },
  UPDATE_AUTH_SIGNUP_PASSWORD (state, data) {
    Vue.set(state.authSignupRequest, 'password', data)
  },
  UPDATE_AUTH_SIGNUP_NAME (state, data) {
    Vue.set(state.authSignupRequest, 'name', data)
  },
  UPDATE_AUTH_SIGNUP_TEL (state, data) {
    Vue.set(state.authSignupRequest, 'tel', data)
  },
  GOT_AUTH_SIGNUP_RESPONSE (state, data) {
    state.authSignupResponse = data
  },
  UPDATE_AUTH_SIGNIN_MAIL (state, data) {
    Vue.set(state.authSigninRequest, 'mail', data)
  },
  UPDATE_AUTH_SIGNIN_PASSWORD (state, data) {
    Vue.set(state.authSigninRequest, 'password', data)
  },
  GOT_AUTH_SIGNIN_RESPONSE (state, data) {
    state.authSigninResponse = data
  },
  GOT_AUTH_PROFILE_RESPONSE (state, data) {
    state.authProfileResponse = data
  },
  UPDATE_AUTH_PASSWORD_EDIT_OLD_PASSWORD (state, data) {
    Vue.set(state.authPasswordEditRequest, 'oldPassword', data)
  },
  UPDATE_AUTH_PASSWORD_EDIT_NEW_PASSWORD (state, data) {
    Vue.set(state.authPasswordEditRequest, 'newPassword', data)
  },
  GOT_AUTH_PASSWORD_EDIT_RESPONSE (state, data) {
    state.authPasswordEditResponse = data
  },
  UPDATE_AUTH_PROFILE_EDIT_NAME (state, data) {
    Vue.set(state.authProfileEditRequest, 'name', data)
  },
  UPDATE_AUTH_PROFILE_EDIT_TEL (state, data) {
    Vue.set(state.authProfileEditRequest, 'tel', data)
  },
  GOT_AUTH_PROFILE_EDIT_RESPONSE (state, data) {
    state.authProfileEditResponse = data
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
