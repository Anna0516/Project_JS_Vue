<template>
  <div id="nav">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <img src="../../assets/navicon.png" />

      <div class="navbar-nav mr-auto">
        <router-link to="/" class="nav-item nav-link">Hem</router-link>
        <router-link to="/about" class="nav-item nav-link">Om</router-link>
        <router-link to="/other/Det ena" class="nav-link">Det ena</router-link>
        <router-link to="/other/Det andra" class="nav-link">
          Det andra</router-link
        >
        <router-link to="/pink" class="nav-link">Rosa grejer</router-link>
      </div>
    </nav>
  </div>
  <router-view />
</template>
