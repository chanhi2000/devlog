<!-- .vuepress/components/YouTubeInfoGenBox.vue  -->
<template>
  <details
    class="hint-container details"
  >
    <div class="container container-h-align-center">
      <div class="container container-v-align-center">
        <VPIcon icon="iconfont icon-play"/>
        <div class="container-h-align-center box box-input">
          <input
            v-model="text"
            type="text"
            placeholder="https://youtube.com/@<CHANNEL_ID>"
            class="h-spacing-1"
          />
        </div>
        <p class="action container-v-align-center">
          <a 
            @click="fetchData"
            class="action-button primary" 
            aria-label="Generate">
            Generate
          </a>
        </p>
        <div
          class="codebox language-json" data-ext="json"
        >
<button type="button" class="copy-code-button" aria-label="Copy Codes from code block" data-copied="Copied"><div class="copy-icon"></div></button>        
<pre 
  class="language-json"
  copy-code-registered="">
<code v-html="renderedContent"></code>
<!-- 무조건 indentation 이런식으로 -->
</pre>
        </div>
      </div>
    </div>
    <summary><VPIcon icon="iconfont icon-play"/> YouTubeInfo</summary>
  </details>
</template>
<script>
// import VPIcon from '../../../node_modules/vuepress-plugin-components/lib/client/components/VPIcon'
import { VPIcon } from '../../../node_modules/@vuepress/plugin-icon/lib/client'
import * as Prism from 'prismjs'
import axios from 'axios'
import 'prismjs/components/prism-json'
import 'prismjs/plugins/line-numbers/prism-line-numbers'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
export default {
  name: "YouTubeInfoGenBox",
  components: { VPIcon },
  data() {
    return {
      text: '',
      renderedContent: '',
    }
  },
  methods: {
    async fetchData() {
      const channelId = this.text?.replace(/\s/g, '') ?? ''
      if (__IS_DEBUG__) console.log('fetchData ...');

      try {        
        const response = await axios({
            method: "get",
            url: `https://www.youtube.com/@${channelId}`
        })

        if (!response.ok) {
          const err = await response.json();
          const jsonData = JSON.stringify(err, null, 2)

          if (err.error) await this.renderResponseToCodeSnippet(jsonData)
          return
          // throw new Error('Failed to fetch channel information')
        }

        const data = await response.json();

        if (data.items.length === 0) {
          throw new Error('Channel not found');
        }

        const channel = data.items[0].snippet;
        const channelInfo = {
          channelName: channel.title,
          profile: channel.thumbnails.default.url,
          banner: channel.thumbnails.high.url,
        };
        const jsonData = JSON.stringify(channelInfo, null, 2)
        await this.renderResponseToCodeSnippet(jsonData)
      } catch (error) {
        console.error(error.message);
        await this.renderResponseToCodeSnippet(JSON.stringify({}, null, 2))
      }
    },
    renderResponseToCodeSnippet(json) {
      if (__IS_DEBUG__) console.log(`renderResponseToCodeSnippet ... json: ${json}`)
      const code = json;
      const html = Prism.highlight(code, Prism.languages['json'], 'json');
      if (__IS_DEBUG__) console.log(html)
      this.renderedContent = html
    },
  }, 
  mounted() {
    Prism.highlightAll()
  }
}
</script>
<style scoped>
.container {width:100%;display:flex;justify-content:center;align-items:center;}
.container-v-align-center {display:flex !important;flex-direction:row;}
.container-h-align-center {display:flex !important;flex-direction:column;}
.codebox {width:auto;min-width:3.5rem;}
.h-spacing-1 {margin:0 1rem;}
details.details .action-button {
  display: flex;
  align-items:center;
  font-size: 1.2rem;
  padding: 0.8rem 1.6rem;
  border-width: 2px;
  border-style: solid;
  border-radius: 4px;
  transition: background-color var(--t-color);
  box-sizing: border-box;
  margin:0 1rem;
}
details.details .action-button.primary {
  color: var(--c-bg);
  background-color: var(--c-brand);
  border-color: var(--c-brand);
}
.box.box-input input[type=text] {padding:0 1rem;height:5rem;max-width:10rem;}    
</style>


