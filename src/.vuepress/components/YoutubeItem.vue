<!-- .vuepress/components/YoutubeItem -->
<template>
  <div class="youtube-item" :id="info.id">
    <span class="youtube-item-watched">{{ info.isWatched }}</span>
    <a class="youtube-item-link" v-bind:href="info.link.video">
      <img width="auto" height="80px" v-bind:alt="info.thumbnailAlt" v-bind:src="info.link.thumbnail"/>
      <span class="youtube-item-title">{{ info.title }}</span>
    </a>
    <span class="youtube-item-channel"><i>by <a v-bind:href="info.link.channel" class="youtube-item-channel-name">{{ info.channelName }}</a></i></span>
  </div>
</template>

<script>
// import { Badge } from 'vuepress-plugin-components/lib/client/components/Badge'
export default {
  name: "YoutubeItem",
  // components: { Badge },
  props: {
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: false,
    },
    channelName: {
      type: String,
      required: true,
    },
    channelId: {
      type: String,
      required: true,
    },
    isWatched: {
      type: Boolean,
      required: false,
    }
  },
  computed: {
    info() {
      return {
        id: this.id, 
        title: this.title,
        channelName: this.channelName,
        channelId: this.channelId,
        thumbnailAlt: `thumb-${this.id}`,
        link: {
          thumbnail: `https://i.ytimg.com/vi/${this.id}/hqdefault.jpg`,
          video: `https://www.youtube.com/watch?v=${this.id}`,
          channel: `https://www.youtube.com/@${this.channelId}`
        },
        isWatched: (this.isWatched ?? false) ? `✅` : `❌`,
      }
    }
  }
};
</script>

<style scoped>
.youtube-item,.youtube-item-link {display:flex;align-items:center;justify-content:flex-start;}
.youtube-item-title {width:auto;min-width:50%;max-width:70%;}
.youtube-item-channel {width:auto;min-width:120px;margin-left:auto;}
.youtube-item-channel > i {display:flex;align-items:flex-end;justify-content:center;flex-direction:column;}
.youtube-item-link,.youtube-item-title {margin-left:10px;}
img { width:auto;height:80px; }
</style>