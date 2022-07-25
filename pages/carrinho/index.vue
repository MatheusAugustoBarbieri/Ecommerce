<template>
  <div>
    <GroupCart />
  </div>
</template>

<script>
export default {
  name: 'CarrinhoPage',
  async asyncData({ store }) {
    try {
      await store.dispatch('products/setProducts')
    } catch (error) {
      return error
    }
  },
}
</script>
