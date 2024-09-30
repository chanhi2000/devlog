<!-- .vuepress/components/Shield -->
<template>
  <img v-bind:alt="name" v-bind:src="url" />
</template>

<script>
export default {
  name: "Shield",
  data() {
    return {
      name: '',
      url: ''
    };
  },
  props: {
    logo: {
      type: String,
      required: true,
    }
  },
  methods: {
    async processData(logo = '') {
      if (logo == '') {
        console.warn(`no logo value found ...`);
        return;
      }

      const res = await fetch('/json/shields.json');
      const shields = await res.json() ?? [];
      const shieldFound = shields.find((e) => e.logo == logo) ?? {};
      this.name = shieldFound?.name;
      this.url = 
        `https://img.shields.io/badge/${shieldFound?.name}-${shieldFound?.colorHex}?logo=${shieldFound?.logo}&logoColor=white&style=flat-square`;
    }
  },
  mounted() {
    this.processData(this.logo)
  }
};
</script>