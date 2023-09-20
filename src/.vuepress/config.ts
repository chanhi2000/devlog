import { defaultTheme } from '@vuepress/theme-default'
// import { viteBundler } from '@vuepress/bundler-vite'
import { getDirname, path } from '@vuepress/utils'
/* plugins V2 */
import { tocPlugin } from '@vuepress/plugin-toc';
import { nprogressPlugin } from '@vuepress/plugin-nprogress';
import { containerPlugin } from '@vuepress/plugin-container';
import { registerComponentsPlugin } from '@vuepress/plugin-register-components';
import { gitPlugin } from '@vuepress/plugin-git';
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics';
import { mediumZoomPlugin } from '@vuepress/plugin-medium-zoom';
import { searchPlugin } from '@vuepress/plugin-search';
import { activeHeaderLinksPlugin } from '@vuepress/plugin-active-header-links';
import { prismjsPlugin } from '@vuepress/plugin-prismjs';
/* plugins 3rd-party */
import { copyrightPlugin } from "vuepress-plugin-copyright2";
import { componentsPlugin } from "vuepress-plugin-components";
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";
import anchorRightPlugin from 'vuepress-plugin-anchor-right';
import { copyCodePlugin } from "vuepress-plugin-copy-code2";
import MdDefinePlugin from 'vuepress-plugin-markdown-define2';
import { searchProPlugin } from "vuepress-plugin-search-pro";


// import { mermaidWrapperPlugin } from 'vuepress-plugin-mermaid-wrapper';
// import { mermaidPlugin } from "@renovamen/vuepress-plugin-mermaid";
// import { katexPlugin } from "@renovamen/vuepress-plugin-katex";
/* markdownExtended plugins 3rd-party */
// import markdownItTaskListsPlugin from 'markdown-it-task-lists'; // markdown 체크리스트 
// import markdownITKatexxPlugin from 'markdown-it-katexx'; // markdown katex 변환 
// import markdownItVideoPlugin from '@centerforopenscience/markdown-it-video'; // markdown에 @[youtube](유튜브URL) 형태로 박으면 동영상이 나온다

import {
  // head,
  navbarEn,
  sidebarEn,
} from './configs/index.js'

const __dirname = getDirname(import.meta.url);
const { description, version } = require('../../package.json');
const isProd = process.env.NODE_ENV === 'production'
const CONSTS = {
  __VERSION__: version
}
const imgLogoPath = '/images/ico-wind.svg'
// const imgLogoPath = 'https://avatars.githubusercontent.com/u/6296241?v=4'

export default {
  title: 'Devlog by Chan',
  description: description,
  head: [['link', { rel: 'icon', href: imgLogoPath }]],
  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  theme: defaultTheme({
    logo: imgLogoPath,
    docsDir: '',
    lastUpdated: true,
    lastUpdatedText: '최근변경일',
    backToHome: '홈으로 이동',
    // footer: 'MIT Licensed | Copyright © 2022-present <a href="https://github.com/chanhi2000">Chan Hee Lee</a>',
    // footerHtml: true,
    sidebar: sidebarEn,
    sidebarDepth: 2,
    navbar: navbarEn,
  }),
  
  markdown: {
    code: {
      lineNumbers: true,
    },
  },
  
  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    activeHeaderLinksPlugin({}),
    tocPlugin({}),
    nprogressPlugin(),
    // backToTopPlugin(),
    containerPlugin({
      type: 'tip',
      locales: {
        '/': {
          defaultInfo: 'TIP',
        },
        '/zh/': {
          defaultInfo: '提示',
        },
        '/kr/': {
          defaultInfo: '팁',
        }
      }
    }),
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    }),
    gitPlugin({
      updatedTime: true,
    }),
    googleAnalyticsPlugin({
      id: 'G-XFRP81YMEP',
      debug: true
    }),
    mediumZoomPlugin({}),
    searchPlugin({
      isSearchable: (page) => page.path !== '/',
      // getExtraFields: (page) => page.frontmatter.tags ?? [],
    }),
    prismjsPlugin({
      preloadLanguages: ['mermaid', 'kotlin', 'java', 'md'],
    }),
    copyrightPlugin({
      author: 'Chan Hee Lee',
      license: 'MIT Licensed',
    }),
    componentsPlugin({
      components: ["VideoPlayer", "YouTube", "FontIcon", "Badge", "Share", "PDF"],
      componentOptions: {
        fontIcon: {
          assets: ["iconfont", "fontawesome", "fontawesome-with-brands"]
        }
      },
      rootComponents: {
        backToTop: true,
      }
    }),
    mdEnhancePlugin({
      mark: true,
      tabs: true,
      demo: true,
      tasklist: true,
      codetabs: true,
      card: true,
      mermaid: true,
      katex: true,
      footnote: true,
      attrs: true,
      container: true,
      figure:true,
      flowchart: true,
      imgLazyload: true,
      imgSize: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      sub: true,
      sup: true,
    }),
    anchorRightPlugin(),
    copyCodePlugin({
      locales: {
        "/": {
          // Override copy button label text
          copy: "Copy Codes from code block",
        }
      }
    }),
    MdDefinePlugin(CONSTS),
    searchProPlugin({
      indexContent: true,
      
    }),
  ],
}