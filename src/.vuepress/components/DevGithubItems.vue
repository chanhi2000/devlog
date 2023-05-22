<!-- .vuepress/components/DevGithubItems -->
<template>
  <div class="gh-list">
    <div class="gh-item" v-for="item in items">
      <div class="title">
        <h3 class="repo-name"><a v-bind:href="item.repo.link"><span class="text-normal"> {{ item.repo.owner }} /</span> {{ item.repo.name }} </a></h3>
      </div>
      <div class="description">
        {{ item.repo.description }}
      </div>
      <div class="meta-row text-grey">
        <span class="language m-r-16" v-if="item.hasLanguage">
          <span class="language-color inline-block" v-bind:style="item.language.color"></span>
          <span class="language-text">{{ item.language.is }}</span>
        </span>
        <div class="icon-with-text inline-block m-r-16 stars">
          <a v-bind:href="item.repo.link">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="svg-inline--fa fa-star fa-w-18"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" class=""></path></svg>
            <span>{{ item.stars.count }}</span>
          </a>
        </div>
        <div class="icon-with-text inline-block m-r-16 forks">
          <a v-bind:href="item.forks.link">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="code-branch" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="svg-inline--fa fa-code-branch fa-w-12"><path fill="currentColor" d="M384 144c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 36.4 24.3 67.1 57.5 76.8-.6 16.1-4.2 28.5-11 36.9-15.4 19.2-49.3 22.4-85.2 25.7-28.2 2.6-57.4 5.4-81.3 16.9v-144c32.5-10.2 56-40.5 56-76.3 0-44.2-35.8-80-80-80S0 35.8 0 80c0 35.8 23.5 66.1 56 76.3v199.3C23.5 365.9 0 396.2 0 432c0 44.2 35.8 80 80 80s80-35.8 80-80c0-34-21.2-63.1-51.2-74.6 3.1-5.2 7.8-9.8 14.9-13.4 16.2-8.2 40.4-10.4 66.1-12.8 42.2-3.9 90-8.4 118.2-43.4 14-17.4 21.1-39.8 21.6-67.9 31.6-10.8 54.4-40.7 54.4-75.9zM80 64c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16zm0 384c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zm224-320c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16z" class=""></path></svg>
            <span>{{ item.forks.count }}</span>
          </a>
        </div>
        <div class="icon-with-text inline-block pull-right stars-today">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="svg-inline--fa fa-star fa-w-18"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" class=""></path></svg>
          <span>{{ item.todayStars }} stars today</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DevGithubItems",
  data() {
    return {
      items: null
    }
  },
  methods: {
    async fetchData() {
      const res = await fetch("https://devo.ams3.digitaloceanspaces.com/github.json");
      const fetchedItems = await res.json();

      let langRustItems = await (await fetch("/json/lang-rust.json")).json();
      let langSwiftItems = await (await fetch("/json/lang-swift.json")).json();
      let langPwshItems = await (await fetch("/json/lang-pwsh.json")).json();
      
      let repoNamesToExclude = [
        ...langRustItems.map((e) => e.repo), 
        ...langSwiftItems.map((e) => e.repo),
        ...langPwshItems.map((e) => e.repo)
      ];

      const GITHUB_BASE_URL = "https://github.com";
      this.items = fetchedItems.filter((e) => 
        !repoNamesToExclude.includes(e.repo.link)
      ).map((e) => {
        let hasLanguage = e.language != null;
        let l = (hasLanguage)  
          ? {
            color: `background-color: ${e.language.color}`,
            is: `${e.language.is}`
          } : {}
        return {
          forks: {
            count: e.forks.count,
            link: `${GITHUB_BASE_URL}/${e.repo.link}/forks`
          },
          hasLanguage: hasLanguage,
          language: l,
          repo: {
            description: `${e.repo.description}`,
            link: `${GITHUB_BASE_URL}/${e.repo.link}`,
            name: e.repo.name,
            owner: e.repo.owner,
          },
          stars: {
            count: e.stars.count,
            link: `${GITHUB_BASE_URL}/${e.repo.link}/stargazers`
          },
          todayStars: e.todayStars
        }
        
      });
    }
  },
  mounted() {
    this.fetchData()
  },
}
</script>

<style scoped>

.gh-item { margin: 0;font-size:16px;padding:16px 0;text-align:left;}
.gh-item .title h3 { padding-top:0; }
.gh-item .description { display:inline-block;font-size:14px;margin-bottom:12px;padding:4px 0;width:100%;overflow-wrap:break-word;}
.gh-item .meta-row { font-size:12px; }
.gh-item .language-color { width:12px;height:12px;border-radius:50%;margin-right:4px;vertical-align:-10%; }
.meta-row {display:block;}
h3.repo-name { font-size:20px;font-weight:600;margin:0;word-break:break-word; }
.inline-block { display:inline-block; }
.m-r-16 { margin-right:16px; }
.pull-right { float:right;margin-left:auto; }


html.dark .gh-item { border-bottom: 1px solid rgba(223,227,232,.17647058823529413) }
html.dark .gh-item .description {color: #999!important; }
html.dark .repo-name a { color: #7aace4}
</style>