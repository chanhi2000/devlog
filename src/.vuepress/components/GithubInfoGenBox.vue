<!-- .vuepress/components/GithubInfoGenBox -->
<template>
  <details
    class="hint-container details"
  >
    <div class="container container-h-align-center">
      <div class="container container-v-align-center">
        <FontIcon icon="iconfont icon-github"/>
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
        <pre 
          class="line-numbers"
          copy-code-registered="">
          <code class="language-json"
            v-html="renderedContent"></code>
        </pre>
      </div>
      <!-- <button type="button" class="search-pro-button" role="search" aria-label="Search">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon search-icon" viewBox="0 0 1024 1024" fill="currentColor" aria-label="search icon">
          <path d="M192 480a256 256 0 1 1 512 0 256 256 0 0 1-512 0m631.776 362.496-143.2-143.168A318.464 318.464 0 0 0 768 480c0-176.736-143.264-320-320-320S128 303.264 128 480s143.264 320 320 320a318.016 318.016 0 0 0 184.16-58.592l146.336 146.368c12.512 12.48 32.768 12.48 45.28 0 12.48-12.512 12.48-32.768 0-45.28"></path>
        </svg>
        <div class="placeholder">Search</div>
      </button> -->
    </div>
    <summary><FontIcon icon="iconfont icon-github"/>GithubInfo</summary>
  </details>
</template>

<script>
import FontIcon from '../../../node_modules/vuepress-plugin-components/lib/client/components/FontIcon'
import * as Prism from 'prismjs'
import 'prismjs/components/prism-json'
import 'prismjs/plugins/line-numbers/prism-line-numbers'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'

export default {
  name: "GithubInfoGenBox",
  components: { FontIcon },
  data() {
    return {
      text: '',
      renderedContent: '',
    }
  },
  methods: {
    async fetchData() {
      console.log('fetchData ...');
      const _repoEndpoint = this.text?.replace(/\s/g, '') ?? ''
      if (_repoEndpoint == '') {
        console.warn('no repoEndpoint FOUND!')
        return
      }
      const apiUrl = 'https://api.github.com/repos'
      try {
        const response = await fetch(`${apiUrl}/${_repoEndpoint}`)
        const data = await response.json();
        const repoInfo = {
          repo: data.full_name ?? _repoEndpoint,
          desc: data.description ?? '',
          officialSite: data.homepage ?? '',
          topics: data.topics ?? []
        }
        const jsonData = JSON.stringify(repoInfo, null, 2)
          .replace(/,\n\s\s\s\s/g, ', ')
          .replace(/\[\n    \"/g, '[\"')
          .replace(/\n  \]/g, ']');
        console.log(jsonData)
        await this.renderResponseToCodeSnippet(jsonData)
      } catch (e) {
        console.warn('Error:', e)
        return
      };
    },
    renderResponseToCodeSnippet(json) {
      console.log(`renderResponseToCodeSnippet ... json: ${json}`)
      // loadLanguages(['json']);
      console.log(`load language successfully ...`)
      const code = json;
      const html = Prism.highlight(code, Prism.languages['json'], 'json');
      console.log(html)
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
.box.box-input input[type=text]:focus {border-color: }
.box {

}
</style>
