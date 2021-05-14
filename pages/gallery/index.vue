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


<!-- `"https://res.cloudinary.com/miguelleal/image/upload/c_thumb,w_200,g_face/v1601685489/sebas-portfolio-vue/images/${imageType}/${imageCounter}.jpg"` -->

<template>
  <main>
    <section v-if="galleries">
      <nav class="mb-8" aria-label="go back">
        <router-back class="block" />
      </nav>
      <h1 class="title">Image Gallery</h1>

      <ul>
        <li class="m-4 p-4 bg-gray-300 md:grid-cols-3" v-for="(gallery, index) in galleries" :key="index">
          <h2>{{ gallery.title }}</h2>
          <div v-if="gallery.images" class="nuxt-content grid grid-cols-3 gap-3">
            <!-- <img v-for="image in gallery.images" class="image" :key="image.id" :src="image" /> -->
            <img
              v-for="image in gallery.images"
              class="image"
              :key="image.id"
              :src="`https://res.cloudinary.com/miguelleal/image/uploadc_thumb,w_200,g_face/v1620969351${gallery.path}${image}`"
            />
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
    console.log('GALL', galleries)

    // const gallLinks = galleries.map(gall => gall + )

    // iterate over galleries
    // iterate over images array in galleries

    // create an array of objects

    /*


    */

    return { galleries }
  },
}
</script>

