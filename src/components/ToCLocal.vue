<!-- .vuepress/components/ToCLocal -->
<template>
  <ul>
    <li v-for="(item, i) in items" :key="i">
      <router-link :to="{ path: item.link }">{{ item.name }}</router-link>
    </li>
  </ul>
</template>
<script>
export default {
  name: "ToCLocal",
  props: {
    basePath: {
      type: String,
      required: true,
    }
  },
  data() {
    return { items: [] }
  },
  setup() {

  },
  computed: {
    
  },
  methods: {
    async fetchItems() {
      const _rBasePath = new RegExp(this.basePath+"(.*?.html)")
      const _items = this.$router.options.routes.filter((e) => e.path.match(_rBasePath) && e.name != null)
            .map((e) => {
              return {
                link: e.path,
                // link: e.path.replace('.html', '.md'),
                name: e.meta.t
              }
            });
      console.log(`${_items}`)
      this.items = _items
    }
  },
  mounted() {
    this.fetchItems()
  }
}
</script>
<style scoped>
    
</style>

