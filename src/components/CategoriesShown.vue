<script>
  export default {
    props: { categoriesShown: { type: Boolean } }
  }
</script>
<template>
  <div class="shadow-lg p-3 mb-5 bg-body rounded">
    <p class="lead" v-if="categoriesShown === true">
      Vilken kategori är din favorit?
    </p>
  </div>
</template>
