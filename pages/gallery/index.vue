<template>
  <div>
    <gallery-header :galleries="galleries" />
    <main class="w-3/4 mx-auto my-4 max-w-screen-lg mt-20 relative">
      <router-link to="/" class="uppercase block mb-5 text-xs text-gray-500">Home Page</router-link>

      <ul>
        <!-- TODO: slugify section name (section.section) for id -->
        <!-- <li v-for="(section, sectionIndex) in sections" :key="sectionIndex" :id="section.section"> -->
        <li v-for="(section, sectionIndex) in sections" :key="sectionIndex">
          <!-- <h1 class="heading-xs-uppercase">Photography</h1> -->
          <hr class="w-10 my-3" />
          <h1 class="heading-xs-uppercase">{{ section[0].section }}</h1>
          <hr class="w-10 my-3" />

          <div v-for="(gallery, index) in section" :key="index">
            <work-type-category
              :category="gallery.title"
              :images="images[gallery.slug]"
              :work-type="section[0].section"
              :galleryPath="gallery.path"
              :galleryTitle="gallery.title"
              :openGallery="openGallery"
              :sectionId="'photography-' + gallery.slug"
            />
          </div>
        </li>
      </ul>
    </main>

    <LightBox ref="lightbox" :media="media" :show-caption="true" :show-light-box="false" site-loading="Loading..." />
    <Footer />
  </div>
</template>

<script>
import LightBox from '/components/LightBox/LightBox.vue'

import { createLink } from '/utils/data-links.js'

// Components
import GalleryHeader from '/components/gallery/GalleryHeader.vue'
import WorkTypeCategory from '/components/gallery/WorkTypeCategory.vue'
import Footer from '/components/global/Footer'

let galleries, media, images, imageLinks
let sections = []

function getFileName(link) {
  if (!link.includes('https')) return link

  let first_link_arr = link.split('/')
  let filename = first_link_arr[first_link_arr.length - 1]

  return filename
}

// gets galleries from specified section
function getSection(galleries, section) {
  return galleries.filter((gallery) => gallery.section === section)
}

export default {
  name: 'WorkGalleryPage',
  components: { GalleryHeader, WorkTypeCategory, Footer, LightBox },

  async asyncData({ $content, params, error }) {
    try {
      galleries = await $content('gallery').fetch()

      // get galleries of each section
      sections = [
        [...getSection(galleries, 'Photography').sort((g1, g2) => g1.position - g2.position)],
        [...getSection(galleries, 'Video').sort((g1, g2) => g1.position - g2.position)],
        [...getSection(galleries, 'Graphic Design').sort((g1, g2) => g1.position - g2.position)],
      ]

      // sort galleries based on position
      galleries.sort((g1, g2) => g1.position - g2.position)

      // for images array will contain src links only for WorkTypeCategory
      images = galleries.reduce((acc, gallery) => {
        imageLinks = gallery.images.flat()

        if (gallery.section === 'Video') {
          // create video links
          return {
            ...acc,
            [gallery.slug]: imageLinks.map((link) => createLink(gallery.path + `/${getFileName(link)}`, false).src),
          }
        }

        return {
          ...acc,
          [gallery.slug]: imageLinks.map((link) => createLink(gallery.path + `/${getFileName(link)}`).src),
        }
      }, {})

      // create media arr (src and thumb links) for LightBox
      media = galleries.map((gallery) => {
        imageLinks = gallery.images.flat()
        return imageLinks.map((link) => createLink(gallery.path + `/${getFileName(link)}`))
      })
      // flatten array of arrays into 1 array
      media = media.flat()

      // console.log('MEDIA', media)
      // console.log('IMAGES', images)
    } catch (e) {
      error({ Message: 'Gallery not found' })
    }

    // console.log('GALL', galleries)
    // console.log('SECTIONS', sections)

    return { galleries, media, images, sections }
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
