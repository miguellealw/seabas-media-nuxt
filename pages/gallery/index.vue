<template>
  <div class="remove-smooth-scroll">
    <gallery-header />
    <main class="w-3/4 mx-auto my-4 max-w-screen-lg mt-20 relative">
      <router-link to="/" class="uppercase block mb-5 text-xs text-gray-500">Home Page</router-link>

      <!-- Photography Section -->
      <div id="photography">
        <h3 class="heading-xs-uppercase">Photography</h3>
        <hr class="w-10 my-3" />

        <div v-for="(gallery, index) in galleries" :key="index">
          <work-type-category
            :category="gallery.title"
            :images="images[gallery.slug]"
            :galleryPath="gallery.path"
            :openGallery="openGallery"
            sectionId="photography-portraits"
          />
        </div>
      </div>
    </main>

    <LightBox ref="lightbox" :media="media" :show-caption="true" :show-light-box="false" site-loading="Loading..." />
    <Footer />
  </div>
</template>

<script>
import LightBox from '/components/LightBox/LightBox.vue'

import { createImageLink } from '/utils/data-links.js'

// Components
import GalleryHeader from '/components/gallery/GalleryHeader.vue'
import WorkTypeCategory from '/components/gallery/WorkTypeCategory.vue'
import Footer from '/components/global/Footer'

let galleries, media, images

export default {
  name: 'WorkGalleryPage',
  components: { GalleryHeader, WorkTypeCategory, Footer, LightBox },

  async asyncData({ $content, params, error }) {
    try {
      galleries = await $content('gallery').fetch()

      // create media arr (src and thumb links) for LightBox
      media = galleries.map((gallery) => {
        return gallery.images.map((image) => createImageLink(gallery.path + image))
      })
      media = media.flat()

      // for WorkTypeCategory
      images = galleries.reduce((acc, gallery) => {
        return {
          ...acc,
          [gallery.slug]: gallery.images.map((image) => createImageLink(gallery.path + image).src),
        }
      }, {})

      // console.log('MEDIA', media)
      // console.log('IMAGES', images)
    } catch (e) {
      error({ Message: 'Gallery not found' })
    }

    console.log('GALL', galleries)

    return { galleries, media, images }
  },

  mounted() {
    window.scrollTo(0, 0)
  },

  methods: {
    /**
     * @params {string} imageLinkSrc - image link src that will be used to find index from media array
     */
    openGallery(imageLinkSrc) {
      // use media array since it contains a flattened array of all images from different gallereis,
      // therefore the link that corresponds with its index will be the index the light box will take
      const index = this.media.findIndex((link) => link.src == imageLinkSrc)
      this.$refs.lightbox.showImage(index)
    },
  },
}
</script>

<style scoped>
.remove-smooth-scroll {
  scroll-behavior: auto;
}
</style>
