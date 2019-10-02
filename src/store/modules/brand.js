import brandApi from '../../api/brandApi'

// initial state
const state = {
    brandItems: [],
}

// getters
const getters = {
    brandItems: (state, getters, rootState) => {
        return state.brandItems
    },
}

// actions
const actions = {
    loadBrandItems ({ commit, state }, brands) {
        brandApi.getBrandItems(
            (brandItems) => {
                commit('setBrandItems', brandItems)
            },
            (error) => {
                console.log(error)
                commit('setBrandItems', [])
            }
        )
    },
}

// mutations
const mutations = {
    setBrandItems (state, brandItems) {
        state.brandItems = brandItems
    },

}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}
