<template>
  <section id="about-me" class="second-fade-in w-full min-h-screen flex items-center">
    <!-- style="height: 25rem;" -->
    <!-- lg:ml-auto lg:mr-12 -->
    <div
      class="w-3/4 lg:w-1/2 grid grid-rows-2 md:grid-rows-1 grid-cols-1 md:grid-cols-2 auto-rows-min gap-10 md:gap-10 mx-auto"
    >
      <!-- About Me content -->
      <div>
        <h3 class="text-sm font-bold uppercase my-6">About Me | Sebastian Leal</h3>
        <!-- <h4 class="text-sm uppercase"></h4> -->
        <p class="leading-7 text-sm">
          {{ text }}
        </p>
      </div>

      <!-- Profile Image -->
      <!-- <div class="w-full mx-auto bg-orange-300" style="height: 30rem"> -->
      <div class="w-full mx-auto">
        <img :src="image" class="object-cover object-center w-full" alt="" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
}
</script>