import { defineUserConfig } from 'vuepress'
import { getDirname, path } from 'vuepress/utils'
import { viteBundler } from '@vuepress/bundler-vite'
import { visualizer } from "rollup-plugin-visualizer"

/* plugins V2 */
import { registerComponentsPlugin } from '@vuepress/plugin-register-components';
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics';

/* plugins 3rd-party */
import MdDefinePlugin from 'vuepress-plugin-markdown-define2';

import theme from "./theme.js";

const __dirname = getDirname(import.meta.url)
const { description, version } = require('../../package.json')
const CONSTS = {
  __VERSION__: version
}

const imgLogoPath = '/images/ico-wind.svg'

export default defineUserConfig({
  clientConfigFile: path.resolve(__dirname, './client.ts'),
  define: {
    __BLOG_VERSION__: version, // reveal.js에서 같은 변수를 사용함으로 이름이 겹치지 않도록 정의
    __YOUTUBE_API_KEY__: process.env.YOUTUBE_API_KEY,
    __IS_DEBUG__: process.env.IS_DEBUG ?? false,
  },
  lang: "en-US",
  base: '/',
  title: 'chanhi2000',
  description: description,
  head: [['link', { rel: 'icon', href: imgLogoPath }]],
  cache: 'src/.vuepress/.cache',
  bundler: viteBundler({
    viteOptions: {
      plugins: [ 
        visualizer({ 
          emitFile: true, // Automatically open the report in the browser
          filename: 'stats.html' // Output filename
        })
      ],
      build: {
        // minify: false,
        // sourcemap: false,
        chunkSizeWarningLimit: 1200,
      }
    }
  }),
  theme,
  markdown: {
  },
  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    }),
    googleAnalyticsPlugin({
      id: 'G-XFRP81YMEP',
      debug: true
    }),
    MdDefinePlugin(CONSTS),
  ],
  extendsPage: (page) => {
  
  },
})