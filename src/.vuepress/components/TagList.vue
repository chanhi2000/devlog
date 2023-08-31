<!-- .vuepress/components/TagList -->
<template>
  <div>
    <span v-for="(tag, i) in Object.keys(tags)" :key="i">
      <h2 :id="tag">
        <router-link
          :to="{ path: `/tag/#${tag}` }"
          class="header-anchor"
          aria-hidden="true"
        >#</router-link>
        {{ tag }}
      </h2>
      <ul>
        <li v-for="(page, i) in tags[tag]" :key="i">
          <router-link :to="{ path: page.path }">{{ page.title }}</router-link>
        </li>
      </ul>
    </span>
  </div>
</template>
  
<script>
  export default {
    name: "TagList",
    computed: {
      tags() {
        let tags = {};
        // 전체 게시글에서 태그들을 가져옵니다.
        for (let page of this.$site.pages) {
          for (let index in page.frontmatter.tags) {
            const tag = page.frontmatter.tags[index];
            if (tag in tags) {
              tags[tag].push(page);
            } else {
              tags[tag] = [page];
            }
          }
        }
        return tags;
      }
    }
  };
</script>
