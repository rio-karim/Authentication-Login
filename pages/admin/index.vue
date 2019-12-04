<template lang="html">
  <div class="content-wrapper">
    <template
      v-if="
        this.$auth.user.scope === 'ADMIN' || this.$auth.user.scope === 'SUPER'
      "
    >
      <div class="content-header row"></div>
      <div class="content-body mt-2">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header bg-blue-grey">
              <h4
                id="horz-layout-colored-controls"
                class="card-title text-white"
              >
                Admin Controls
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
                      <i class="fa fa-universal-access"></i> User Priveleges
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
                        <div class="form-group row">
                          <label class="col-md-3 label-control" for="userinput4"
                            >Job Role</label
                          >
                          <div class="col-md-9">
                            <div class="position-relative has-icon-left">
                              <input
                                id="role"
                                type="text"
                                value=""
                                class="form-control"
                              />
                              <div class="form-control-position">
                                <i class="fa fa-briefcase"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="form-actions right">
                    <button type="button" class="btn btn-warning mr-1">
                      <i class="ft-x"></i> Cancel
                    </button>
                    <button type="submit" class="btn btn-primary">
                      <i class="fa fa-check-square-o"></i> Save
                    </button>
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
import Unauthorised from '@/components/auth/403.vue'
export default {
  components: {
    Unauthorised
  }
}
</script>

<style lang="css" scoped></style>
