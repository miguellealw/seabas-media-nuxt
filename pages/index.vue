<template>
  <div class="smooth-scroll" style="background-color: #f0f0f0">
    <!-- Landing Section -->
    <home-landing />

    <!-- My Work - Gallery -->
    <home-gallery :gallery="homeGalleryImages" />

    <!-- About Me -->
    <home-about-me :text="aboutMeText" :image="aboutMeImage" />

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
let homeData

export default {
  name: 'HomePage',
  components: { HomeLanding, HomeGallery, HomeContactMe, HomeAboutMe, Footer },
  async asyncData({ $content, params, error }) {
    try {
      homeData = await $content('home').fetch()

      return {
        homeGalleryImages: homeData[0].homegalleryimages.flat(),
        aboutMeText: homeData[1].aboutmetext,
        aboutMeImage: homeData[1].aboutmeimage,
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