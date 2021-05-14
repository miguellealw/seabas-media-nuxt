<template>
  <div class="remove-smooth-scroll">
    <gallery-header />
    <main class="w-3/4 mx-auto my-4 max-w-screen-lg mt-20 relative">
      <router-link to="/" class="uppercase block mb-5 text-xs text-gray-500">Home Page</router-link>

      <!-- Photography Section -->
      <div id="photography">
        <h3 class="heading-xs-uppercase">Photography</h3>
        <hr class="w-10 my-3" />

        <!-- Portraits Section -->
        <work-type-category
          category="Portraits"
          :images="images.portraits"
          :openGallery="openGallery"
          :media="media"
          sectionId="photography-portraits"
        />

        <!-- Urban Section -->
        <work-type-category
          category="Urban"
          :images="images.urban"
          :openGallery="openGallery"
          :media="media"
          sectionId="photography-urban"
        />
      </div>
    </main>

    <LightBox ref="lightbox" :media="media" :show-caption="true" :show-light-box="false" site-loading="Loading..." />
    <!-- <Footer /> -->
  </div>
</template>

<script>
import LightBox from '/components/LightBox/LightBox.vue'

import { portraitImageLinks, urbanImageLinks } from '../../utils/data-links'

// Components
import GalleryHeader from '/components/gallery/GalleryHeader.vue'
import WorkTypeCategory from '/components/gallery/WorkTypeCategory.vue'
import Footer from '/components/global/Footer'

// for getting lightbox to work
const portraitTotal = 12
const urbanTotal = 9

// create arrays of image src links
const portraits = portraitImageLinks.map((obj) => obj.src)
const urban = urbanImageLinks.map((obj) => obj.src)

export default {
  name: 'WorkGalleryPage',
  components: { GalleryHeader, WorkTypeCategory, Footer, LightBox },

  data: () => {
    return {
      images: { portraits, urban },
      media: [...portraitImageLinks, ...urbanImageLinks],
      mediaCount: {
        portraitCount: portraitImageLinks.length,
        urbanCount: urbanImageLinks.length,
      },
    }
  },

  mounted() {
    window.scrollTo(0, 0)
  },

  methods: {
    openGallery(galleryType, index) {
      if (galleryType == 'Portraits') {
        this.$refs.lightbox.showImage(index)
      } else if (galleryType == 'Urban') {
        const offsetIndex = portraitTotal + index
        this.$refs.lightbox.showImage(offsetIndex)
      }
    },
  },
}
</script>

<style scoped>
.remove-smooth-scroll {
  scroll-behavior: auto;
}
</style>
