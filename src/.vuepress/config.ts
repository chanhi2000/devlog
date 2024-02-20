import * as dotenv from 'dotenv' 
import { defineUserConfig } from 'vuepress'
import { hopeTheme } from 'vuepress-theme-hope'
import { viteBundler } from '@vuepress/bundler-vite'
import { getDirname, path } from 'vuepress/utils'

/* plugins V2 */
import { registerComponentsPlugin } from '@vuepress/plugin-register-components';
// import { gitPlugin } from '@vuepress/plugin-git';
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics';
import { mediumZoomPlugin } from '@vuepress/plugin-medium-zoom';

/* plugins 3rd-party */
// import { copyrightPlugin } from "vuepress-plugin-copyright2";
// import { componentsPlugin } from "vuepress-plugin-components";
// import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";
// import anchorRightPlugin from 'vuepress-plugin-anchor-right';
// import { copyCodePlugin } from "vuepress-plugin-copy-code2";
// import { searchProPlugin } from "vuepress-plugin-search-pro";
import MdDefinePlugin from 'vuepress-plugin-markdown-define2';
import { usePagesPlugin } from 'vuepress-plugin-use-pages'

import {
  // head,
  navbarEn,
  sidebarEn,
} from './configs/index.js'

const __dirname = getDirname(import.meta.url)
const { description, version } = require('../../package.json')
dotenv.config()
const isProd = process.env.NODE_ENV === 'production'
const CONSTS = {
  __VERSION__: version
}
const imgLogoPath = '/images/ico-wind.svg'
// const imgLogoPath = 'https://avatars.githubusercontent.com/u/6296241?v=4'

export default defineUserConfig({
  define: {
     __BLOG_VERSION__: version, // reveal.js에서 같은 변수를 사용함으로 이름이 겹치지 않도록 정의
    __YOUTUBE_API_KEY__: process.env.YOUTUBE_API_KEY,
    __IS_DEBUG__: process.env.IS_DEBUG ?? false,
  },
  title: 'chanhi2000\'s devlog',
  description: description,
  head: [['link', { rel: 'icon', href: imgLogoPath }]],
  locales: {
    '/': {
      lang: "en-US"      
    }
  },
  bundler: viteBundler({}),
  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  theme: hopeTheme({
    fullscreen: true,
    // pure: true,
    logo: imgLogoPath,
    docsDir: '',
    lastUpdated: true,
    footer: 'MIT Licensed | Copyright © 2022-present <a href="https://github.com/chanhi2000">Chan Hee Lee</a>',
    displayFooter: true,
    // footerHtml: true,
    locales: {
      "/": {
        navbar: navbarEn,
        sidebar: sidebarEn,
      },
    },
    plugins: {
      components: {
        components: [
          "VidStack", "FontIcon", "Badge", "Share", "PDF", "SiteInfo", "VPCard", "VPBanner"
        ],
        componentOptions: {
          fontIcon: {
            assets: ["iconfont", "fontawesome", "fontawesome-with-brands"],
          }
        },
        rootComponents: {
          // backToTop: false,
        }
      },
      copyright: {
        author: 'Chan Hee Lee',
        license: 'MIT Licensed',
      },
      mdEnhance: {
        mark: true,
        tabs: true,
        demo: true,
        hint: true,
        tasklist: true,
        codetabs: true,
        component: true,
        chart: true,
        echarts: true,
        mermaid: true,
        katex: true,
        footnote: true,
        attrs: true,
        figure:true,
        flowchart: true,
        imgLazyload: true,
        imgSize: true,
        revealJs: {
          plugins: ["highlight", "math", "search", "notes", "zoom"],
        },
        sub: true,
        sup: true,
        vPre: true,
        vuePlayground: true,
        kotlinPlayground: true,
      },
      copyCode: {
        locales: {
          "/": {
            // Override copy button label text
            copy: "Copy Codes from code block",
          }
        }
      },
      nprogress: true,
      git: {
        updatedTime: true,
      },
      search: {
        isSearchable: (page) => page.path !== '/',
      },
      searchPro: {
        indexContent: true,
      },
      prismjs: {
        light: "material-light",
        dark: "dracula"
      }, 
      // backToTop: true,
    },
    breadcrumbIcon: true,

  }),
  clientConfigFile: path.resolve(__dirname, './client.ts'),
  markdown: {
    code: {
      lineNumbers: true,
    },
  },
  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    /*
    activeHeaderLinksPlugin({}),
    tocPlugin({}),
    containerPlugin({
      type: 'tip',
    }),
    gitPlugin({
      updatedTime: true,
    }),
    */
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    }),
    googleAnalyticsPlugin({
      id: 'G-XFRP81YMEP',
      debug: true
    }),
    mediumZoomPlugin({
      selector: ':not(.youtube-item):not(a) > img'
    }),
    /*
    prismjsPlugin({
      preloadLanguages: ['mermaid', 'kotlin', 'java', 'md'],
    }),
    searchPlugin({
      isSearchable: (page) => page.path !== '/',
      // getExtraFields: (page) => page.frontmatter.tags ?? [],
    }),
    seoPlugin({
    }),
    copyrightPlugin({
       author: 'Chan Hee Lee',
       license: 'MIT Licensed',
    }),
    mdEnhancePlugin({
      mark: true,
      tabs: true,
      demo: true,
      tasklist: true,
      codetabs: true,
      component: true,
      chart: true,
      echarts: true,
      mermaid: true,
      katex: true,
      footnote: true,
      attrs: true,
      container: true,
      figure:true,
      flowchart: true,
      imgLazyload: true,
      imgSize: true,
      revealJs: {
         plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      sub: true,
      sup: true,
    }),
    copyCodePlugin({
      locales: {
        "/": {
          // Override copy button label text
          copy: "Copy Codes from code block",
        }
      }
    }),
    searchProPlugin({
      indexContent: true,
    }),
    */
    MdDefinePlugin(CONSTS),
    usePagesPlugin({
      startsWith: '/'
    }),
  ],
})