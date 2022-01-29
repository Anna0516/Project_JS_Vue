<script>
  export default {
    props: {
      msg: {
        type: String,
        default: 'hej'
      }
    }
  }
</script>

<style lang="scss" scoped>
  $my-color: #f0abcd;
  div {
    background-color: $my-color;
    font-weight: bold;
  }
  .nav-link {
    color: black;
    font-size: 1.5em;
  }
</style>

<template>
  <div>
    <p class="lead">{{ msg }}</p>
    <nav class="nav">
      <a
        class="nav-link"
        href="https://www.linkedin.com/in/anna-eriksson-a2785611b/"
        target="_blank"
        rel="noopener noreferrer"
        ><i class="fa fa-linkedin" id="linkedin"></i
      ></a>
      <a
        class="nav-link"
        href="https://www.instagram.com/anna_frontend_developer/"
        target="_blank"
        rel="noopener noreferrer"
        ><i class="fa fa-instagram" id="instagram"></i
      ></a>
    </nav>
  </div>
</template>
