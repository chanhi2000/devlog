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
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
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
      '/info-banks/': getDocsNavBar('info-banks'),
      '/todo/': getDocsNavBar('todo'),
      '/site/': getDocsNavBar('site'),
    },
    nav: [
      {
        text: '📖Info Banks',
        link: '/info-banks/',
      },
      {
        text: '✅Todo',
        link: '/todo/',
      }, {
        text: '🌐Site',
        link: '/site/',
      }, {
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
      md.use(require('markdown-it-task-lists'))
    },
    toc: { includeLevel: [1, 2, 3] },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    "@vuepress/back-to-top",
    ["@vuepress/plugin-last-updated",
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
