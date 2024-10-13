<!-- .vuepress/components/DevGithubItems -->
<template>
  <div v-if="hasData"
    class="card-title" style="background-color: rgb(49, 54, 62); color: rgb(255, 255, 255);">
    <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" role="img" xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 496 512" class="custom-icon svg-inline--fa fa-github fa-w-16">
        <path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
    </svg>
    <div class="card-title-text">
      <div class="round-borders wrapper">
        <div class="select-title-wrapper">
          <span class="select-title"> GitHub Trending</span>
          <span class="select-icon">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" role="img" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512" class="svg-inline--fa fa-caret-down fa-w-10">
              <path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
            </svg>
          </span>
        </div>
      </div>
    </div>
    <div class="pull-right external-icons">
      <div class="title-icon external-icon" style="color: rgba(255, 255, 255, 0.7);">
        <a href="https://github.com/trending">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="external-link-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
            class="svg-inline--fa fa-external-link-alt fa-w-16">
            <path fill="currentColor" d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"></path>
          </svg>
        </a>
      </div>
      <div class="title-icon refresh-icon" style="color: rgba(255, 255, 255, 0.7);">
        <a @click="doRefresh">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="sync-alt" role="img" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512" class="fa-refresh-icon svg-inline--fa fa-sync-alt fa-w-16">
            <path fill="currentColor" d="M370.72 133.28C339.458 104.008 298.888 87.962 255.848 88c-77.458.068-144.328 53.178-162.791 126.85-1.344 5.363-6.122 9.15-11.651 9.15H24.103c-7.498 0-13.194-6.807-11.807-14.176C33.933 94.924 134.813 8 256 8c66.448 0 126.791 26.136 171.315 68.685L463.03 40.97C478.149 25.851 504 36.559 504 57.941V192c0 13.255-10.745 24-24 24H345.941c-21.382 0-32.09-25.851-16.971-40.971l41.75-41.749zM32 296h134.059c21.382 0 32.09 25.851 16.971 40.971l-41.75 41.75c31.262 29.273 71.835 45.319 114.876 45.28 77.418-.07 144.315-53.144 162.787-126.849 1.344-5.363 6.122-9.15 11.651-9.15h57.304c7.498 0 13.194 6.807 11.807 14.176C478.067 417.076 377.187 504 256 504c-66.448 0-126.791-26.136-171.315-68.685L48.97 471.03C33.851 486.149 8 475.441 8 454.059V320c0-13.255 10.745-24 24-24z"></path>
          </svg>
        </a>
      </div>
    </div>
  </div>
  <div v-if="hasData"
    class="card-body">
    <DevLoadingvSpinner v-if="isLoading"/>
    <div v-else class="gh-list">
      <div class="gh-item" 
        v-for="(item, i) in items" :key="i">
        <div class="meta-main">
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
        <div class="meta-sub">
          <a @click="doCopyGithubJson(item.repoFullName)">
            <FontIcon 
              icon="iconfont icon-json"
            />
          </a>
        </div>
        
      </div>
    </div>
  </div>  
</template>

<script>
import DevLoadingvSpinner from './DevLoadingvSpinner.vue'
import DevoApi from './js/api/DevoApi'

export default {
  name: "DevGithubItems",
  components: { DevLoadingvSpinner },
  data() {
    return {
      isLoading: false,
      hasData: true,
      items: null
    }
  },
  methods: {
    async onFetchData() {
      this.isLoading = true;
      const fetchedItems = await DevoApi.fetchGithubRepos(true);
      const fetchedItemsHackerNews = await DevoApi.fetchHackernews();
      const fetchedItemsGithub = fetchedItemsHackerNews
        .filter((e) => e.link.includes(`${DevoApi.BASEURL_GITHUB}/`))
      const fetchedGithubColor = await DevoApi.fetchGitubColors();
      
      for (const [i, e] of fetchedItemsGithub.entries()) {
        const fullName = e.link.replace(DevoApi.REGEX_GITHUB_BASEURL, '')
        const jsonRes = await DevoApi.fetchGithubDetail(fullName);
        if (jsonRes == undefined || jsonRes == null) continue;
        if (__IS_DEBUG__) console.log(JSON.stringify(jsonRes))
        const _hasLanguage = (jsonRes.language != null || jsonRes.language == '');
        const _langColor = fetchedGithubColor[jsonRes.language]?.color ?? '000000';
        let l = (_hasLanguage)  
          ? {
            color: `background-color: ${_langColor}`,
            is: `${jsonRes.language}`
          } : {}
        fetchedItemsGithub[i] = {
           forks: {
             count: jsonRes.fork,
             link: `${jsonRes.html_url}/fork`
           },
           hasLanguage: _hasLanguage,
           language: l,
           repo: {
             description: jsonRes.description,
             link: jsonRes.html_url,
             name: jsonRes.name,
             owner: jsonRes.owner?.login ?? '',  
           },
           repoFullName: jsonRes.full_name,
           stars: {
             count: jsonRes.stargazers_count,
             link: jsonRes.stargazers_url,
           },
           todayStars: jsonRes.todayStars
        }
      }
      const _fetchedItemsGithub = fetchedItemsGithub.filter(DevoApi.filterHackernewsPredicate) ?? []

      this.isLoading = false;
      this.items = fetchedItems.map((e) => {
        let hasLanguage = e.language != null;
        let l = (hasLanguage)  
          ? {
            color: `background-color: ${e.language.color}`,
            is: `${e.language.is}`
          } : {}
        return {
          forks: {
            count: e.forks.count,
            link: `${DevoApi.BASEURL_GITHUB}${e.repo.link}/forks`
          },
          hasLanguage: hasLanguage,
          language: l,
          repo: {
            description: `${e.repo.description}`,
            link: `${DevoApi.BASEURL_GITHUB}${e.repo.link}`,
            name: e.repo.name,
            owner: e.repo.owner,
          },
          repoFullName: `${e.repo.owner}/${e.repo.name}`,
          stars: {
            count: e.stars.count,
            link: `${DevoApi.BASEURL_GITHUB}${e.repo.link}/stargazers`
          },
          todayStars: e.todayStars
        }
      }).concat(_fetchedItemsGithub);
      this.hasData = this.items.length != 0;
    },
    async doCopyGithubJson(fullName = '') {
      const repoInfo = await DevoApi.fetchGithubDetail(fullName);
      const coreData = await this.renderJson(repoInfo)
      const jsonData = JSON.stringify(coreData, null, 2)
          .replace(/,\n\s\s\s\s/g, ', ')
          .replace(/\[\n    \"/g, '[\"')
          .replace(/\n  \]/g, ']');
      if (__IS_DEBUG__) console.log(jsonData)
      await this.copyToClipboard(jsonData)
    },
    async renderJson(data = {}) { 
      console.log(data)
      return {
        repo: data?.full_name ?? _fullName,
        desc: data?.description ?? '',
        officialSite: data?.homepage ?? '',
        topics: data?.topics ?? [],
        avatar: data?.owner.avatar_url ?? '',
        banner: '',
      }
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
    async doRefresh() {
      if (__IS_DEBUG__) console.log('doRefresh DevGithubItems!');
      await this.onFetchData();
    }
  },
  mounted() {
    this.onFetchData()
  },
}
</script>

<style scoped>
  @import './devnews.css';
</style>
<style scoped>
.action-copy {padding: 2rem;}
</style>
