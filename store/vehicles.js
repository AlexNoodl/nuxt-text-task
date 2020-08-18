export const state = () => ({
  vehicles: []
})

export const mutations = {
  setVehicles(state, vehicles) {
    state.vehicles = vehicles
  }
}

export const actions = {
  async fetch({commit}) {
      const vehicles = await this.$axios
        .$get( vehicle(), {timeout: delay})
        commit('setVehicles', vehicles)
    }
}

export const getters = {
  vehicles: s => s.vehicles
}

const vehicle = () => {
  if (Math.random() <= 0.35) {
    return ''
  }
  return '/vehicles.json'
}

const delay = +Math.random() * 1000;


