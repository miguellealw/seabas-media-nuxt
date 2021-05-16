<template>
  <!-- Landing Section -->
  <section class="landing-section w-full h-screen bg-cover bg-center relative bg-black z-0 text-white overflow-hidden">
    <!-- <video
      autoplay
      playsinline
      loop
      muted
      id="landing-page-video"
      :poster="backupLandingImage"
      class="w-auto h-auto min-w-full min-h-full absolute object-cover"
    >
      <source
        src="https://player.vimeo.com/external/462898865.hd.mp4?s=3f9880e7cc20bb9469b23948326f8063494951ce&profile_id=175"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture>"
        type="video/mp4"
        data-res="HD"
      />
    </video> -->
    <!-- src="https://res.cloudinary.com/miguelleal/video/upload/q_50/v1601717680/sebas-portfolio-vue/videos/landing-video.mp4" -->

    <!-- Content -->
    <div class="relative z-20 flex">
      <!-- header -->
      <header
        class="w-screen h-screen py-6 flex justify-between items-center md:h-auto md:justify-around flex-col md:flex-row"
      >
        <!-- Logo and Nav -->
        <div class="second-fade-in">
          <h2 class="text-sm md:text-xl font-bold uppercase tracking-widest">Seabas Media | Sebastian Leal</h2>
          <!-- Navigation -->

          <nav
            class="uppercase text-xxs md:text-xs tracking-widest flex justify-center md:justify-start text-center md:text-left mt-3"
          >
            <ul id="nav-ul" class="">
              <li class="hover:underline">
                <a href="#my-work">My Work</a>
              </li>
              <li class="my-2 md:my-auto hover:underline">
                <a href="#about-me">About Me</a>
              </li>
              <li class="hover:underline">
                <a href="#contact-me"> Contact Me </a>
              </li>
            </ul>
          </nav>
        </div>

        <!-- Social Media -->
        <div
          class="second-fade-in w-64 top-auto lg:w-64 py-2 px-4 uppercase text-xs border-solid border-2 border-white"
        >
          <span class="font-black">Follow Me</span>
          <ul class="mt-2 text-xxs md:text-xs">
            <li>
              <a href="https://www.instagram.com/seabasmedia/?hl=en" target="_blank">Instagram</a>
            </li>
            <!-- <li class="my-2 md:my-auto">
                <a
                  href="https://www.tiktok.com/@sebastiangleal?lang=en"
                  target="_blank"
                  >Tik Tok</a
                >
              </li> -->
            <li>
              <a href="https://www.youtube.com/user/OW3NxX" target="_blank">YouTube</a>
            </li>
          </ul>
        </div>
      </header>

      <!-- Skills -->
      <home-skill-tree :skills="skills" />
    </div>

    <!-- Overlay -->
    <div class="bg-black opacity-75 w-full h-screen absolute top-0 left-0 z-1"></div>
  </section>
</template>

<script>
import HomeSkillTree from './HomeSkillTree.vue'

export default {
  components: { HomeSkillTree },
  data: () => {
    return {
      skills: ['Photographer', 'Videographer', 'Graphic Designer'],
      backupLandingImage:
        'https://res.cloudinary.com/miguelleal/image/upload/v1601685507/sebas-portfolio-vue/images/ferris-wheel.jpg',
      showSkill: true,
    }
  },
}
</script>

<style scoped>
.landing-section {
  /* background-image: url("https://res.cloudinary.com/miguelleal/image/upload/v1601685489/sebas-portfolio-vue/images/urban/01.jpg"); */
  background-image: url('../../assets/landing-gif-2.gif');
}
</style>