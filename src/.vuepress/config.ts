import sharedConfig from '../shared-config'
import * as dotenv from 'dotenv' 
import { defineUserConfig } from 'vuepress'
import { hopeTheme } from 'vuepress-theme-hope'
import { getDirname, path } from 'vuepress/utils'

import {
  // head,
  navbarEn,
  sidebarEn,
} from './configs/index.js'

const __dirname = getDirname(import.meta.url)
dotenv.config()
const imgLogoPath = '/images/ico-wind.svg'
// const imgLogoPath = 'https://avatars.githubusercontent.com/u/6296241?v=4'

export default defineUserConfig({
  ...sharedConfig,
  clientConfigFile: path.resolve(__dirname, './client.ts'),
  theme: hopeTheme({
    fullscreen: true,
    logo: imgLogoPath,
    docsDir: '',
    lastUpdated: true,
    footer: 'MIT Licensed | Copyright © 2022-present <a href="https://github.com/chanhi2000">Chan Hee Lee</a>',
    displayFooter: true,
    // footerHtml: true,
    repo: 'chanhi2000/devlog',
    repoLabel: 'Github',  
    repoDisplay: true,
    locales: {
      "/": {
        navbar: navbarEn,
        sidebar: sidebarEn,
      },
    },
    encrypt: {
      config: {

      }
    },
    breadcrumbIcon: true,
    blog: {
      intro: 'https://chanhi2000.github.io',
      description: "프로그램이 작성되는 환경부터 배포되는 환경까지 적용하는 개발자 이찬희 입니다.",
      avatar: 'https://avatars.githubusercontent.com/u/6296241?v=4',
      // roundAvatar: true,
      medias: {
        GitHub: "https://github.com/chanhi2000",
        Facebook: "https://facebook.com/spamlove",
        Instagram: "https://instagram.com/chanhi2000",
        Linkedin: "https://linkedin.com/in/chanhi2000",
        Gmail: "chanhi2000@gmail.com"
      }
    },
    plugins: {
      blog: true,
      components: {
        components: [
          "VidStack", "FontIcon", "Badge", "Share", "PDF", "SiteInfo", "VPCard", "VPBanner"
        ],
        componentOptions: {
          fontIcon: {
            assets: [
              "fontawesome", 
              "fontawesome-with-brands",
              "/iconfont.css", 
              "/iconfont-more.css"
            ],
          }
        },
        rootComponents: {
          notice: [
            // {
            //   path: "/",
            //   title: "Notice Title",
            //   content: "Notice Content",
            //   actions: [
            //     {
            //       text: "Primary Action",
            //       link: "https://theme-hope.vuejs.press/",
            //       type: "primary",
            //     },
            //     { text: "Default Action" },
            //   ],
            //   fullscreen: true,
            // }
          ]
        }
      },
      copyright: {
        author: 'Chan Hee Lee',
        license: 'MIT Licensed',
      },
      mdEnhance: {
        align: true,
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
        /* 
        revealJs: {
          plugins: ["highlight", "math", "search", "notes", "zoom"],
        },
        */
        sub: true,
        sup: true,
        vPre: true,
        vuePlayground: true,
        sandpack: true,
        kotlinPlayground: true,
        include: true
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
        createdTime: false,
        updatedTime: false,
      },
      search: {
        isSearchable: (page) => page.path !== '/',
      },
      /* 
      searchPro: {
        indexContent: true,
        locales: {
          "/": {
            placeholder: "Start Searching",
          }
        }
      },
      */
      prismjs: {
        light: "material-light",
        dark: "dracula"
      }
      // backToTop: true,
    }
  }),
  markdown: {
    code: {
      lineNumbers: true,
    },
  },
})