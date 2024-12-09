<!-- .vuepress/components/YoutubeItem -->
<template>
  <!-- <span class="youtube-item-watched">{{ vWatched }}</span> -->
  <div class="youtube-item" 
    v-bind:id="vId"
    v-on:click="onSelectYT"
    v-if="!showEmbed"
  >
    <div class="youtube-item-title"
      v-bind:style="link.backgroundThumb">
      <p v-html="vTitle"></p>
      <span class="youtube-item-channel">
        <i>by <a v-bind:href="link.channel" class="youtube-item-channel-name">{{ vChannelName }}</a></i>
      </span>
    </div>
  </div>

  <zck v-bind:src="vId"
    v-bind:title="vTitle"
    v-if="showEmbed"
  />
</template>

<script>
// import VidStack from '../../../node_modules/vuepress-plugin-components/lib/client/components/VidStack'
import { VidStack } from '../../../node_modules/vuepress-theme-hope/node_modules/vuepress-plugin-components/lib/client'
export default {
  name: "YoutubeItem",
  components: { VidStack },
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
  data() {
    return {
      vId: '',
      vTitle: '',
      vChannelId: '',
      vChannelName: '',
      thumbnailAlt: '',
      link: {},
      isWatched: false,
      showEmbed: false
    }
  },
  methods: {
    async render(id, title, channelId, channelName, isWatched = false, showEmbed = false) {
      console.log(`render ... ${id}, ${title}, ${channelId}, ${channelName}`)
      if (!id || !channelId) {
        console.warn(`unable to render ... `);
        return;
      }
      this.vId = `youtube/${id}`
      this.vTitle = title
      this.vChannelId = channelId
      this.vChannelName = channelName
      this.thumbnailAlt = `thumb-${id}`
      this.link = {
          thumbnail: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
          backgroundThumb: `width:var(--yt-max-width);height:auto;background-image: linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.75)), url(https://i.ytimg.com/vi/${id}/hqdefault.jpg)`,
          video: `https://www.youtube.com/watch?v=${id}`,
          channel: `https://www.youtube.com/@${channelId}`
      }
      this.vWatched = (isWatched) ? `✅` : `❌`
      this.showEmbed = showEmbed
    },
    onSelectYT() {
      console.log(`onSelectYT ... ${this.vId}`)
      // const targetId = e.currentTarget.id;
      this.showEmbed = !this.showEmbed;
      console.log(`onSelectYT ... showEmbed: ${this.showEmbed}`)
    }
  },
  computed: {
    /*
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
        showEmbed: this.showEmbed ?? false
      }
    }
    */
  },
  mounted() {
    this.render(this.id, this.title, this.channelId, this.channelName)
  }
};
</script>

<style scoped>
* {--yt-max-width:519px;--yt-max-height:289px}
.youtube-item {margin:0.5rem 0;;max-width:var(--yt-max-width);max-height:var(--yt-max-height);}
.youtube-item,.youtube-item-link {display:flex;align-items:center;justify-content:center;}
.youtube-item-watched {font-size:0.75em;margin-right:1rem}
.youtube-item-title {
  background-position:center;background-size:cover;background-repeat:no-repeat;
  width:auto;max-width:var(--yt-max-width);max-height:var(--yt-max-height);padding:4.5rem 0;color:#eaeaea;
  display:flex;align-items:center;justify-content:center;flex-direction:column;
}
.youtube-item-title > p {width:auto;font-size:1.12em;line-height:1.2;text-align:center;padding:0 1rem;}
.youtube-item-channel {width:auto;min-width:120px;}
.youtube-item-channel > i {display:flex;align-items:center;justify-content:center;flex-direction:column;font-size:0.45em;}
.youtube-item-link,.youtube-item-title {margin-left:10px;}
</style>