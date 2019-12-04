<template lang="html">
  <div class="notification-wrapper m-2">
    <transition-group name="fade">
      <div
        v-for="notification in notifications"
        :key="notification.id"
        :class="`bg-${notification.type}`"
        class="alert alert-icon-right alert-dismissible mb-2"
        role="alert"
      >
        {{ autoClose(notification) }}
        <span class="alert-icon"
          ><i
            :class="
              `fa fa-${
                notification.type === 'success' ? 'check' : notification.type
              }`
            "
          ></i
        ></span>
        <button
          @click="toggleNotification({ notification, active: false })"
          type="button"
          class="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">×</span>
        </button>
        {{ notification.text }}
      </div>
    </transition-group>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed: mapState('Interface', ['notifications']),
  methods: {
    ...mapActions('Interface', ['toggleNotification']),
    autoClose: function(notification) {
      setTimeout(() => {
        this.toggleNotification({
          notification,
          active: false
        })
      }, 3500)
    }
  }
}
</script>

<style lang="scss" scoped>
.notification-wrapper {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  max-width: 320px;
  transform: translateX(0);
  .alert-dismissible {
    z-index: 1000;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: transform 0.4s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    transform: translateX(110%);
  }
}
</style>
