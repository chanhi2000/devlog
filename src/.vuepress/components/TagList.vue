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
          <router-link :to="{ path: page.path }">{{ page.frontmatter.description }}</router-link>
        </li>
      </ul>
    </span>
  </div>
  <!-- <ul>
    <li
      v-for="page in pages"
      :key="page.key"
    >
      <RouterLink :to="page.path">{{ page.title }}</RouterLink>
      <span v-if="page.frontmatter.date">
        [ {{ (new Date(page.frontmatter.date)).toLocaleString() }} ]
      </span>
    </li>
  </ul> -->
</template>
  
<script>
import { usePages } from '@temp/pages'
export default {
  name: "TagList",
  setup() {
    const pages = usePages()
    if (__IS_DEBUG__) console.log(pages)
    return { pages }
  },
  // data() {
  //   return {
  //     pages: []
  //   }
  // },
  computed: {
    tags() {
      let tags = {};
      // 전체 게시글에서 태그들을 가져옵니다.
      for (let page of this.pages) {
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
