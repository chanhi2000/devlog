import { defaultTheme } from '@vuepress/theme-default'
// import { viteBundler } from '@vuepress/bundler-vite'
import { getDirname, path } from '@vuepress/utils'
/* plugins V2 */
import { tocPlugin } from '@vuepress/plugin-toc';
// import { backToTopPlugin } from '@vuepress/plugin-back-to-top';
import { nprogressPlugin } from '@vuepress/plugin-nprogress';
import { containerPlugin } from '@vuepress/plugin-container';
import { registerComponentsPlugin } from '@vuepress/plugin-register-components';
import { gitPlugin } from '@vuepress/plugin-git';
import { mediumZoomPlugin } from '@vuepress/plugin-medium-zoom';
import { searchPlugin } from '@vuepress/plugin-search';
import { activeHeaderLinksPlugin } from '@vuepress/plugin-active-header-links';
import { prismjsPlugin } from '@vuepress/plugin-prismjs';
/* plugins 3rd-party */
import { copyrightPlugin } from "vuepress-plugin-copyright2";
import { componentsPlugin } from "vuepress-plugin-components";
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";
import anchorRightPlugin from 'vuepress-plugin-anchor-right';

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
const { description } = require('../../package');
const isProd = process.env.NODE_ENV === 'production'

export default {
  title: 'Devlog by Chan',
  description: description,
  
  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  theme: defaultTheme({
    logo: 'https://avatars.githubusercontent.com/u/6296241?v=4',
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
      tasklist: true,
      card: true,
      mermaid: true,
      katex: true,
      footnote: true,
      attrs: true,
      container: true,
      figure:true,
      imgLazyload: true,
      imgSize: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      sub: true,
      sup: true,
    }),
    anchorRightPlugin(),
  ],
}