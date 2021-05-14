<template>
  <section
    id="about-me"
    class="second-fade-in w-full min-h-screen flex items-center"
  >
    <!-- style="height: 25rem;" -->
    <!-- lg:ml-auto lg:mr-12 -->
    <div
      class="w-3/4 lg:w-1/2 grid grid-rows-2 md:grid-rows-1 grid-cols-1 gap-10 md:grid-cols-2 mx-auto"
    >
      <!-- About Me content -->
      <div class="row-span-1">
        <h3 class="text-sm font-bold uppercase my-6">
          About Me | Sebastian Leal
        </h3>
        <!-- <h4 class="text-sm uppercase"></h4> -->
        <p class="leading-7 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
          repudiandae eum tenetur nemo quibusdam dignissimos pariatur iusto.
          Commodi magni quibusdam, repellat soluta dolorum eaque inventore
          similique exercitationem, nisi doloribus voluptatem. Nam minus
          voluptate illum error, distinctio in. Sint perferendis neque hic alias
          incidunt, quibusdam maiores doloremque veritatis, corporis quidem
          voluptates fugit consequatur pariatur nulla repudiandae autem.
          Deserunt et aut repellendus! Fuga, quod minima.
        </p>
      </div>
      <!-- Profile Image -->
      <div class="w-full mx-auto bg-orange-300" style="height: 30rem">
        <img
          :src="aboutMeImage"
          class="object-cover object-center w-full h-full"
          alt=""
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => {
    return {
      aboutMeImage:
        "https://res.cloudinary.com/miguelleal/image/upload/v1601685475/sebas-portfolio-vue/images/portraits/profile-pic.jpg",
    };
  },
};
</script>