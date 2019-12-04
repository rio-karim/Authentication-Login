<template lang="html">
  <div class="content-unauthorised">
    <div class="content-header row"></div>
    <div class="content-body u">
      <div class="card">
        <div class="card-content">
          <i class="fa fa-ban"></i>
          <div class="card-body">
            <h4 class="card-title">403: Unauthorised</h4>
            <p class="card-text">
              You do not have the permissions to view this page.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.content-unauthorised {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  i {
    font-size: 100px;
  }
  .card {
    background: transparent;
    box-shadow: unset;
  }
}
</style>
