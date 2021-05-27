<template>
  <div>
    <gallery-header :sections="sections" :galleries="galleries" />
    <main class="w-3/4 mx-auto my-4 max-w-screen-lg mt-20 relative">
      <router-link to="/" class="uppercase block mb-5 text-xs text-gray-500">Home Page</router-link>
      <NuxtChild :openGallery="openGallery" />
    </main>
    <LightBox ref="lightbox" :media="media" :show-caption="true" :show-light-box="false" site-loading="Loading..." />
    <Footer />
  </div>
</template>



<script>
import LightBox from '/components/LightBox/LightBox.vue'
import GalleryHeader from '/components/gallery/GalleryHeader.vue'
import WorkTypeCategory from '/components/gallery/WorkTypeCategory.vue'
import Footer from '/components/global/Footer'

import { mapState } from 'vuex'

// const SECTION_NAME = 'Photography'
// const SECTION_NAME = 'photography'
let sectionName

export default {
  components: { GalleryHeader, WorkTypeCategory, Footer, LightBox },
  methods: {
    /**
     * @params {string} imageLinkSrc - image link src that will be used to find index from media array
     */
    openGallery(imageLinkSrc) {
      // use media array since it contains a flattened array of all images from different gallereis,
      // therefore the link that corresponds with its index will be the index the light box will take

      try {
        sectionName = $nuxt.$route.name.split('-')[1]
        const media = this.$store.getters['galleries/media'](sectionName)
        const index = media.findIndex((link) => {
          return link.src === imageLinkSrc
        })

        if (index < 0) throw new Error('openGallery Index Not Found in media array')

        this.$refs.lightbox.showImage(index)
      } catch (e) {
        console.error('openGallery ERROR: ', e)
      }
    },
  },
  // map galleries and sections from state to props
  computed: {
    ...mapState({
      galleries: (state) => state.galleries.all,
      sections: (state) => state.galleries.sections,
    }),
    media() {
      sectionName = this.$nuxt.$route.name.split('-')[1]
      return this.$store.getters['galleries/media'](sectionName)
    },
  },
  mounted() {
    window.scrollTo(0, 0)
  },
}
</script>
