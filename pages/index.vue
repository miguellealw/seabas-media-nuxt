<template>
  <div class="smooth-scroll" style="background-color: #f0f0f0">
    <!-- Landing Section -->
    <home-landing />

    <!-- My Work - Gallery -->
    <home-gallery :gallery="homeGalleryImages" />

    <!-- Instagram Feed -->
    <!-- <instagram-feed /> -->

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
import InstagramFeed from '~/components/home/InstagramFeed.vue'
let homeData, aboutMe, homeGallery

export default {
  name: 'HomePage',
  components: { HomeLanding, HomeGallery, HomeContactMe, HomeAboutMe, Footer, InstagramFeed },
  async asyncData({ $content, params, error }) {
    try {
      homeData = await $content('home').fetch()

      // Get data from homepage
      aboutMe = homeData.find((el) => el.slug === 'aboutme')
      homeGallery = homeData.find((el) => el.slug === 'homegallery')

      return {
        homeGalleryImages: homeGallery.homegalleryimages.flat(),
        aboutMeText: aboutMe.aboutmetext,
        aboutMeImage: aboutMe.aboutmeimage[0],
      }
    } catch (e) {
      error({ Message: 'Gallery not found' })
    }
  },
}
</script>

// For the instagram embed

<style scoped>
.smooth-scroll {
  display: block;
  scroll-behavior: smooth;
}
</style>