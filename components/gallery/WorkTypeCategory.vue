<template>
  <section :id="sectionId" class="my-10">
    <h4 class="heading-xs-uppercase text-gray-500">{{ category }}</h4>
    <ul class="w-full mt-3 mx-auto grid grid-cols-2 md:grid-cols-4 grid-flow-row gap-3">
      <li
        @click="openGallery(category, index)"
        class="bg-gray-300 cursor-pointer"
        v-for="(image, index) of images"
        :key="image"
      >
        <LazyImage
          class="h-full w-full object-cover object-center"
          :lozad-lazy-src="image"
          :width="500"
          :height="500"
          alt="Portrait Picture"
          :index="index"
        />
        <!-- <img
          class="h-full w-full object-cover object-center"
          v-lazy="image"

          alt="portrait 1"
          @click="openGallery(index)"
        /> -->
      </li>
    </ul>
  </section>
</template>

<script>
import LazyImage from '../global/LazyImage.vue'

/**
 * use mediacount to decided what index to pass to openGallery function
 *
 *
 *
 */

export default {
  components: { LazyImage },
  props: ['category', 'images', 'openGallery', 'media', 'sectionId'],
}
</script>