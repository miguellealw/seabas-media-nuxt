<template>
  <main>
    <!-- <section v-if="posts" class="w-full max-w-5xl mx-auto"> -->
    <section class="w-full max-w-5xl mx-auto">
      <h1 class="title">Image Gallery</h1>
      <!-- <posts post-type="projects" :amount="10" /> -->
    </section>
  </main>
</template>

<script>
export default {
  async asyncData({ $content, error }) {
    let gallery
    try {
      gallery = await $content('gallery').fetch()
    } catch (e) {
      error({ message: 'Gallery not found' })
    }
    return { gallery }
  },
}
</script>
