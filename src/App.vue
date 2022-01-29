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

<!-- <nav>
    <ul>
      <li>
        <RouterLink to="/">Hem</RouterLink>
      </li>
      <li>
        <RouterLink to="/about">Om</RouterLink>
      </li>
      <li><RouterLink to="/other/Det ena">Det ena</RouterLink></li>
      <li>
        <RouterLink to="/other/Det andra">Det andra</RouterLink>
      </li>
      <li>
        <RouterLink to="/pink">Rosa</RouterLink>
      </li>
    </ul>
  </nav> -->
