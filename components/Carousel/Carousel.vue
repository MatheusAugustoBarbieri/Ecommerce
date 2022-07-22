<template>
  <div class="carousel" v-if="products">
    {{ products }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'CarouselComponent',
  computed: {
    ...mapGetters({
      products: 'products/getProducts',
    }),
  },
}
</script>
