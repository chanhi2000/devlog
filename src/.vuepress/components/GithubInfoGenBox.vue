<!-- .vuepress/components/GithubInfoGenBox -->
<template>
  <details
    class="hint-container details"
  >
    <div class="container container-h-align-center">
      <div class="container container-v-align-center">
        <VPIcon icon="iconfont icon-github"/>
        <div class="container-h-align-center box box-input">
          <input
            v-model="text"
            type="text"
            placeholder="https://github.com/<USER>/<REPO>"
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
    <summary><VPIcon icon="iconfont icon-github"/> GithubInfo</summary>
  </details>
</template>

<script>
// import VPIcon from '../../../node_modules/vuepress-plugin-components/lib/client/components/FontIcon'
// import { Notice } from '../../../node_modules/@vuepress/plugin-notice/lib/client/components'
import { VPIcon } from '../../../node_modules/@vuepress/plugin-icon/lib/client'
import * as Prism from 'prismjs'

import 'prismjs/components/prism-json'
import 'prismjs/plugins/line-numbers/prism-line-numbers'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
export default {
  name: "GithubInfoGenBox",
  components: { VPIcon },
  data() {
    return {
      text: '',
      renderedContent: '',
    }
  },
  methods: {
    async fetchData() {
      if (__IS_DEBUG__) console.log('fetchData ...');
      const _repoEndpoint = this.text?.replace(/\s/g, '') ?? ''
      if (_repoEndpoint == '') 
        throw new Error('no repoEndpoint FOUND!')
      
      const apiUrl = 'https://api.github.com/repos'
      try {
        const response = await fetch(`${apiUrl}/${_repoEndpoint}`)
        const data = await response.json();
        const repoInfo = {
          repo: data.full_name ?? _repoEndpoint,
          desc: data.description ?? '',
          officialSite: data.homepage ?? '',
          topics: data.topics ?? [],
          avatar: data.owner.avatar_url ?? '',
          banner: '',
        }
        const jsonData = JSON.stringify(repoInfo, null, 2)
          .replace(/,\n\s\s\s\s/g, ', ')
          .replace(/\[\n    \"/g, '[\"')
          .replace(/\n  \]/g, ']');
        if (__IS_DEBUG__) console.log(jsonData)
        await this.renderResponseToCodeSnippet(jsonData)
      } catch (e) {
        console.warn('Error:', e)
        await this.renderResponseToCodeSnippet(JSON.stringify({}, null, 2))
      };
    },
    renderResponseToCodeSnippet(json) {
      if (__IS_DEBUG__) console.log(`renderResponseToCodeSnippet ... json: ${json}`)
      const code = json;
      const html = Prism.highlight(code, Prism.languages['json'], 'json');
      if (__IS_DEBUG__) console.log(html)
      this.renderedContent = html
    }
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
/* .box.box-input input[type=text]:focus {border-color: } */
</style>
