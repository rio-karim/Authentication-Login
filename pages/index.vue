<template lang="html">
  <div class="content-wrapper">
    <div class="content-header my-2 row">
      <div class="col-xl-3 col-lg-3 col-12">
        <div class="bg-gradient-directional-info">
          <div class="care-content">
            <div class="card-body">
              <div class="media d-flex">
                <div class="align-self-center">
                  <i class="icon-pencil text-white font-large-2 float-left" />
                </div>
                <div class="media-body text-white text-right">
                  <h3 class="text-white">
                    25
                  </h3>
                  <span>Next day</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-xl-3 col-lg-3 col-12">
        <div class="bg-gradient-directional-info">
          <div class="care-content">
            <div class="card-body">
              <div class="media d-flex">
                <div class="align-self-center">
                  <i class="icon-pencil text-white font-large-2 float-left" />
                </div>
                <div class="media-body text-white text-right">
                  <h3 class="text-white">
                    5
                  </h3>
                  <span>3-5 days</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-xl-3 col-lg-3 col-12">
        <div class="bg-gradient-directional-danger">
          <div class="care-content">
            <div class="card-body">
              <div class="media d-flex">
                <div class="align-self-center">
                  <i class="icon-clock text-white font-large-2 float-left" />
                </div>
                <div class="media-body text-white text-right">
                  <h3 class="text-white">
                    5
                  </h3>
                  <span>Priority</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-xl-3 col-lg-3 col-12">
        <div class="bg-gradient-directional-success">
          <div class="care-content">
            <div class="card-body">
              <div class="media d-flex">
                <div class="align-self-center">
                  <i class="icon-check text-white font-large-2 float-left" />
                </div>
                <div class="media-body text-white text-right">
                  <h3 class="text-white">
                    65
                  </h3>
                  <span>Completed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="content-body">
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-header bg-blue-grey">
              <h4 class="card-title text-white">
                <i class="fa fa-list mx-1" />Recent Patients
              </h4>
              <a class="heading-elements-toggle">
                <i class="ft-more-horizontal font-medium-3" />
              </a>
            </div>
            <div class="card-content">
              <customer-list />
            </div>
          </div>
        </div>
      </div>
      <div class="row card-row my-2">
        <div class="col-xl-4 col-md-12 col-sm-12">
          <div class="card bg-twitter white">
            <div class="card-content p-2">
              <div class="card-body">
                <div class="text-center mb-1">
                  <i class="ft-twitter font-large-3"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xl-4 col-md-12 col-sm-12">
          <div class="card border-info text-center bg-transparent">
            <div class="card-content">
              <img
                src="@/plugins/robust-theme/app-assets/images/elements/07.png"
                alt="element 04"
                width="140"
                class="float-left mt-3"
              />
              <div class="card-body pt-3">
                <h4 class="mt-3">New Arriaval</h4>
                <p class="card-text">
                  Donut toffee candy brownie soufflé macaroon.
                </p>
                <button class="btn btn-info">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-md-12 col-sm-12">
          <div class="card bg-facebook white">
            <div class="card-content p-2">
              <div class="card-body">
                <div class="text-center mb-1">
                  <i class="ft-facebook font-large-3"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import CustomerList from '@/components/customer/CustomerList'
export default {
  components: {
    CustomerList
  },
  computed: mapState('auth', ['loggedIn', 'strategy', 'user']),
  mounted() {
    console.log(this.user)
  }
}
</script>

<style lang="scss" scoped>
.card-row {
  .card {
    height: 300px;
  }
}
</style>
