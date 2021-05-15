<template>
  <section id="my-work" class="second-fade-in w-full mx-auto min-h-screen md:h-screen relative flex items-center">
    <div class="w-3/4 lg:w-1/2 flex items-center flex-col relative h-full mx-auto md:-top-10 inset-0">
      <!-- Decorative Line -->
      <!-- <svg
          width="1"
          class="w-2 h-64 absolute left-0 fill-current text-gray-300 hidden md:block"
          style="top: -16rem"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="#fff" d="M0 0h1v260H0z" />
        </svg> -->

      <h3 class="font-bold uppercase tracking-widest md:text-white text-sm my-10 md:my-2 self-start">My Work</h3>
      <ul class="h-full grid grid-cols-2 grid-rows-myWorkGallery md:grid-rows-2 gap-2 lg:gap-6">
        <li v-for="image in images" :key="image" class="overflow-hidden">
          <img
            :src="image"
            class="object-cover object-center w-full h-full transform hover:scale-110 transition-transform duration-1000 ease-in-out"
            alt=""
          />
        </li>
      </ul>

      <!-- NOTE: put router link outside button so it loads button on ipad -->
      <router-link to="/gallery" class="my-work-button mt-5 self-center md:self-start">
        <button
          class="uppercase px-10 py-3 text-xs block hover:bg-black hover:text-white"
          style="border: 2px solid black"
        >
          All My Work
          <!-- <a
          href="/my-work"
          class="uppercase px-10 py-3 text-xs block hover:bg-black hover:text-white"
          >All My Work</a
        > -->
        </button>
      </router-link>
    </div>
  </section>

  <!-- <section
      id="contact-me"
      class="w-3/4 lg:w-1/3 mx-auto h-screen py-10 flex flex-col justify-center"
    >
      <h3 class="heading-xs-uppercase mb-10">Contact Me</h3>
      <form class="w-full text-sm" action="/send-email" method="POST">
        <div class="flex justify-between flex-col md:flex-row">
          <div class="mb-4 w-full md:mr-10">
            <label for="name" class="block mb-1">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              class="w-full h-10 p-2"
            />
          </div>

          <div class="mb-4 w-full">
            <label for="email" class="block mb-1">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email"
              class="w-full h-10 p-2"
            />
          </div>
        </div>

        <div class="mb-4">
          <label for="subject" class="block mb-1">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Subject"
            class="w-full h-10 p-2"
          />
        </div>

        <div class="mb-4">
          <label for="message" class="block mb-1">Message</label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Your Message"
            class="w-full p-2"
          ></textarea>
        </div>
        <button
          class="heading-xs-uppercase bg-black text-white px-10 py-3 block ml-auto"
          id="contact-me-send-button"
        >
          Send
        </button>
      </form>
    </section> -->
</template>

<script>
export default {
  data: () => {
    return {
      images: [
        'https://res.cloudinary.com/miguelleal/image/upload/q_auto/v1601685473/sebas-portfolio-vue/images/portraits/01.jpg',
        'https://res.cloudinary.com/miguelleal/image/upload/q_auto/v1601685475/sebas-portfolio-vue/images/portraits/11.jpg',
        'https://res.cloudinary.com/miguelleal/image/upload/q_auto/v1601685489/sebas-portfolio-vue/images/urban/02.jpg',
        'https://res.cloudinary.com/miguelleal/image/upload/q_auto/v1601685474/sebas-portfolio-vue/images/portraits/04.jpg',
      ],
    }
  },
}
</script>