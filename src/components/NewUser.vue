<script>
  export default {
    emits: ['click-button', 'update:newUser'],

    methods: {
      onClick() {
        this.$emit('click-button', { newUser: true })
        console.log('onclick')
      }
    },
    props: { newUser: Boolean }
  }
</script>
<template>
  <button class="btn btn-primary btn-lg" @click="onClick">Tryck här</button>
  <div class="lead" v-if="this.newUser === false">{{ 'Falskt' }}</div>
  <div class="lead" v-else>{{ 'Sant' }}</div>
</template>
<style>
  button {
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
    margin: 0.5em;
  }
</style>
