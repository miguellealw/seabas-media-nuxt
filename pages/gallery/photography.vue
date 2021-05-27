<template>
  <ul>
    <li>
      <hr class="w-10 my-3" />
      <h2 class="heading-xs-uppercase">{{ section.name }}</h2>
      <hr class="w-10 my-3" />

      <div v-for="(gallery, index) in section.galleries" :key="index">
        <work-type-category
          :category="gallery.title"
          :images="images[gallery.slug]"
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
// Components
import WorkTypeCategory from '/components/gallery/WorkTypeCategory.vue'

let galleries, routeName

export default {
  name: 'PhotographyGalleryPage',
  layout: 'gallery',
  components: { WorkTypeCategory },

  props: {
    openGallery: {
      type: Function,
      required: true,
    },
  },

  async asyncData({ $content, route, error, store }) {
    try {
      galleries = await $content('gallery').fetch()
      store.commit('galleries/setGalleries', galleries)
      store.commit('galleries/setSections')
    } catch (e) {
      error({ Message: 'Gallery not found' })
    }

    routeName = route.name.split('-')[1]

    return {
      images: store.getters['galleries/galleryData'](routeName),
      section: store.getters['galleries/getSection'](routeName),
    }
  },
}
</script>

<style scoped>
.remove-smooth-scroll {
  scroll-behavior: auto;
}
</style>