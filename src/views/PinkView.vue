<script>
  import image1 from '../../assets/dessert.jpg'
  import image2 from '../../assets/macarons.jpg'
  import image3 from '../../assets/marshmallow.jpg'
  import image4 from '../../assets/valentine.jpg'

  export default {
    name: 'PinkView',

    data() {
      return {
        title: 'PinkView',
        products: [
          {
            description: 'En smarrig efterrätt är aldrig fel.',
            image: image1,
            productId: 1,
            productTitle: 'Efterrätt'
          },
          {
            description: 'Kakor kan vara gott ibland.',
            image: image2,
            productId: 2,
            productTitle: 'Kakor'
          },
          {
            description: 'Lördagsgodis är nice.',
            image: image3,
            productId: 3,
            productTitle: 'Godis'
          },
          {
            description: 'Alla hjärtans dag infaller den 14 februari.',
            image: image4,
            productId: 4,
            productTitle: 'Alla hjärtans dag'
          }
        ]
      }
    },
    methods: {
      goToDetails(productId) {
        this.$router.push('/Pinkdetails/' + productId)
      }
    }
  }
</script>
<template>
  <div class="PinkView">
    <h1 class="display-4">Rosa grejer</h1>
  </div>
  <div class="row">
    <div class="col-md-6" v-for="product in products" :key="product.productId">
      <img :src="product.image" class="img-fluid" />
      <br />
      <button
        class="btn btn-primary btn-lg"
        @click="goToDetails(product.productId)"
      >
        {{ product.productTitle }}
      </button>
    </div>
  </div>
</template>
<style lang="scss">
  $my-padding: 4em;
  .col-md-6 {
    padding-left: $my-padding;
  }
  button {
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
    margin: 0.5em;
  }
  img {
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }
</style>
