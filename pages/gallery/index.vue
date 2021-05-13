<template>
  <main>
    <!-- <section v-if="posts" class="w-full max-w-5xl mx-auto"> -->
    <section v-if="galleries" class="w-full max-w-5xl mx-auto">
      <h1 class="title">Image Gallery</h1>
      <ul>
        <li class="m-4 p-4 bg-gray-300" v-for="(gallery, index) in galleries" :key="index">
          <nuxt-link :to="`gallery/${gallery.slug}`">{{ gallery.title }}</nuxt-link>
        </li>
      </ul>
      <!-- <div v-if="gallery.gallery" class="nuxt-content">
        <img v-for="image in gallery.gallery" class="image" :key="image.id" :src="image" />
      </div> -->

      <!-- <posts post-type="projects" :amount="10" /> -->
    </section>
  </main>
</template>

<script>
export default {
  async asyncData({ $content, error }) {
    let galleries
    try {
      galleries = await $content('gallery').fetch()
    } catch (e) {
      error({ message: 'Gallery not found' })
    }
    return { galleries }
  },
}
</script>
