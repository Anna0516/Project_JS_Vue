<script>
  import axios from 'axios'
  import imageSource from '../../assets/drinks.jpg'

  export default {
    computed: {
      userName() {
        return this.$store.state.userName
      }
    },
    data() {
      return {
        drinkCategory: '',
        imageSource
      }
    },
    emits: ['categories-shown'],
    methods: {
      async showCategory() {
        let config = {
          headers: {
            Accept: 'application/json'
          }
        }
        const drinkCategory = await axios.get(
          'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list',
          config
        )

        this.drinkCategory = drinkCategory.data.drinks
        console.log(this.drinkCategory)
        this.$emit('categories-shown')
      }
    }
  }
</script>

<template>
  <div class="shadow-lg p-3 mb-5 bg-body rounded">
    <img alt="" :src="imageSource" />
    <p class="lead">Drinkkategorier för dig, {{ userName }}</p>
    <button class="btn btn-primary btn-lg" @click="showCategory">
      Visa kategorier
    </button>
    <ul>
      <li :key="category.strCategory" v-for="category in drinkCategory">
        {{ category.strCategory }}
      </li>
    </ul>
  </div>
</template>
