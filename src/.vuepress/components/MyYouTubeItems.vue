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
      <span>
        <svg class="external-link-icon" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15">
          <path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path>
          <polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon>
        </svg>
        <span class="external-link-icon-sr-only">open in new window</span>
      </span>
    </a>
    <figcaption>{{ channel.name }}</figcaption>
  </figure>

  <details class="hint-container details">
    <summary>목록 (총 {{ videos.length  }} 개)</summary>
    <YouTubeItem v-for="v in videos"
      v-bind:channelName="channel.name"
      v-bind:channelId="channel.id" 
      v-bind:id="v.id"
      v-bind:title="v.title" />
  </details>
</template>

<script>
  import YouTubeItem from "./YoutubeItem.vue";
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
        videos: [],
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

        this.channel = {
          id: ytInfo.channel.id, 
          name: ytInfo.channel.name,
          profile: ytInfo.channel.profile,
          hasBanner: !(ytInfo.channel?.banner == null || ytInfo.channel?.banner == ""),
          banner: ytInfo.channel?.banner ?? '',
          bannerFormatted: `background-image:url(${ytInfo.channel?.banner})`,
          url: `${YOUTUBE_URL}/@${ytInfo.channel.id}`
        };
        this.videos = ytInfo.videos;
      }
    },
    mounted() {
      this.fetchData(this.jsonName);
    },
  }
</script>

<style scoped>
.banner-visible-area.ytd-c4-tabbed-header-renderer {
  height: calc((60vw - 240px)/6.2 - 1px);
}
.banner-visible-area.ytd-c4-tabbed-header-renderer {
  display:block;position:relative;
}
.ytd-c4-tabbed-header-renderer {
  background-position:center;
  background-size:cover;
}
</style>