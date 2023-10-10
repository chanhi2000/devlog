/**
 * Client app enhancement file.
 *
 * https://v1.vuepress.vuejs.org/guide/basic-config.html#app-level-enhancements
 */
import { defineClientConfig } from '@vuepress/client'
import { onMounted } from 'vue'
import express from 'express'


export default defineClientConfig({
  async enhance({ app, router, siteData }) {
    // if (!__VUEPRESS_SSR__) {
    // 
    // }
  },
  setup() {
    onMounted(() => {
      
    })
  },
  layouts: {

  },
  rootComponents: [

  ]
})
