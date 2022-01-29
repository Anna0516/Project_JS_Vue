<script>
  export default {
    props: {
      state: { type: Object, required: true }
    },
    computed: {
      boldState() {
        return this.state.Population > 7000000
      }
    }
  }
</script>

<template>
  <div :style="[boldState ? { 'font-weight': 'bold' } : null]">
    Stat: {{ state.State }}, invånare: {{ state.Population }}
  </div>
</template>
