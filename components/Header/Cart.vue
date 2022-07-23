<template>
  <div class="cart">
    <client-only>
      <div class="cart__count" v-if="amountItens">{{ amountItens.length }}</div>
    </client-only>
  </div>
</template>

<script>
export default {
  name: 'CartComponent',
  data() {
    return {
      x: 0,
    }
  },
  computed: {
    amountItens() {
      if (!process.browser) return
      if (!localStorage.getItem('itens')) return
      return JSON.parse(localStorage.getItem('itens'))
    },
  },
}
</script>

<style lang="scss" scoped>
.cart {
  background: url('@/assets/img/icons/icon-shopping-cart.svg') no-repeat;
  background-size: contain;
  min-width: 30px;
  min-height: 30px;
  position: relative;
  cursor: pointer;
  &__count {
    border-radius: 35px;
    min-width: 15px;
    min-height: 15px;
    font-size: 10px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: -8px;
    left: 7px;
  }
  transition: all 0.1s ease-in-out;
  &:hover {
    transition: all 0.1s ease-in-out;
    transform: scale(1.02);
  }
}
@media (min-width: 1024px) {
  .cart {
    min-width: 35px;
    min-height: 35px;
    &__count {
      left: 8px;
    }
  }
}
</style>
