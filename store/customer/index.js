const namespaced = true

const state = {
  customerList: [
    {
      id: '10521',
      invoice: 'INV-001001',
      firstName: 'Elizabeth',
      lastName: 'Dietrich',
      phone: '(775)976-6794',
      email: 'Sherwood@rosamond.me',
      postcode: '92998-3874',
      status: true,
      amount: 1200.0
    },
    {
      id: '532521',
      invoice: 'INV-011112',
      firstName: 'Doris',
      lastName: 'Lebsack',
      phone: '1-770-736-8031',
      email: 'Sincere@april.biz',
      postcode: '90566-7771',
      status: false,
      amount: 5685.0
    },
    {
      id: '15522',
      invoice: 'INV-011112',
      firstName: 'Andrew',
      lastName: 'Bauch',
      phone: '024-648-3804',
      email: 'Shanna@melissa.tv',
      postcode: '59590-4157',
      status: true,
      amount: 152.0
    },
    {
      id: '15521',
      invoice: 'INV-011112',
      firstName: 'Megan',
      lastName: 'Graham',
      phone: '1-463-123-4447',
      email: 'Nathan@yesenia.net',
      postcode: '53919-4257',
      status: false,
      amount: 685.0
    },
    {
      id: '32521',
      invoice: 'INV-011112',
      firstName: 'Walter',
      lastName: 'Howell',
      phone: '586-493-6943',
      email: 'Julianne.OConner@kory.org',
      postcode: '33263',
      status: true,
      amount: 1450.0
    },
    {
      id: '32421',
      invoice: 'INV-013112',
      firstName: 'John',
      lastName: 'Plains',
      phone: '010-692-6593',
      email: 'Lucio_Hettinger@annie.ca',
      postcode: '23505-1337',
      status: false,
      amount: 250.0
    }
  ],
  filter: false,
  filteredCustomerList: [],
  selectedCustomer: {}
}
const getters = {
  getCustomerList: state => state.customerList,
  getFilteredCustomerList: state => state.getFilteredCustomerList,
  getFilter: state => state.filter,
  getSelectedCustomer: state => state.selectedCustonmer
}
const mutations = {
  setFilter(state, action) {
    state.filter = action
  },
  setPatientList(state, patients) {
    state.filteredCustomerList = [...patients]
  },
  setPatient(state, action) {
    state.selectedCustomer = action
  }
}
const actions = {
  searchPatient({ commit, state }, action) {
    const result = state.patientList.filter(item => {
      return (
        item.firstName
          .toLowerCase()
          .indexOf(action.firstName.trim().toLowerCase()) > -1 &&
        item.lastName
          .toLowerCase()
          .indexOf(action.lastName.trim().toLowerCase()) > -1 &&
        item.phone.toLowerCase().indexOf(action.phone.trim().toLowerCase()) >
          -1 &&
        item.email.toLowerCase().indexOf(action.email.trim().toLowerCase()) >
          -1 &&
        item.postcode
          .toLowerCase()
          .indexOf(action.postcode.trim().toLowerCase()) > -1
      )
    })
    commit('setFilter', true)
    commit('setPatientList', result)
  },
  selectPatient({ commit, state }, action) {
    // todo: replace this with axios request for specific patient
    const findPatient = state.patientList.find(patient => {
      return patient.id === action
    })
    commit('setPatient', findPatient)
  },
  resetFilter({ commit }) {
    commit('setFilter', false)
  }
}

export default {
  namespaced,
  actions,
  mutations,
  getters,
  state
}
