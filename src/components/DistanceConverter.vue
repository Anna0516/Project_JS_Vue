<script>
  export default {
    data() {
      return { kilometers: 0, meters: 0 }
    },
    watch: {
      kilometers: function (val) {
        this.kilometers = val
        this.meters = val * 1000
      },
      meters: function (val) {
        this.kilometers = val / 1000
        this.meters = val
      }
    }
  }
</script>
<template>
  <form>
    <div class="form-group row">
      <div class="col">
        <p class="lead">Kilometer:</p>
        <input
          type="text"
          v-model="kilometers"
          class="form-control"
          placeholder="Kilometer"
        />
      </div>
      <div class="col">
        <p class="lead">Meter:</p>
        <input
          type="text"
          v-model="meters"
          class="form-control"
          placeholder="Meter"
        />
      </div>
    </div>
  </form>
</template>
