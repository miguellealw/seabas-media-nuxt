<template>
  <ul>
    <li v-for="(section, sectionIndex) in storeSections" :key="sectionIndex" :id="section.slug">
      <hr class="w-10 my-3" />
      <h1 class="heading-xs-uppercase">{{ section.name }}</h1>
      <hr class="w-10 my-3" />

      <div v-for="(gallery, index) in section.galleries" :key="index">
        <work-type-category
          :category="gallery.title"
          :images="storeImages[gallery.slug]"
          :workType="section.name"
          :galleryPath="gallery.path"
          :galleryTitle="gallery.title"
          :openGallery="openGallery"
          :sectionId="`${section.slug}-${gallery.slug}`"
        />
      </div>
    </li>
  </ul>
</template>

<script>
import LightBox from '/components/LightBox/LightBox.vue'

import { createLink } from '/utils/data-links.js'

// Components
import GalleryHeader from '/components/gallery/GalleryHeader.vue'
import WorkTypeCategory from '/components/gallery/WorkTypeCategory.vue'
import Footer from '/components/global/Footer'

import { mapState } from 'vuex'

let galleries, media, images, imageLinks, isVideo, srcLinks
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
  layout: 'gallery',
  components: { GalleryHeader, WorkTypeCategory, Footer, LightBox },

  // computed: mapState(['galleries/testNum']),
  computed: {
    ...mapState({
      storeGalleries: (state) => state.galleries.all,
      storeSections: (state) => state.galleries.sections,
      storeImages: (state) => state.galleries.galleryData,
      storeMedia: (state) => state.galleries.media,
    }),
  },

  props: {
    openGallery: {
      type: Function,
      required: true,
    },
  },

  async asyncData({ $content, params, error, store }) {
    try {
      galleries = await $content('gallery').fetch()
      // sort galleries based on position
      galleries.sort((g1, g2) => g1.position - g2.position)

      store.commit('galleries/setGalleries', galleries)

      // get galleries of each section
      // TODO: figure out how to put all state in store
      store.commit('galleries/setSections', [
        {
          name: 'Photography',
          slug: 'photography',
          galleries: [...getSection(galleries, 'Photography').sort((g1, g2) => g1.position - g2.position)],
        },
        {
          name: 'Videos',
          slug: 'videos',
          galleries: [...getSection(galleries, 'Video').sort((g1, g2) => g1.position - g2.position)],
        },
        {
          name: 'Graphic Design',
          slug: 'graphic_design',
          galleries: [...getSection(galleries, 'Graphic Design').sort((g1, g2) => g1.position - g2.position)],
        },
      ])

      // for images array will contain src links only for WorkTypeCategory
      // TODO: figure out how to put all state in store
      images = galleries.reduce((acc, gallery) => {
        imageLinks = gallery.images.flat()
        isVideo = gallery.section === 'Video'
        srcLinks = isVideo
          ? imageLinks.map((link) => createLink(link, false).src)
          : imageLinks.map((link) => createLink(`${gallery.path}/${getFileName(link)}`).src)

        return {
          ...acc,
          [gallery.slug]: srcLinks,
        }
      }, {})

      store.commit('galleries/setGalleryData', images)

      // create media arr (src and thumb links) for LightBox
      // TODO: figure out how to put all state in store
      media = galleries
        .map((gallery) => {
          imageLinks = gallery.images.flat()
          return imageLinks.map((link) => createLink(gallery.path + `/${getFileName(link)}`))
        })
        .flat()

      console.log('MEDIA IN INDEX PAGE', media)

      store.commit('galleries/setMedia', media)
    } catch (e) {
      error({ Message: 'Gallery not found' })
    }

    // console.log('GALL', galleries)
    // console.log('MEDIA', media)
    // console.log('IMAGES', images)
    // console.log('SECTIONS', sections)

    return { galleries, media, images }
  },

  mounted() {
    window.scrollTo(0, 0)
  },
}
</script>

<style scoped>
.remove-smooth-scroll {
  scroll-behavior: auto;
}
</style>
