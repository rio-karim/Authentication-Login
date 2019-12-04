<template>
  <div class="card-body">
    <p>
      Total customers in result -
      {{ customerCount }}.
    </p>
    <div class="table-responsive">
      <table
        id="recent-patients"
        class="table table-hover mb-0 ps-container ps-theme-default"
      >
        <thead>
          <tr>
            <th>
              Email
            </th>
            <th>
              Phone
            </th>
            <th>
              Name
            </th>
            <th>
              Postcode
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, index) in getFilter === false
              ? getPatientList
              : getFilteredPatientList"
            :key="index"
          >
            <td class="text-truncate">
              {{ item.email }}
            </td>
            <td class="text-truncate">
              <a href="#">
                {{ item.phone }}
              </a>
            </td>
            <td class="text-truncate">
              <nuxt-link :to="`/patient/${item.id}`">
                {{ item.firstName }}
                {{ item.lastName }}
              </nuxt-link>
            </td>
            <td class="text-truncate">
              {{ item.postcode }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('Patient', {
      customersList: 'getCustomerList',
      filteredCustomers: 'getFilteredCustomerList',
      getFilter: 'getFilter'
    }),
    customers() {
      return this.getFilter === false
        ? this.customerList
        : this.filteredCustomers
    }
  }
}
</script>
<style lang="scss" scoped>
tr {
  cursor: pointer;
}
</style>
