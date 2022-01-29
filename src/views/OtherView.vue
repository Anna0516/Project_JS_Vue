<script>
  export default {
    computed: {
      userName() {
        return this.$store.state.userName
      }
    }
  }
</script>

<template>
  <img alt="" src="/assets/johannes.jpg" /> <br />
  <p class="lead">{{ $route.params.otherText }}, för dig {{ userName }}</p>
</template>
