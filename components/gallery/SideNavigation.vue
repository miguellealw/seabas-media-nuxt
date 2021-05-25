<template>
  <nav class="w-1/12 h-screen pl-12 fixed left-0 bottom-0 flex items-center justify-center heading-xs-uppercase">
    <ul>
      <li class="my-2 text-gray-500" v-for="(section, sectionIndex) in sections" :key="sectionIndex">
        <a :href="'#' + section.slug" class="tracking-widest hover:text-black">{{ section.name }}</a>
        <ul>
          <li
            v-for="(gallery, index) in section.galleries"
            :key="index"
            class="my-2 ml-4 text-gray-500 hover:text-black"
          >
            <a :href="`#${section.slug}-${gallery.slug}`" class="tracking-widest"> - {{ gallery.title }}</a>
          </li>
        </ul>
      </li>

      <hr class="my-5" />

      <li>Contact Me</li>
      <li class="my-2 text-gray-500 hover:text-black">
        <a href="mailto:leal5325@live.com">Email Me</a>
      </li>

      <li class="my-2 text-gray-500 hover:text-black">
        <a href="https://www.instagram.com/seabasmedia/?hl=en" target="_blank">Message Me on Instagram</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'SideNavigation',
  props: {
    galleries: {
      type: Array,
    },
    sections: {
      type: Array,
    },
  },
}
</script>
