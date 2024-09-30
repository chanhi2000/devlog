<!-- .vuepress/components/ShieldsGroup -->
<template>
  <p align="center">
    <Shield v-for="(logo, i) in items" v-bind:key="i"
      v-bind:logo="logo"/>
  </p>
</template>
  
<script>
import Shield from "./Shield.vue";

export default {
  name: "ShieldsGroup",
  components: { Shield },
  data() {
    return {
      items: [],
    };
  },
  props: {
    logos: {
      type: String,
      required: true,
    }
  },
  methods: {
    async processData(logos = '') {
      if (logos == '') {
        console.warn(`no logo value found ...`);
        return;
      }
      const _logos = logos.split(',') ?? [];

      const res = await fetch('/json/shields.json');
      const shields = await res.json() ?? [];
      const shieldsFound = shields.filter((e) => _logos.includes(e.logo)).map((e) => e.logo) ?? [];
      this.items = shieldsFound;
    }
  },
  mounted() {
    this.processData(this.logos)
  }
};
</script>