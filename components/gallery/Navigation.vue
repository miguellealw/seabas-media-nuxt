<template>
  <nav>
    <!-- Nav Icon -->
    <span @click="handleOpenNav">
      <svg class="cursor-pointer" width="20" height="6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill="#000" d="M0 4h20v2H0zM0 0h20v2H0z" />
      </svg>
    </span>

    <!-- <a href="#my-work-nav" class="">
    </a> -->
    <div
      id="my-work-nav"
      class="my-work-nav-lightbox md:hidden heading-xs-uppercase fixed inset-0 w-full h-screen bg-gray-100 z-10 flex flex-col justify-center items-center text-left"
      :style="{ display: navDisplayStyle }"
    >
      <!-- <a
        class="my-work-nav-lightbox-close absolute top-0 left-0 uppercase font-bold text-xs ml-5 mt-5 z-20"
        href="#"
        >close</a
      > -->

      <span
        class="my-work-nav-lightbox-close absolute top-0 left-0 uppercase font-bold text-xs ml-5 mt-5 z-20 cursor-pointer"
        @click="handleOpenNav"
      >
        close
      </span>
      <ul>
        <li class="my-2 text-gray-500" @click="handleOpenNav">
          <a href="#photography" class="tracking-widest hover:text-black">Photography</a>
          <ul>
            <li class="my-2 ml-4 text-gray-500 hover:text-black">
              <a href="#photography-portraits" class="tracking-widest"> - Portraits</a>
            </li>
            <li class="my-2 ml-4 text-gray-500 hover:text-black">
              <a href="#photography-urban" class="tracking-widest">- Urban</a>
            </li>
          </ul>
        </li>

        <li class="my-2 text-gray-500 hover:text-black" @click="handleOpenNav">
          <a href="#videos">Videos</a>
        </li>

        <li class="mt-2 text-gray-500 hover:text-black" @click="handleOpenNav">
          <a href="#graphic-design">Graphic Design</a>
        </li>

        <hr class="my-5" />

        <li>Contact Me</li>
        <li class="my-2 text-gray-500 hover:text-black">
          <a href="mailto:leal5325@live.com">Email Me</a>
        </li>

        <li class="my-2 text-gray-500 hover:text-black">
          <a href="https://www.instagram.com/seabasmedia/?hl=en" target="_blank">Message Me on Instagram</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isNavOpen: false,
      navDisplayStyle: 'none',
    }
  },
  methods: {
    handleOpenNav: function (e) {
      this.isNavOpen = !this.isNavOpen

      this.navDisplayStyle = this.isNavOpen ? 'flex' : 'none'
    },
  },
}
</script>

<style scoped>
.hide-nav {
  display: none;
}
</style>