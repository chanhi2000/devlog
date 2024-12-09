<!-- .vuepress/components/MyYouTubeItems -->
<template>
  <a v-bind:href="channel.url" target="_blank"
    v-if="channel.hasBanner" 
    v-bind:style="channel.bannerFormatted" 
    class="banner-visible-area ytd-c4-tabbed-header-renderer">
  </a>
  <figure>
    <a v-bind:href="channel.url" target="_blank" rel="noopener noreferrer">
      <img v-bind:src="channel.profile" v-bind:alt="channel.name" style="height:8vh" tabindex="0" loading="lazy">
    </a>
    <figcaption>{{ channel.name }}</figcaption>
  </figure>

  <details v-show="hasPlaylists"
    v-for="(p, i) in playlists" :key="i"
    class="hint-container details">
    <summary>{{ p.title }}</summary>
    <div class="container">
      <YouTubeItem v-for="(v, vi) in p.videos" :key="vi"
        v-bind:channelName="channel.name"
        v-bind:channelId="channel.id" 
        v-bind:id="v.id"
        v-bind:title="v.title" />
    </div>
  </details>

  <details v-if="hasVideos"
    class="hint-container details">
    <summary>목록 (총 {{ videos.length  }} 개)</summary>
    <div class="container">
      <YouTubeItem v-for="(v, vi) in videos" 
        class="yt-item"
        :key="vi"
        v-bind:channelName="channel.name"
        v-bind:channelId="channel.id" 
        v-bind:id="v.id"
        v-bind:title="v.title" />
    </div>
  </details>  
  <hr>
</template>

<script>
  import YouTubeItem from './YoutubeItem.vue';
  export default {
    name: "MyYouTubeItems",
    components: { YouTubeItem },
    props: {
      jsonName: {
        type: String,
        required: true,
      }
    },
    data() {
      return {
        channel: {},
        hasVideos: false,
        videos: [],
        hasPlaylists: false,
        playlists: []
      }
    },
    methods: {
      async fetchData(jsonName = 'none') {
        if (jsonName == 'none') {
          console.warn(`no such file name found ...`);
          return;
        }
        
        const res = await fetch(`/json/youtube/${jsonName}.json`);
        const ytInfo = await res.json();
        const YOUTUBE_URL = 'https://www.youtube.com';
        const titlePredicate = (v) => {
          return {
            id: v.id,
            title: v.title.replace(/[`]([^`]*)[`]/g, '<code>$1</code>')
          }
        };

        this.channel = {
          id: ytInfo.channel.id, 
          name: ytInfo.channel.name,
          profile: ytInfo.channel.profile,
          hasBanner: !(ytInfo.channel?.banner == null || ytInfo.channel?.banner == ""),
          banner: ytInfo.channel?.banner ?? '',
          bannerFormatted: `background-image:url(${ytInfo.channel?.banner})`,
          url: `${YOUTUBE_URL}/@${ytInfo.channel.id}`
        };
        this.hasVideos = !(ytInfo.videos == null || ytInfo.videos?.length == 0);
        this.videos = ytInfo.videos.map(titlePredicate);
        this.hasPlaylists = !(ytInfo.playlists == null || ytInfo.playlists?.length == 0);
        this.playlists = ytInfo.playlists?.map((e) => {
          return {
            title: e.title,
            videos: e.videos.map(titlePredicate)
          }
        });
      }
    },
    mounted() {
      this.fetchData(this.jsonName);
    },
  }
</script>

<style scoped>
* {--yt-max-width:519px;--yt-max-height:289px}
.hint-container.details {
  list-style: none;
}
.container { 
  display:grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  overflow:hidden;
}
.container > .yt-item  {
  max-width: 100%;
}
.banner-visible-area.ytd-c4-tabbed-header-renderer {
  height: calc(60vw/6.2 - 1px);
}
.banner-visible-area.ytd-c4-tabbed-header-renderer {
  display:block;position:relative;
}
.ytd-c4-tabbed-header-renderer {
  background-position:center;
  background-size:cover;
}
</style>