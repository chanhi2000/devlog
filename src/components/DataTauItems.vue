<!-- .vuepress/components/DataTauItems -->
<template>
    <div class="card-title" style="background-color: rgb(49, 54, 62); color: rgb(12, 176, 176, 0.7);">
      <!-- <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="hacker-news-square" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="custom-icon svg-inline--fa fa-hacker-news-square fa-w-14">
        <path fill="currentColor" d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM21.2 229.2H21c.1-.1.2-.3.3-.4 0 .1 0 .3-.1.4zm218 53.9V384h-31.4V281.3L128 128h37.3c52.5 98.3 49.2 101.2 59.3 125.6 12.3-27 5.8-24.4 60.6-125.6H320l-80.8 155.1z" class=""></path>
      </svg> -->
      <img src="https://datatau.net/static/img/datatau.png" width="27" height="31">
      <div class="card-title-text">
        <div data-v-3564cb40="" class="round-borders wrapper">
          <div data-v-3564cb40="" class="select-title-wrapper">
            <span data-v-3564cb40="" class="select-title"> DataTau</span>
          </div>
        </div>
      </div>
      <div class="pull-right external-icons">
        <div class="title-icon external-icon" style="color: rgba(12, 176, 176, 0.7);">
          <a href="https://datatau.net/new">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="external-link-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
            class="svg-inline--fa fa-external-link-alt fa-w-16">
            <path fill="currentColor" d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"></path>
            </svg>
          </a>
        </div>
        <div class="title-icon refresh-icon" style="color: rgba(12, 176, 176, 0.7);">
          <a @click="doRefresh">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="sync-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="fa-refresh-icon svg-inline--fa fa-sync-alt fa-w-16">
              <path fill="currentColor" d="M370.72 133.28C339.458 104.008 298.888 87.962 255.848 88c-77.458.068-144.328 53.178-162.791 126.85-1.344 5.363-6.122 9.15-11.651 9.15H24.103c-7.498 0-13.194-6.807-11.807-14.176C33.933 94.924 134.813 8 256 8c66.448 0 126.791 26.136 171.315 68.685L463.03 40.97C478.149 25.851 504 36.559 504 57.941V192c0 13.255-10.745 24-24 24H345.941c-21.382 0-32.09-25.851-16.971-40.971l41.75-41.749zM32 296h134.059c21.382 0 32.09 25.851 16.971 40.971l-41.75 41.75c31.262 29.273 71.835 45.319 114.876 45.28 77.418-.07 144.315-53.144 162.787-126.849 1.344-5.363 6.122-9.15 11.651-9.15h57.304c7.498 0 13.194 6.807 11.807 14.176C478.067 417.076 377.187 504 256 504c-66.448 0-126.791-26.136-171.315-68.685L48.97 471.03C33.851 486.149 8 475.441 8 454.059V320c0-13.255 10.745-24 24-24z" class=""></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
    <div class="card-body">
      <DevLoadingvSpinner v-if="isLoading"/>
      <div v-else class="hn-list">
        <div class="hn-item"
          v-for="(item, i) in items" :key="i">
          <div class="title-row">
            <div class="title">
              <a v-bind:href="item.link" v-bind:title="item.title"> {{ item.title }}</a>
            </div>
            <div class="site-string">
              <a v-bind:href="item.link"> ({{item.siteString}}) </a>
            </div>
          </div>
          <!-- <div class="meta-data">
            {{ item.score }} by <a v-bind:href="item.user.link" class="user-link"> {{ item.user.name }}</a> | {{ item.age }}  | <a v-bind:href="item.threadLink" class="thread-link"> item.commentCount</a>
          </div> -->
        </div>
      </div>
    </div>
    
  </template>
  
  <script>
  import DevLoadingvSpinner from './DevLoadingvSpinner.vue'
  import DataTauApi from './js/api/DataTauApi'

  export default {
    name: "DataTauItems",
    components: { DevLoadingvSpinner },
    data() {
      return {
        isLoading: false,
        items: null
      }
    },
    methods: {
      async onFetchData() {
        if (__IS_DEBUG__) console.log('onFetchData ...');
        const fetchedItems = await DataTauApi.fetchDataTau()
        this.items = fetchedItems.map((e) => {
          return {
            age: e.age,
            link: e.description,
            score: e.score,
            siteString: e.siteString,
            threadLink: e.threadLink,
            title: e.title,
            user: {
               link: e.user.link,
               name: e.user.name,
            }
          }
        });
      },
      async doRefresh() {
        if (__IS_DEBUG__) console.log('doRefresh DevHackerNewsItems!');
        await this.onFetchData();
      },
    },
    mounted() {
      this.onFetchData()
    },
  }
  </script>
  
  <style scoped>
    @import './devnews.css';
  </style>