import axios from 'axios'

export const state = () => ({
    authUser: null,
})

export const getters = {
    isLoggedIn: (state) => !!state.authUser,
}

export const mutations = {
    SET_USER(state, user) {
        state.authUser = user
    },
}

export const actions = {
    nuxtServerInit({ commit }, { req }) {
        if (req.session?.username) {
            commit('SET_USER', req.session)
        }
    },
    async logout({ commit }) {
        await axios.post('/logout')
        commit('SET_USER', null)
    },
}
