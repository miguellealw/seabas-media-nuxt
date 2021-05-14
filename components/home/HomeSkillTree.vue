<template>
  <div
    class="w-full h-screen flex justify-center items-center absolute top-0 left-0 bottom-0 right-0"
    style="z-index: -1"
  >
    <!-- <ul id="landing-skills" class="uppercase text-xs text-center">
            <li class="my-1">Photographer</li>
          <li class="my-1">Videographer</li>
          <li class="my-1">Graphic Designer</li>
        </ul> -->

    <transition-group
      tag="ul"
      id="skill-menu"
      class="uppercase text-xs text-center"
      appear
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
    >
      <li class="my-1" v-for="(skill, index) in skills" v-bind:key="skill" v-bind:data-index="index">
        {{ skill }}

        <!-- Skill Tree -->
        <span id="line-photo"></span>
        <ul id="sub-menu-photo">
          <router-link to="my-work">
            <li>Portraits</li>
          </router-link>

          <router-link to="my-work">
            <li>Urban</li>
          </router-link>
        </ul>
      </li>
    </transition-group>
  </div>
</template>

<script>
// import Velocity from 'velocity-animate'

export default {
  name: 'HomeSKillTree',
  props: ['skills'],
  mounted() {
    if (process.client) {
      const Velocity = () => import('velocity-animate')
    }
  },
  methods: {
    beforeEnter: function (el) {
      el.style.opacity = 0
    },
    enter: function (el, done) {
      var delay = el.dataset.index * 900
      // Wait 2 seconds to start animation
      setTimeout(() => {
        setTimeout(function () {
          Velocity(el, { opacity: 1 }, { complete: done })
        }, delay)
      }, 2000)
    },
  },
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

/* Skill Tree Styles */
ul#skill-menu {
  width: 20em;
  text-align: center;
  font-weight: 500;
  text-transform: uppercase;
  position: relative;
}

ul#skill-menu li {
  cursor: pointer;
  position: relative;

  transition: all 0.3s;
}

ul#skill-menu li:hover span[id^='line-'] {
  width: 2rem;
}

ul#skill-menu span[id^='line-'] {
  background: white;
  width: 0;
  height: 1px;
  position: absolute;
  top: 50%;
  right: 0;
  bottom: 0;
  left: 12rem;
  transition: all 0.3s;
}

/* Photo li */
ul#skill-menu li:nth-child(1):hover #sub-menu-photo {
  max-height: 87.188px;
}

/* ul#skill-menu li:nth-child(2):hover #sub-menu-video {
    } */

/* ----------------- */

#sub-menu-photo {
  width: 12em;
  max-height: 0px;
  position: absolute;
  left: 15rem;
  top: -2.3rem;
  background: white;
  color: black;
  overflow: hidden;
  padding: 0;
  transition: max-height 0.3s;
  transition-delay: 0.3s;

  font-weight: bold;
  font-size: 0.7rem;
}
#sub-menu-photo li:hover {
  text-decoration: underline;
}

#sub-menu-photo li {
  /* height: 3rem; */
  padding: 0.6rem 0;
}
</style>