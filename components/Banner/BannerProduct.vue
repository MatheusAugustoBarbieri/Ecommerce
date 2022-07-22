<template>
  <div class="banner-product" v-if="prodBanner">
    <div class="banner-product__featured">
      <p>Melhor oferta.</p>
      <div class="banner-product__featured-custom"></div>
    </div>
    <img
      class="banner-product__img"
      v-if="prodBanner.sprites && prodBanner.sprites.front_default"
      :src="prodBanner.sprites.front_default"
      :alt="prodBanner.name"
    />
    <div class="banner-product__name">{{ prodBanner.name }}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'BannerProductComponent',
  computed: {
    ...mapGetters({
      prodBanner: 'productBanner/getProdBanner',
    }),
  },
}
</script>

<style lang="scss" scoped>
.banner-product {
  width: 160px;
  height: 170px;
  border-radius: 34px;
  border: solid 4px white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  &__img {
    width: 120px;
    height: auto;
  }
  &__name {
    color: white;
    font-size: 22px;
    font-weight: bold;
  }
  &__featured {
    position: absolute;
    width: 106%;
    height: 40px;
    top: -50px;
    background: black;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: bold;
    p {
      z-index: 3;
    }
  }
  &__featured-custom {
    width: 20px;
    height: 20px;
    background: black;
    position: absolute;
    left: auto;
    right: auto;
    bottom: -10px;
    transform: rotate(45deg);
    z-index: 2;
  }
}
</style>
