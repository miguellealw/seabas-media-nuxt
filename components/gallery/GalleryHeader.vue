<template>
  <header class="w-full py-5 fixed md:absolute top-0 left-0 bg-white z-10">
    <div class="w-3/4 max-w-screen-lg mx-auto flex justify-between items-center">
      <Navigation v-show="screen && screen.width < xlSize - 1" :galleries="galleries" :sections="sections" />

      <SideNavigation v-show="screen && screen.width > xlSize" :galleries="galleries" :sections="sections" />

      <h1 class="uppercase font-bold text-center md:mx-auto text-sm">
        <a href="/">Seabas Media</a>
      </h1>
    </div>
  </header>
</template>

 <script>
import Navigation from './Navigation.vue'
import SideNavigation from './SideNavigation.vue'

export default {
  components: { Navigation, SideNavigation },
  data() {
    if (this.$screen) {
      console.log('SCREEEEEN WIDTH', this.$screen.width)
    }
    return {
      screen: this.$screen,
      xlSize: 1280,
    }
  },
  props: { galleries: { type: Array }, sections: { Type: Array } },
}
</script>