<!-- .vuepress/components/MyGithubItems -->
<template>
  <ul>
    <li v-for="(item, i) in items" :key="i">
      <a v-bind:href="item.repoUrl" 
         target="_blank" rel="noopener noreferrer">
        {{ item.repo }}
        <span>
          <svg class="external-link-icon" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15"><path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path><polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon></svg>
          <span class="external-link-icon-sr-only">open in new window</span>
        </span>
      </a>: {{ item.desc }} 
      
      <GithubTags 
        v-if="item.hasTopics" 
        v-bind:tagItems="item.topics"/>
      <a v-if="item.hasOfficialSite" v-bind:href="item.officialSite" target="_blank" rel="noopener noreferrer">
        🌐Official Site
        <span>
          <svg class="external-link-icon" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15"><path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path><polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon></svg>
          <span class="external-link-icon-sr-only">open in new window</span>
        </span>
      </a>
    </li>
  </ul>
</template>
      
<script>
  import GithubTags from "./GithubTags.vue";
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