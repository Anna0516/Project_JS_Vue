<script>
  import image1 from '../../assets/dessert.jpg'
  import image2 from '../../assets/macarons.jpg'
  import image3 from '../../assets/marshmallow.jpg'
  import image4 from '../../assets/valentine.jpg'

  export default {
    name: 'PinkDetails',

    data() {
      return {
        prodId: this.$route.params.productId,
        title: 'PinkDetails',
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
    }
  }
</script>
<template>
  <div class="PinkDetails">
    <div class="container">
      <div class="row">
        <div
          class="col-md-12"
          v-for="product in products"
          :key="product.productId"
        >
          <div v-if="prodId == product.productId">
            <h1 class="display-4">{{ product.productTitle }}</h1>

            <img :src="product.image" class="img-fluid" />
            <div>{{ product.description }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
