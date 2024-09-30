<!-- .vuepress/components/MyGithubItems -->
<template>
  <ul>
    <li v-for="(item, i) in items" :key="i">
      <a v-bind:href="item.repoUrl" 
         target="_blank" rel="noopener noreferrer">
        {{ item.repo }}
      </a>: {{ item.desc }} 
      
      <GithubTags 
        v-if="item.hasTopics" 
        v-bind:tagItems="item.topics"/>
      <a v-if="item.hasOfficialSite" v-bind:href="item.officialSite" target="_blank" rel="noopener noreferrer">
        🌐Official Site
      </a>
    </li>
  </ul>
</template>
      
<script>
  import GithubTags from './GithubTags.vue'
  export default {
    name: "MyGithubItems",
    components: { GithubTags },
    props: {
      jsonName: {
        type: String,
        required: true,
      }
    },
    data() {
      return {
        items: null,
      }
    },
    methods: {
      async fetchData(jsonName = 'none') {
        if (jsonName == 'none') {
          console.warn(`no such file name found ...`);
          return;
        }
        
        const res = await fetch(`/json/github/${jsonName}.json`);
        const fetchedItems = await res.json();
        
        const GITHUB_BASE_URL = "https://github.com";
        this.items = fetchedItems.map((e) => {
          return {
            repoUrl: `${GITHUB_BASE_URL}/${e.repo}`,
            repo: e.repo,
            desc: e.desc,
            hasTopics: e.topics?.length > 0,
            topics: e.topics?.join(";") ?? [],
            hasOfficialSite: !(e.officialSite == null || e.officialSite == ""),
            officialSite: e.officialSite,
          }
        });
      }
    },
    mounted() {
      this.fetchData(this.jsonName);
    },
  };
</script>