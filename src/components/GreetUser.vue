<script>
  export default {
    computed: {
      userName: {
        get() {
          return this.$store.state.userName
        },
        set(value) {
          this.$store.commit('updateUserName', value)
          console.log(this.userName)
          console.log('computed')
        }
      }
    }
  }
</script>

<template>
  <div class="shadow-lg p-3 mb-5 bg-body rounded">
    <div>
      <input
        type="text"
        v-model="userName"
        class="form-control"
        placeholder="Namn"
      />
    </div>
    <p v-if="userName !== ''">Välkommen {{ userName }}!</p>
    <p v-else>Skriv ditt namn!</p>
  </div>
</template>
