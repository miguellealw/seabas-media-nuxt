<template>
  <section :id="sectionId" class="my-10">
    <h2 class="heading-xs-uppercase text-gray-500">{{ category }}</h2>
    <ul class="w-full mt-3 mx-auto grid grid-cols-2 md:grid-cols-4 auto-rows-fr gap-3">
      <li v-if="loading">
        <content-placeholders>
          <content-placeholders-img />
        </content-placeholders>
      </li>

      <li
        v-else
        @click="openGallery(image)"
        class="bg-gray-300 cursor-pointer"
        v-for="(image, index) of images"
        :key="index"
      >
        <template v-if="workType === 'Video'">
          <video controls="controls">
            <!-- <source src="https://res.cloudinary.com/demo/video/upload/dog.webm" type="video/webm" /> -->
            <source :src="image" type="video/webm" />
            <!-- <source src="https://res.cloudinary.com/demo/video/upload/dog.mp4" type="video/mp4"/>
            <source src="https://res.cloudinary.com/demo/video/upload/dog.ogv" type="video/ogg"/> -->
          </video>
        </template>
        <template v-else>
          <LazyImage
            class="h-full w-full object-cover object-center"
            :lozad-lazy-src="image"
            :width="500"
            :height="800"
            :loading="isLoading"
            @image-loaded="updateloading"
            :alt="galleryTitle + ' Picture'"
            :index="index"
          />
        </template>
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
  data() {
    return {
      isLoading: true,
    }
  },
  methods: {
    updateloading(newStatus) {
      this.isLoading = newStatus
    },
  },
  props: {
    category: {
      type: String,
    },
    images: {
      type: Array,
    },
    openGallery: {
      type: Function,
    },
    galleryPath: {
      type: String,
    },
    galleryTitle: {
      type: String,
    },
    sectionId: {
      type: String,
    },
    loading: {
      type: Boolean,
    },
    workType: {
      type: String,
    },
  },
}
</script>