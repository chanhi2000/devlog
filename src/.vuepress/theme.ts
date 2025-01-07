import { hopeTheme } from "vuepress-theme-hope";

import {
  // head,
  navbarEn,
  sidebarEn,
} from './configs/index.js'

const imgLogoPath = '/images/ico-wind.svg'

export default hopeTheme({
  fullscreen: true,
  logo: imgLogoPath,
  repo: 'chanhi2000/devlog',
  repoLabel: 'Github',  
  repoDisplay: true,
  lastUpdated: true,
  footer: 'MIT Licensed | Copyright © 2022-present <a href="https://github.com/chanhi2000">Chan Hee Lee</a>',
  hostname: "https://chanhi2000.github.io/",
  iconAssets: "fontawesome-with-brands",
  displayFooter: true,
  docsDir: 'src',
  navbar: navbarEn,
  sidebar: sidebarEn,
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
      // Facebook: "https://facebook.com/spamlove",
      // Instagram: "https://instagram.com/chanhi2000",
      Notion: {
        icon: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Notion-logo.svg',
        link: 'https://markiiimark.notion.site/MarkiiimarK-Fullstack-DevOps-c231ae6c157d4baba89a3713c92449dd'
      },
      Linkedin: "https://linkedin.com/in/chanhi2000",
      Gmail: "chanhi2000@gmail.com"
    }
  },
  metaLocales: {
    editLink: "Edit this page on GitHub",
  },
  plugins: {
    blog: true,
    sitemap: true, // 임시적으로 안됨
    // {
    //   excludePaths: ['/404.html']
    // },
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
      }
    },
    copyright: {
      author: 'Chan Hee Lee',
      license: 'MIT Licensed',
    },
    notice: {
      config: [
        /*{
         path: "/",
         title: "Notice Title",
         content: "Notice Content",
         actions: [
          {
             text: "Primary Action",
             link: "https://theme-hope.vuejs.press/",
             type: "primary",
          },
          { text: "Default Action" },
         ],
         fullscreen: true,
      }*/
     ]
    },
    prismjs: {
      themes: {
        light: "material-light",
        dark: "dracula",
      }
    },
    markdownHint: {
      alert: true,
      hint: true,
    },
    markdownImage: {
      lazyload: true,
      size: true,
      figure: true
    },
    markdownMath: {
      type: 'katex', 
      copy: false,
    },
    markdownTab: {
      tabs: true,
      codeTabs: true
    },
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      component: true,
      demo: true,
      echarts: true,
      flowchart: true,
      footnote: true,
      include: true,
      kotlinPlayground: true,
      mark: true,
      mermaid: true,
      plantuml: true,
      sandpack: true,
      spoiler: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      // tabs: true,
      tasklist: true,
      vPre: true,
      vuePlayground: true,
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
      createdTime: true,
    },
    search: {
      isSearchable: (page) => page.path !== '/',
    },
    photoSwipe: {},
    
    pwa: {
    /*
      showInstall: true,
      favicon: imgLogoPath,
      cacheHTML: true,
      cacheImage: true,
      appendBase: true,
      apple: {
        icon: imgLogoPath, // 512
        statusBarColor: "black",
      },
      msTile: {
        image: imgLogoPath, // 144
        color: "#ffffff",
      },
      manifest: {
        icons: [
          {
            src: imgLogoPath, // 512
            sizes: "512x512",
            purpose: "maskable",
            type: "image/svg",
          }, {
            src: imgLogoPath, // 192
            sizes: "192x192",
            purpose: "maskable",
            type: "image/svg",
          }, {
            src: imgLogoPath, // 512
            sizes: "512x512",
            type: "image/svg",
          }, {
            src: imgLogoPath, // 192
            sizes: "192x192",
            type: "image/svg",
          },
        ],
        shortcuts: [
          {
            name: "Demo",
            // eslint-disable-next-line @typescript-eslint/naming-convention
            short_name: "Demo",
            url: "/explore/newletter.html",
            icons: [
              {
                src: "/assets/icon/guide-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
            ],
          },
        ],
      },
    */
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
  }
})