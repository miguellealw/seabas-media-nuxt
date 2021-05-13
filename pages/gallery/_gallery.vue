<template>
  <main>
    <section v-if="gallery">
      <nav class="mb-8" aria-label="go back">
        <router-back class="block" />
      </nav>

      <h1>{{ gallery.title }}</h1>
      <div v-if="gallery.images" class="nuxt-content">
        <img v-for="image in gallery.images" class="image" :key="image.id" :src="image" />
      </div>

      <!-- <article>
        <img v-if="post.cover" class="cover-image" :src="post.cover" />
        <h1 class="">{{ post.title }}</h1>
        <p class="mt-1 mb-8 text-primary-600 dark:text-primary-400">{{ post.description }}</p>
        <nuxt-content :document="post" />
        <div v-if="post.gallery" class="nuxt-content">
          <img v-for="image in post.gallery" class="image" :key="image.id" :src="image" />
        </div>
      </article> -->
    </section>
  </main>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    let gallery
    try {
      gallery = await $content('gallery', params.gallery).fetch()
    } catch (e) {
      error({ message: 'Gallery not found' })
    }
    console.log('INDIVIDUAL GALLERY', gallery)
    return { gallery }
  },
}
</script>
