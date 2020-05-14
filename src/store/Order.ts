import map from 'lodash/fp/map'
import flatMap from 'lodash/fp/flatMap'
import concat from 'lodash/fp/concat'
import fromPairs from 'lodash/fp/fromPairs'
import flow from 'lodash/fp/flow'
import groupBy from 'lodash/groupBy'

const types = flow(
  flatMap(x => [x + '_REQUEST', x + '_SUCCESS', x + '_FAILURE']),
  concat([
    'RESET',
    'ADD_ITEM'
  ]),
  map(x => [x, x]),
  fromPairs
)([])

function initialState () {
  return {
    order: []
  }
}

const state = initialState()

const getters = {
  summarizedOrder (state) {
    return groupBy(state.order, 'id')
  }
}

const mutations = {
  [types.RESET] (state) {
    const s = initialState()
    Object.keys(s).forEach(key => {
      state[key] = s[key]
    })
  },

  [types.ADD_ITEM] (store, item) {
    store.order = [item, ...store.order]
  }
}

const actions = {
  async addItem ({ commit }, item) {
    commit(types.ADD_ITEM, item)
  }
}

export default {
  types,
  state,
  getters,
  mutations,
  actions
}
