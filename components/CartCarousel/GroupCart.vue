<template>
  <div class="group-cart">
    <client-only>
      <div class="container" v-if="cart_product">
        <CartProducts
          class="group-cart__cart-position"
          v-for="(item, index) in cart_product"
          :key="index"
          :prod="item"
        />
      </div>
    </client-only>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'GroupCart',
  computed: {
    ...mapState({
      cart_product: state => state.cart.cart_product,
    }),
  },
}
</script>

<style lang="scss" scoped>
.group-cart {
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  &__cart-position {
    margin: 15px 0;
  }
}
</style>
