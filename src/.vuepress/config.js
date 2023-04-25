const { description } = require('../../package');
const { getDocsNavBar } = require('./utils');

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Devlog by Chan',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  theme: '@vuepress/theme-default',
  themeConfig: {
    lang: 'ko-KR',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: '최근변경일',
    sidebar: {
      '/g4e/': getDocsNavBar('g4e'),
      '/catalogs/': getDocsNavBar('catalogs'),
      '/explore/': getDocsNavBar('explore'),
      '/academics/': getDocsNavBar('academics'),
    },
    nav: [
      {
        text: '🔖Tags',
        link: '/tags/'
      },
      {
        text: '📖G4E',
        link: '/g4e/',
      },
      {
        text: '🗂️Catalogs',
        items: [
          {
            text: '🏰Portfolio',
            items: [
              {
                text: 'Intro',
                link: '/catalogs/portfolio/',
              },
            ],
          }, {
            text: '🎈TIL',
            items: [
              {
                text: 'Intro',
                link: '/catalogs/til/',
              }
            ],
          }
        ],
        link: '/catalogs/',
      }, {
        text: '🌐Explore',
        link: '/explore/',
      }, {
        text: '🎓Academics',
        items: [
          {
            text: 'Intro',
            link: '/academics/'
          },
          {
            text: 'PHYS034',
            items: [
              {
                text: 'Intro',
                link: '/academics/PHYS034/'
              },
              {
                text: 'Week 01',
                link: '/academics/PHYS034/week01/' 
              },
              {
                text: 'Week 01: Lecture',
                link: '/academics/PHYS034/week01/lecture' 
              },
            ],
          }
        ],
      },{
        text: '📍Misc.',
        items: [
          {
            text: '🕶️Github',
            link: 'https://github.com/chanhi2000',
          }, {
            text: '🅽Notion',
            link: 'https://www.notion.so/MarkiiimarK-c231ae6c157d4baba89a3713c92449dd',
          },{
            text: "📢Tell Me What's Wrong",
            link: "https://github.com/chanhi2000/devlog/issues",
          }
        ]
      }
    ],
    displayAllHeaders: true,
    smoothScroll: true,
  },
  
  markdown: {
    lineNumbers: true,
    extendMarkdown: md => {
      md.set({ breaks: true })
      md.use(require('markdown-it-task-lists'));
      md.use(require('markdown-it-katexx'), {});
    },
    toc: { includeLevel: [1, 2, 3] },
    plugins: {
      '@centerforopenscience/markdown-it-video': {} // markdown에 @[youtube](유튜브URL) 형태로 박으면 동영상이 나온다
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    "@vuepress/back-to-top",
    [
      "@vuepress/plugin-last-updated",
      {
        transformer: (timestamp, lang) => {
          // Don't forget to install moment yourself
          const moment = require('moment')
          moment.locale(lang)
          return moment(timestamp).fromNow()
        },
      }, {
        dateOptions: {
          hour12: false
        }
      }
  ],
    // "@vuepress/plugin-last-updated",
    '@vuepress/plugin-medium-zoom',
    '@renovamen/vuepress-plugin-mermaid',
  ]
}
