import { onMounted } from 'vue'
import { defineClientConfig } from "vuepress/client"

export default defineClientConfig({
  async enhance({ app, router, siteData }) {
    router.beforeEach((to) => {
      // console.log("before navigation");
    });

    router.afterEach((to) => {
      // console.log("after navigation");
    });
  },
  setup() {
    onMounted(() => {
      // use DOM API after mounted
      document.querySelector("#app");
    })
  },
  layouts: {

  },
  rootComponents: [
  ]
})
