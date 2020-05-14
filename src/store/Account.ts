import map from 'lodash/fp/map'
import flatMap from 'lodash/fp/flatMap'
import concat from 'lodash/fp/concat'
import fromPairs from 'lodash/fp/fromPairs'
import flow from 'lodash/fp/flow'

import API from '@/utils/api'

const types = flow(
  flatMap(x => [x + '_REQUEST', x + '_SUCCESS', x + '_FAILURE']),
  concat([
    'RESET',
    'SET_TOKEN'
  ]),
  map(x => [x, x]),
  fromPairs
)([
  'SIGNUP',
  'SIGNIN'
])

function initialState () {
  return {
    token: ''
  }
}

const state = initialState()

const getters = {}

const mutations = {
  [types.RESET] (state) {
    const s = initialState()
    Object.keys(s).forEach(key => {
      state[key] = s[key]
    })
  },

  [types.SET_TOKEN] (state, token) {
    if (token) state.token = token
  },

  [types.SIGNUP_REQUEST] () {},
  [types.SIGNUP_SUCCESS] (state, { key }) {
    state.token = key
  },
  [types.SIGNUP_FAILURE] () {},

  [types.SIGNIN_REQUEST] () {},
  [types.SIGNIN_SUCCESS] (state, { key }) {
    state.token = key
  },
  [types.SIGNIN_FAILURE] () {}
}

const actions = {
  async loadToken ({ commit }) {
    const token = localStorage.getItem('token')
    await API.setToken(token)
    commit(types.SET_TOKEN, token)
  },
  async signUp ({ commit }, { username, password, isCook }) {
    commit(types.SIGNUP_REQUEST)
    try {
      const data = await API.signUp({
        username,
        password,
        isCook
      })
      localStorage.setItem('token', data.key)
      commit(types.SIGNUP_SUCCESS, data)
    } catch (error) {
      commit(types.SIGNUP_FAILURE)
      throw error
    }
  },
  async signIn ({ commit }, { username, password }) {
    commit(types.SIGNIN_REQUEST)
    try {
      const data = await API.signIn({
        username,
        password
      })
      localStorage.setItem('token', data.key)
      commit(types.SIGNIN_SUCCESS, data)
    } catch (error) {
      commit(types.SIGNIN_FAILURE)
      throw error
    }
  }
}

export default {
  types,
  state,
  getters,
  mutations,
  actions
}
