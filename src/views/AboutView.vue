<script>
  import DrinkList from '../components/DrinkList.vue'
  import StatesList from '../components/StatesList.vue'
  import CategoriesShown from '../components/CategoriesShown.vue'

  export default {
    components: {
      CategoriesShown,
      DrinkList,
      StatesList
    },
    data() {
      return { categoriesShown: false }
    },
    methods: {
      onCategoriesShown() {
        this.categoriesShown = true
        console.log('Kategorier har visats')
        console.log(this.categoriesShown)
      }
    }
  }
</script>

<template>
  <img alt="" src="/assets/kat.jpg" />
  <h1 class="display-4">Om</h1>
  <StatesList />
  <DrinkList @categories-shown="onCategoriesShown" />
  <CategoriesShown :categories-shown="categoriesShown" />
</template>
