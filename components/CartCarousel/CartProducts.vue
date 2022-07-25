<template>
  <div v-if="prod" class="product">
    <ProductCard :prod="prod" :bordercolor="bgType(prod)" />
    <button class="product__button-remove" @click="removeItemCart(prod)">
      Remover
    </button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'ProductslayoutComponent',
  props: {
    prod: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapActions({
      removeItemCart: 'cart/removeItemCart',
    }),
    bgType(prod) {
      return [
        ...new Set(
          prod.types.map(x => {
            return x.type.name === 'grass'
              ? '#81BD8C'
              : x.type.name === 'poison'
              ? '#81BD8C'
              : x.type.name === 'fire'
              ? '#FFA860'
              : x.type.name === 'flying'
              ? '#B0BFD8'
              : x.type.name === 'water'
              ? '#37A7F2'
              : '#B0BFD8'
          }),
        ),
      ][0]
    },
  },
}
</script>

<style lang="scss" scoped>
.product {
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
  padding: 40px 0 50px 0;
  border: 2px solid rgb(124, 124, 124);

  &__button-remove {
    width: 80%;
    height: 50px;
    border: none;
    border-radius: 10px;
    margin-top: 20px;
    font-size: 16px;
    font-weight: bold;
    color: white;
    cursor: pointer;
    background-color: #eb1505;
    box-shadow: 3px 3px #a70000;
    transition: all 0.1s ease-in-out;
    &:hover {
      transition: all 0.1s ease-in-out;
      transform: scale(1.02);
    }
  }
}
@media (min-width: 1024px) {
  .product {
    width: 300px;
    padding: 60px 0 50px 0;
  }
}
</style>
