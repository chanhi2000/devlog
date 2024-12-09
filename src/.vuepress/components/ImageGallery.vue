<!-- .vuepress/components/ImageGallery -->
<template>
<div class="image-preview">
  <img v-for="(img, imgi) in images" :key="imgi"
    v-bind:class="c"
    v-bind:id="imgi"
    v-bind:src="img" />
</div>
</template>
<script>
export default {
  name: "ImageGallery",
  components: {  },
  props: {
    paths: {
      type: String,
      required: true,
    },
    separator: {
      type: String,
      required: false,
      default: '\n'
    },
    col: {
      type: String,
      required: false,
      default: '3'
    },
    isOneRow: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    return {
      images: [],
      c: '',
    }
  },
  methods: {
    async fetchData(imgsPath = '', separator='', col="3", isOneRow=false) {
      this.images = imgsPath?.trim().split((separator === '') ? '\n' : separator)?.map((e) => e.trim()) ?? []
      const len = [...this.images].length
      if (isOneRow) {
        this.c = `col-${len}`;
        return;
      }
      switch (len) {
      case 6:
      case 8:
      case 10: this.c = `col-${len/2}`;break;
      default: this.c = `col-3`;break;
      }
    }
  },
  mounted() {
    this.fetchData(this.paths, this.separator, this.col, this.isOneRow);
  },
}
</script>
<style>
.image-preview { flex-direction:row;display:flex;justify-content:space-evenly;align-items:center;flex-wrap:wrap; }
.image-preview > img { box-sizing:border-box;padding:9px;border-radius:16px; }
img.col-3 { width:calc(100%/3)!important; }
img.col-4 { width:calc(100%/4)!important; }
img.col-5 { width:calc(100%/5)!important; }
img.col-6 { width:calc(100%/6)!important; }
img.col-7 { width:calc(100%/7)!important; }
img.col-8 { width:calc(100%/8)!important; }
@media (max-width: 719px) {
  .image-preview > img { width:calc(100%/2)!important; }
}
@media (max-width: 419px) {
  .image-preview > img { width:calc(100%/2)!important; }
}
</style>

