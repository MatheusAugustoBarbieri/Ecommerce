<template>
  <div>
    <BannerMain />
    <Carousel />
    <FormMain />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  async asyncData({ store }) {
    try {
      await store.dispatch('productBanner/setProdBanner')
      await store.dispatch('products/setProducts')
    } catch (error) {
      return error
    }
  },
}
</script>
