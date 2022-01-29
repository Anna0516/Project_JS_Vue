<script>
  import axios from 'axios'
  import BoldState from './BoldState.vue'

  export default {
    created() {
      axios
        .get(
          'https://datausa.io/api/data?drilldowns=State&measures=Population&year=latest'
        )
        .then((response) => (this.statesList = response.data))
      console.log(this.statesList)
    },
    components: {
      BoldState
    },
    data() {
      return {
        statesList: ''
      }
    }
  }
</script>

<template>
  <div class="shadow-lg p-3 mb-5 bg-body rounded">
    <h2>Stater</h2>

    <ul>
      <li :key="state.State" v-for="state in statesList.data">
        <BoldState :state="state" />
      </li>
    </ul>
  </div>
</template>
