<!-- .vuepress/components/GithubTags -->
<template>
  <a v-for="i in Object.keys(tags)" :key="i"
    v-bind:href="tags[i].href">
    
    <Badge
      type="info" 
      vertical="middle" 
      v-bind:text="tags[i].tag"/>
  </a>
</template>
  
<script>
export default {
  name: "GithubTags",
  // components: { Badge },
  props: {
    tagItems: {
      type: String,
      required: true,
    }
  },
  computed: {
    tags() {
      const tagsArr = this.tagItems.slice().split(";");
      return tagsArr.map((e) => { 
        return {
          tag: e, 
          href: `https://github.com/topics/${e}`,
        }
      });
    },
  }
};
</script>