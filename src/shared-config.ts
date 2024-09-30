// import UserConfig from '@vuepress/cli'
import { UserConfig } from 'vuepress';
import { getDirname, path } from 'vuepress/utils'
import { viteBundler } from '@vuepress/bundler-vite'
import { visualizer } from "rollup-plugin-visualizer";

/* plugins V2 */
import { registerComponentsPlugin } from '@vuepress/plugin-register-components';
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics';

/* plugins 3rd-party */
import MdDefinePlugin from 'vuepress-plugin-markdown-define2';

const __dirname = getDirname(import.meta.url)
const { description, version } = require('../package.json')
const CONSTS = {
  __VERSION__: version
}
const imgLogoPath = '/images/ico-wind.svg'

const sharedConfig: UserConfig = {
  define: {
     __BLOG_VERSION__: version, // reveal.js에서 같은 변수를 사용함으로 이름이 겹치지 않도록 정의
    __YOUTUBE_API_KEY__: process.env.YOUTUBE_API_KEY,
    __IS_DEBUG__: process.env.IS_DEBUG ?? false,
  },
  title: 'chanhi2000',
  description: description,
  head: [['link', { rel: 'icon', href: imgLogoPath }]],
  locales: {
    '/': {
      lang: "en-US"      
    }
  },
  cache: '.vuepress/.cache',
  bundler: viteBundler({
     viteOptions: {
      plugins: [ 
        visualizer({ 
          emitFile: true, // Automatically open the report in the browser
          filename: 'stats.html' // Output filename
        })
      ],
      optimizeDeps: {
        include: ['reveal.js']
      },
      build: {
        chunkSizeWarningLimit: 1200,
        rollupOptions: {
          external: ['vue'],
          output: {
            manualChunks(id) {
              // Chunk for searchIndex.js related to @vuepress/plugin-search
              if (id.includes('useSearchIndex')) {
                return 'searchIndex'; // This will create a chunk named 'searchIndex.js'
              }
   
              // Example: Chunk for JSX components (from previous example)
              if (id.includes('jsx')) {
                return 'jsxComponents';
              }
   
              // Example: Chunk for charting libraries
              if (id.includes('chart.js') || id.includes('echarts')) {
                return 'chartLibs';
              }
   
              // Example: Chunk for video libraries
              if (id.includes('dashjs') || id.includes('hls.js')) {
                return 'videoLibs';
              }
   
              // Example: Chunk for mermaid library
              if (id.includes('mermaid')) {
                return 'mermaidLib';
              }
   
              // Default vendor chunk for any node_modules dependency
              if (id.includes('node_modules')) {
                return 'vendor';
              }
            }
          },
        },
      },
    }
  }),
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
} 
export default sharedConfig  