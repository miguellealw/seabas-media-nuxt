<!--
<template>
  <main>
    <section v-if="galleries" class="w-full max-w-5xl mx-auto">
      <h1 class="title">Image Gallery</h1>
      <ul>
        <li class="m-4 p-4 bg-gray-300" v-for="(gallery, index) in galleries" :key="index">
          <nuxt-link class="card card--clickable" :to="`gallery/${gallery.slug}`">{{ gallery.title }}</nuxt-link>
        </li>
      </ul>
    </section>
  </main>
</template>
-->

<!--
<script>
// export default {
//   async asyncData({ $content, error }) {
//     let galleries
//     try {
//       galleries = await $content('gallery').fetch()
//     } catch (e) {
//       error({ message: 'Gallery not found' })
//     }
//     console.log('GALLERIES', galleries)
//     return { galleries }
//   },
// }
</script>
-->

<template>
  <main>
    <section v-if="galleries">
      <nav class="mb-8" aria-label="go back">
        <router-back class="block" />
      </nav>
      <h1 class="title">Image Gallery</h1>

      <ul>
        <li class="m-4 p-4 bg-gray-300" v-for="(gallery, index) in galleries" :key="index">
          <h2>{{ gallery.title }}</h2>
          <div v-if="gallery.images" class="nuxt-content">
            <img v-for="image in gallery.images" class="image" :key="image.id" :src="image" />
          </div>
        </li>
      </ul>

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

