<!-- .vuepress/components/YoutubeItem -->
<template>
  <div class="youtube-item" 
    v-bind:id="vId"
    v-on:click="onSelectYT"
    v-if="!showEmbed"
  >
    <span class="youtube-item-watched">{{ vWatched }}</span>
    <img width="auto" height="80px" 
      v-bind:alt="thumbnailAlt" 
      v-bind:src="link.thumbnail"
    />
    <span class="youtube-item-title"
      v-html="vTitle"
    >
    </span>
    <span class="youtube-item-channel">
      <i>by <a v-bind:href="link.channel" class="youtube-item-channel-name">{{ vChannelName }}</a></i>
    </span>
  </div>
  <YouTube v-bind:id="vId"
    v-if="showEmbed"
  />
</template>

<script>
import YouTube from '../../../node_modules/vuepress-plugin-components/lib/client/components/YouTube'
export default {
  name: "YoutubeItem",
  components: { YouTube },
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
      this.vId = id
      this.vTitle = title
      this.vChannelId = channelId
      this.vChannelName = channelName
      this.thumbnailAlt = `thumb-${id}`
      this.link = {
          thumbnail: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
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
.youtube-item,.youtube-item-link {display:flex;align-items:center;justify-content:flex-start;}
.youtube-item-watched {font-size:0.75em;margin-right:1rem}
.youtube-item-title {width:auto;min-width:50%;max-width:70%;}
.youtube-item-channel {width:auto;min-width:120px;margin-left:auto;margin-top:auto;}
.youtube-item-channel > i {display:flex;align-items:flex-end;justify-content:center;flex-direction:column;font-size: 0.45em;}
.youtube-item-link,.youtube-item-title {margin-left:10px;}
img { width:auto;height:80px; }
</style>