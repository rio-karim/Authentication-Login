const namespaced = true
const state = {
  navigationmenu: true,
  profilemenu: false,
  patientmenu: 'timeline-view',
  submenus: [],
  notifications: []
}
const getters = {
  getProfileMenu: () => state.profilemenu,
  getNavigationMenu: () => state.navigationmenu,
  getPatientMenu: () => state.patientmenu
}
const mutations = {
  setProfileMenu(state, action) {
    state.profilemenu = action === true
  },
  setPatientMenu(state, action) {
    state.patientmenu = action
  },
  setNavigationMenu(state, action) {
    state.navigationmenu = action === true
  },
  pushSubMenu(state, action) {
    state.submenus.push(action)
  },
  popSubMenu(state, action) {
    state.submenus.pop()
  },
  pushNotification(state, action) {
    state.notifications.push(action)
  },
  popNotification(state, action) {
    state.notifications.splice(
      state.notifications.findIndex(
        notification => notification.id === action.id
      ),
      1
    )
  }
}
const actions = {
  toggleProfileMenu({ commit, state }, action) {
    commit('setProfileMenu', action)
  },
  togglePatientMenu({ commit, state }, action) {
    commit('setPatientMenu', action)
  },
  toggleNavigationMenu({ commit, state }) {
    commit('setNavigationMenu', !state.navigationmenu)
  },
  toggleSubMenu({ commit, state }, menu) {
    if (menu.hover) {
      commit('pushSubMenu', menu.name)
    } else {
      commit('popSubMenu', menu.name)
    }
  },
  toggleNotification({ commit, state }, action) {
    if (action.active) {
      commit('pushNotification', action.notification)
    } else {
      commit('popNotification', action.notification)
    }
  }
}

export default {
  namespaced,
  actions,
  mutations,
  getters,
  state
}
