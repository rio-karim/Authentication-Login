<template>
  <div class="content-wrapper">
    <div class="content-body">
      <section class="flexbox-container">
        <div class="col-12 d-flex align-items-center justify-content-center">
          <div class="col-md-4 col-10 box-shadow-2 p-0">
            <div class="card border-grey border-lighten-3 m-0">
              <div class="card-header border-0">
                <div class="card-title text-center">
                  <div class="p-1">
                    <img
                      src="@/assets/svg/logo.svg"
                      class="img-logo"
                      alt="branding logo"
                    />
                  </div>
                </div>
                <h6
                  class="card-subtitle line-on-side text-muted text-center font-small-3 pt-2"
                >
                  <span>Login to IEC Admin</span>
                </h6>
              </div>
              <div class="card-content">
                <div class="card-body">
                  <form @keydown.enter="login">
                    <b-form-group
                      class="form-group position-relative has-icon-left mb-2"
                      label="Username"
                    >
                      <b-input
                        ref="username"
                        v-model="username"
                        class="form-control form-control-lg input-lg"
                        placeholder=""
                        value=""
                      />
                      <div class="form-control-position">
                        <i class="ft-user" />
                      </div>
                    </b-form-group>

                    <b-form-group
                      class="form-group position-relative has-icon-left"
                      label="Password"
                    >
                      <b-input
                        v-model="password"
                        class="form-control form-control-lg input-lg"
                        type="password"
                        placeholder=""
                        value=""
                      />
                      <div class="form-control-position">
                        <i class="fa fa-key" />
                      </div>
                    </b-form-group>
                    <div class="text-center">
                      <b-btn
                        @click="login"
                        variant="primary"
                        block
                        class="btn btn-info btn-lg btn-block"
                      >
                        <i class="ft-unlock" /> Login
                      </b-btn>
                    </div>
                  </form>
                </div>
              </div>
              <div class="card-footer" />
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.login-button {
  border: 0;
}
.img-logo {
  width: 35%;
}
.form-control-position {
  top: 40% !important;
}
.content-wrapper {
  display: flex;
  justify-content: center;
}
</style>

<script>
import { mapActions } from 'vuex'
import { cookieGet, cookieDelete } from '@/plugins/cookie-storage'
export default {
  data() {
    return {
      username: 'rio.karim@gmail.com',
      password: 'test!123',
      error: ''
    }
  },
  computed: {
    redirect() {
      return (
        this.$route.query.redirect &&
        decodeURIComponent(this.$route.query.redirect)
      )
    }
  },
  methods: {
    ...mapActions('Interface', ['toggleNotification']),
    async login() {
      this.error = null
      await this.$auth
        .loginWith('local', {
          data: {
            username: this.username,
            password: this.password
          }
        })
        .catch(e => {
          if (e.response.status === 403 || e.response.status === 401) {
            this.error = 'Incorrect credentials.'
          } else {
            this.error = 'There was an error logging in.'
          }
          this.toggleNotification({
            active: true,
            notification: {
              id: Math.floor(Math.random() * (10000 - 0 + 1) + 0),
              type: 'warning',
              text: this.error
            }
          })
        })
        .then(data => {
          if (!this.error) {
            this.toggleNotification({
              active: true,
              notification: {
                id: Math.floor(Math.random() * (10000 - 0 + 1) + 0),
                type: 'success',
                text: 'Login successful!'
              }
            })
            console.log(this.$auth.user)
          }
        })
    }
  },
  mounted: function() {
    if (cookieGet('logged.out')) {
      this.toggleNotification({
        active: true,
        notification: {
          id: Math.floor(Math.random() * (10000 - 0 + 1) + 0),
          type: 'success',
          text: 'Successfully logged out.'
        }
      })
      cookieDelete('logged.out')
    }
  }
}
</script>
