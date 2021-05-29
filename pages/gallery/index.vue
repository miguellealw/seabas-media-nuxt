<template>
  <Navigation :galleries="galleries" :sections="sections" :isOpen="true" :showCloseButton="false" />
</template>

<script>
// Components
import Navigation from '/components/gallery/Navigation.vue'

import { mapState } from 'vuex'

let galleries

export default {
  name: 'WorkGalleryPage',
  components: { Navigation },

  computed: {
    ...mapState({
      galleries: (state) => state.galleries.all,
      sections: (state) => state.galleries.sections,
    }),
  },

  async asyncData({ $content, params, error, store }) {
    try {
      galleries = await $content('gallery').fetch()
      store.commit('galleries/setGalleries', galleries)

      // get galleries of each section
      store.commit('galleries/setSections')
    } catch (e) {
      error({ Message: 'Gallery not found' })
    }
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
