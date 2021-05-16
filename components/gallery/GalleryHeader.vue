<template>
  <header class="w-full py-5 fixed md:absolute top-0 left-0 bg-white z-10">
    <div class="w-3/4 max-w-screen-lg mx-auto flex justify-between items-center">
      <Navigation />

      <h1 class="uppercase font-bold text-center md:mx-auto text-sm">
        <a href="/">Seabas Media</a>
      </h1>
    </div>
  </header>
</template>

 <script>
import Navigation from './Navigation.vue'

export default {
  components: { Navigation },
}
</script>