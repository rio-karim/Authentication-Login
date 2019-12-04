<template lang="html">
  <div class="content-wrapper">
    <template v-if="this.$auth.user.scope === 'SUPER'">
      <div class="content-header row"></div>
      <div class="content-body mt-2">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header bg-blue-grey">
              <h4
                id="horz-layout-colored-controls"
                class="card-title text-white"
              >
                <span class="mx-1"
                  ><img
                    src="~/assets/svg/superman.svg"
                    alt=""
                    class="img-superman"
                /></span>
                Super Controls
              </h4>
              <a class="heading-elements-toggle"
                ><i class="fa fa-ellipsis-v font-medium-3"></i
              ></a>
            </div>
            <div class="card-content collpase show">
              <div class="card-body">
                <form class="form form-horizontal">
                  <div class="form-body">
                    <h4 class="form-section">
                      <i class="fa fa-user-o"></i> Create User
                    </h4>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group row">
                          <label class="col-md-3 label-control" for="userinput1"
                            >First Name</label
                          >
                          <div class="col-md-9">
                            <div class="position-relative has-icon-left">
                              <input
                                id="first-name"
                                v-model="createUser.firstName"
                                type="text"
                                value=""
                                class="form-control"
                              />
                              <div class="form-control-position">
                                <i class="fa fa-user-o"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group row">
                          <label class="col-md-3 label-control" for="userinput2"
                            >Last Name</label
                          >
                          <div class="col-md-9">
                            <div class="position-relative has-icon-left">
                              <input
                                id="last-name"
                                v-model="createUser.lastName"
                                type="text"
                                value=""
                                class="form-control"
                              />
                              <div class="form-control-position">
                                <i class="fa fa-user-o"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group row">
                          <label class="col-md-3 label-control" for="userinput1"
                            >Email</label
                          >
                          <div class="col-md-9">
                            <div class="position-relative has-icon-left">
                              <input
                                id="first-name"
                                v-model="createUser.email"
                                type="email"
                                value=""
                                class="form-control"
                              />
                              <div class="form-control-position">
                                <i class="fa fa-envelope-o"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group row">
                          <label class="col-md-3 label-control" for="userinput4"
                            >Job Role</label
                          >
                          <div class="col-md-9">
                            <div class="position-relative has-icon-left">
                              <div class="form-control job-role">
                                <select
                                  v-model="createUser.jobRole"
                                  class="select2 form-control no-border border-0 select2-hidden-accessible"
                                  data-select2-id="1"
                                  tabindex="-1"
                                  aria-hidden="true"
                                >
                                  <option value="PRESCRIBER">Prescriber</option>
                                  <option value="PHARMACIST">Pharmacist</option>

                                  <option value="CUSTOMER S"
                                    >Customer Service</option
                                  >
                                  <option value="ADMIN">Admin</option>

                                  <option value="GUEST">Guest</option>
                                </select>
                              </div>
                              <div class="form-control-position">
                                <i class="fa fa-briefcase"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group row">
                          <label class="col-md-3 label-control" for="userinput1"
                            >New Password</label
                          >
                          <div class="col-md-9">
                            <div class="position-relative">
                              <input
                                id="new-password"
                                v-model="createUser.newPassword"
                                type="text"
                                value=""
                                disabled
                                class="form-control"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group row-fluid justify-content-end">
                          <button
                            @click="submitUser($event)"
                            type="submit"
                            class="btn btn-primary pull-right"
                          >
                            <i class="fa fa-plus"></i> Create
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="form-actions right"></div>
                </form>
              </div>
              <div class="card-body">
                <form class="form form-horizontal">
                  <div class="form-body">
                    <h4 class="form-section">
                      <i class="fa fa-key"></i> Reset Password
                    </h4>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group row">
                          <label class="col-md-3 label-control" for="userinput1"
                            >Email</label
                          >
                          <div class="col-md-9">
                            <div class="position-relative has-icon-left">
                              <input
                                id="first-name"
                                v-model="resetPassword.email"
                                type="text"
                                value=""
                                class="form-control"
                              />
                              <div class="form-control-position">
                                <i class="fa fa-envelope-o"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group row">
                          <label class="col-md-3 label-control" for="userinput2"
                            >New Password</label
                          >
                          <div class="col-md-9">
                            <input
                              id="userinput2"
                              v-model="resetPassword.newPassword"
                              type="text"
                              class="form-control"
                              disabled
                              name="lastname"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row justify-content-end">
                      <div class="col-md-6">
                        <div class="form-group row-fluid justify-content-end">
                          <button
                            @click="submitReset($event)"
                            type="submit"
                            class="btn btn-primary pull-right"
                          >
                            <i class="fa fa-random"></i> Generate
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="form-actions right"></div>
                </form>
              </div>
              <div class="card-body">
                <form class="form form-horizontal">
                  <div class="form-body">
                    <h4 class="form-section">
                      <i class="fa fa-trash"></i> Delete User
                    </h4>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group row">
                          <label class="col-md-3 label-control" for="userinput1"
                            >Email</label
                          >
                          <div class="col-md-9">
                            <div class="position-relative has-icon-left">
                              <input
                                id="first-name"
                                type="text"
                                value=""
                                class="form-control"
                              />
                              <div class="form-control-position">
                                <i class="fa fa-envelope-o"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group row-fluid justify-content-end">
                          <button
                            type="submit"
                            class="btn btn-danger pull-right"
                          >
                            <i class="fa fa-minus-circle"></i> Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template v-else>
      <unauthorised />
    </template>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Unauthorised from '@/components/auth/403.vue'

export default {
  components: {
    Unauthorised
  },
  data: function() {
    return {
      createUser: {
        email: '',
        firstName: '',
        lastName: '',
        jobRole: '',
        newPassword: ''
      },
      resetPassword: {
        email: '',
        newPassword: ''
      }
    }
  },
  methods: {
    ...mapActions('Interface', ['toggleNotification']),
    submitUser: function(e) {
      const user = this.createUser
      this.$axios
        .post('/api/user/create', {
          data: {
            username: this.createUser.email,
            firstName: this.createUser.firstName,
            lastName: this.createUser.lastName,
            jobRole: this.createUser.jobRole
          }
        })
        .then(res => {
          this.createUser.newPassword = res.data.password || ''
          this.toggleNotification({
            active: true,
            notification: {
              id: Math.floor(Math.random() * (10000 - 0 + 1) + 0),
              type: res.data.http !== 200 ? 'warning' : 'success',
              text:
                res.data.http !== 200
                  ? `Error: ${res.data.status}`
                  : `User ${this.createUser.email} has been created.`
            }
          })
        })

      e.preventDefault()
    },
    submitReset: function(e) {
      this.$axios
        .post('/api/user/password/reset', {
          data: {
            username: this.resetPassword.email
          }
        })
        .then(res => {
          this.resetPassword.newPassword = res.data.password || ''
          this.toggleNotification({
            active: true,
            notification: {
              id: Math.floor(Math.random() * (10000 - 0 + 1) + 0),
              type: res.data.http !== 200 ? 'warning' : 'success',
              text:
                res.data.http !== 200
                  ? `Error: ${res.data.status}`
                  : `Password for ${this.resetPassword.email} has been reset.`
            }
          })
        })

      e.preventDefault()
    }
  }
}
</script>

<style lang="scss" scoped>
.img-superman {
  height: 20px;
  width: auto;
  margin-left: -4px;
  margin-right: 4px;
  margin-top: -4px;
  filter: brightness(0) invert(1);
}
.select2.form-control {
  position: absolute;
  right: 0;
  top: 0;
  left: 30px;
  bottom: 0;
  z-index: 5;
  width: calc(100% - 35px);
}
.form-control.job-role {
  position: relative;
  overflow: hidden;
  z-index: 6;
  & ~ .form-control-position {
    z-index: 6;
  }
}
</style>
