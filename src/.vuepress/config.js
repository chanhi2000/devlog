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
    repo: 'chanhi2000/devlog',
    repoLabel: 'Contribute!',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    sidebar: {
      '/info-banks/': getDocsNavBar('info-banks'),
      '/todo/': getDocsNavBar('todo'),
    },
    nav: [
      {
        text: '📖Info Banks',
        link: '/info-banks/',
      },
      {
        text: '✅Todo',
        link: '/todo/'
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
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    '@renovamen/vuepress-plugin-mermaid',
  ]
}
