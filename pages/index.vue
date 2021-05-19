<template>
  <div class="smooth-scroll" style="background-color: #f0f0f0">
    <!-- Landing Section -->
    <home-landing />

    <!-- My Work - Gallery -->
    <home-gallery />

    <!-- About Me -->
    <home-about-me :text="text" :image="image" />

    <!-- Contact Me -->
    <home-contact-me />

    <Footer />
  </div>
</template>

<script>
import HomeLanding from '/components/home/HomeLanding.vue'
import HomeGallery from '/components/home/HomeGallery.vue'
import HomeContactMe from '/components/home/HomeContactMe.vue'
import HomeAboutMe from '/components/home/HomeAboutMe.vue'
import Footer from '/components/global/Footer'
let aboutMe, imageLink

export default {
  name: 'HomePage',
  components: { HomeLanding, HomeGallery, HomeContactMe, HomeAboutMe, Footer },
  async asyncData({ $content, params, error }) {
    try {
      aboutMe = await $content('home').fetch()

      return {
        text: aboutMe[0].aboutmetext,
        image: aboutMe[0].aboutmeimage,
      }
    } catch (e) {
      error({ Message: 'Gallery not found' })
    }
  },
}
</script>

<style scoped>
.smooth-scroll {
  display: block;
  scroll-behavior: smooth;
}
</style>