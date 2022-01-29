<script>
  import MadeBy from './components/MadeBy.vue'
  import NavBar from './components/NavBar.vue'

  export default {
    components: {
      MadeBy,
      NavBar
    }
  }
</script>

<template>
  <main>
    <NavBar />
  </main>
  <MadeBy msg="Made by Anna" />
</template>
