<script>
  import GreetUser from '../components/GreetUser.vue'
  import NewUser from '../components/NewUser.vue'
  import DistanceConverter from '../components/DistanceConverter.vue'
  export default {
    data() {
      return { newUser: true }
    },
    components: {
      DistanceConverter,
      GreetUser,
      NewUser
    },
    methods: {
      onClickButton() {
        this.newUser = !this.newUser
        console.log('onclickbutton')
        console.log(this.newUser)
      }
    }
  }
</script>

<template>
  <h1 class="display-4">Hem</h1>
  <img alt="" src="/assets/fiona.jpg" /> <br />
  <div class="shadow-lg p-3 mb-5 bg-body rounded"><DistanceConverter /></div>
  <NewUser @click-button="onClickButton" :new-user="this.newUser" />
  <GreetUser />
</template>
<style>
  img {
    margin: 0.5em;
  }
</style>
