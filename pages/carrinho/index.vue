<template>
  <div>
    <GroupCart />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'CarrinhoPage',
  async asyncData({ store }) {
    try {
      await store.dispatch('products/setProducts')
    } catch (error) {
      return error
    }
  },
  mounted() {
    this.setItemCart()
  },
  methods: {
    ...mapActions({
      setItemCart: 'cart/setItemCart',
    }),
  },
}
</script>
