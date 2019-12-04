<template lang="html">
  <div id="app">
    <Header v-if="$auth.$state.loggedIn" />
    <div class="app-content container">
      <nuxt />
    </div>
    <Footer v-if="$auth.$state.loggedIn" />
    <Notifications />
  </div>
</template>

<script>
import Header from '@/layouts/Header.vue'
import Footer from '@/layouts/Footer.vue'
import Notifications from '@/layouts/Notifications.vue'
export default {
  components: {
    Header,
    Footer,
    Notifications
  }
}
</script>
<style lang="scss" scoped>
@keyframes slide_in {
  from: {
    width: 10px;
  }
  to: {
    width: 80px;
  }
}
#app {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-flow: column nowrap;
  .app-content {
    flex: 1;
    display: flex;
    flex-flow: column nowrap;
    .content-wrapper {
      flex: 1;
      display: flex;
      flex-flow: column nowrap;
    }
  }
}
</style>
<style lang="scss">
@import 'global.scss';
</style>
