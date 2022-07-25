<template>
  <div class="group-cart">
    <client-only>
      <div class="container" v-if="products">
        <CartProducts
          class="group-cart__cart-position"
          v-for="(item, index) in products"
          :key="index"
          :prod="item"
        />
      </div>
    </client-only>
  </div>
</template>

<script>
export default {
  name: 'GroupCart',
  computed: {
    products() {
      if (!process.browser) return
      if (!localStorage.getItem('itens')) return
      return JSON.parse(localStorage.getItem('itens'))
    },
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
