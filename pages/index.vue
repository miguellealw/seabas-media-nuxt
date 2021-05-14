<template>
  <div class="smooth-scroll" style="background-color: #f0f0f0">
    <!-- Landing Section -->
    <home-landing />

    <!-- My Work - Gallery -->
    <home-gallery />

    <!-- About Me -->
    <home-about-me />

    <!-- Contact Me -->
    <home-contact-me />

    <!-- <Footer /> -->
  </div>
</template>

<script>
import HomeLanding from '/components/home/HomeLanding.vue'
import HomeGallery from '/components/home/HomeGallery.vue'
import HomeContactMe from '/components/home/HomeContactMe.vue'
import HomeAboutMe from '/components/home/HomeAboutMe.vue'
import Footer from '/components/global/Footer'

export default {
  name: 'HomePage',
  components: { HomeLanding, HomeGallery, HomeContactMe, HomeAboutMe, Footer },
}
</script>

<style scoped>
.smooth-scroll {
  display: block;
  scroll-behavior: smooth;
}
</style>