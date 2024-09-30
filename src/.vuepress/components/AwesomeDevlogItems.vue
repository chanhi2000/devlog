<!-- .vuepress/components/AwesomeDevlogItems -->
<template lang="">

  <div v-if="hasData">
    <DevLoadingvSpinner v-if="isLoading"/>
    <div>{{ result }}</div>
  </div>
</template>
<script>
import DevLoadingvSpinner from './DevLoadingvSpinner.vue'
import AwesomeDevlogApi from './js/api/AwesomeDevlogApi'

export default {
  name: 'AwesomeDevlogItems',
  components: {
    DevLoadingvSpinner
  },
  data() {
    return {
      isLoading: false,
      hasData: true,
      items: null,
      result: '',
    }
  },
  methods: {
    async onFetchData() {
      console.log('onFetchData ... ')
      this.isLoading = true
      const fetchedItems = await AwesomeDevlogApi.fetch();
      this.isLoading = false;
      this.result = fetchedItems
    },
    async copyToClipboard(text = '') {
      if (typeof navigator == "undefined") return;
      try {
        await navigator.clipboard.writeText(text);
      } catch (e) {
        console.warn('Error:', e)
        return
      }
    },
  },
  async mounted() {
    this.onFetchData()
  },
}
</script>
<style scoped>
    
</style>