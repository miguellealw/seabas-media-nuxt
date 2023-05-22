<template>
  <section :id="sectionId" class="my-10">
    <h2 class="heading-xs-uppercase text-gray-500">{{ category }}</h2>
    <ul
      :class="
        'w-full mt-3 mx-auto grid' +
        (workType === 'Videos' ? ' grid-cols-1 md:grid-cols-2' : ' grid-cols-2 md:grid-cols-4') +
        ' auto-rows-fr gap-3'
      "
    >
      <li v-if="loading">
        <content-placeholders>
          <content-placeholders-img />
        </content-placeholders>
      </li>

      <!-- Video Iframe -->
      <li
        v-else-if="workType === 'Videos'"
        v-for="(image, index) of images"
        :key="index"
        v-html="image"
        class="bg-gray-300"
      ></li>
      <!-- <li v-else-if="workType === 'Videos'" v-for="(image, index) of images" :key="index" class="flex items-center">
        <video-player :videoSrc="image" />
      </li> -->

      <li
        v-else
        @click="openGallery(image)"
        class="cursor-pointer flex items-center"
        v-for="(image, index) of images"
        :key="index"
      >
        <template>
          <LazyImage
            :class="`w-full ${workType === 'Graphic Design' ? 'h-auto' : 'h-full object-cover'} object-center`"
            :lozad-lazy-src="image"
            :width="500"
            :height="800"
            :loading="isLoading"
            @image-loaded="updateloading"
            :alt="galleryTitle + ' Picture'"
            :index="index"
          />
        </template>
      </li>
    </ul>
  </section>
</template>

<script>
import LazyImage from '../global/LazyImage.vue'
import VideoPlayer from '../global/VideoPlayer.vue'

/**
 * use mediacount to decided what index to pass to openGallery function
 *
 *
 *
 */

export default {
  components: { LazyImage, VideoPlayer },
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

<style scoped>
</style>