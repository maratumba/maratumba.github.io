<template>

  <div class="">
  <!-- Navigation bar -->
    <nav class="navbar is-fixed-top">
      <div class="navbar-brand">
        <nuxt-link class="navbar-item" to="/">
            <span>Yaman Özakın's Homepage</span>
        </nuxt-link>
        <div class="navbar-burger burger" data-target="navbarExampleTransparent" @click="showMenu = !showMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div id="navbarExampleTransparent" class="navbar-menu" :class="{'is-active': showMenu}">
        <div class="navbar-end">
          <nuxt-link class="navbar-item" v-for="item in menuItems" :to="item.href" :key="item.value">
            <span class="icon">
              <i :class="item.icon" ></i>
            </span>
            <span v-text="item.text"></span>
          </nuxt-link>
        </div>
      </div>
    </nav>
    <div class="main-content is-fullheight">
      <Nuxt/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  head: {
    bodyAttrs: {
      class: 'has-navbar-fixed-top'
    }
  },
  data: () => ({
    showMenu: false,
    menuItems: [
      {
        value: 'about',
        text: 'About',
        icon: 'fas fa-info',
        href: '/',
      },
      {
        value: 'portfolio',
        text: 'Portfolio',  
        icon: 'fas fa-grip-horizontal',
        href: '/portfolio',
      },
      {
        value: 'articles',
        text: 'Articles',
        icon: 'fas fa-th-list',
        href: '/articles',
      },
      {
        value: 'tools',
        text: 'Tools (soon)',
        icon: 'fas fa-tools',
        href: '/tools',
      },
    ],
  })
})
</script>

<style lang="scss"> 
body {
  min-height: 100vh;
  background-image: url('~assets/media/background/dot.png');
}
.hero.footer{
  background-color: #333;
  color: #DDD;
  bottom: 0;
  position: fixed;
  left: 0;
  width: 100%;
  .hero-body{
    padding: 1em;
  }
}
a.navbar-item.nuxt-link-exact-active {
  color: $secondary !important;
}
body nav {
  background-color: #333333;
}
.main-content {
  font-family: "Poppins", sans-serif;
}
.has-same-height .card {
  height: 320px;
  overflow: hidden;
}

.card-content h3 {
  text-align: center;
}

.table-profile td,
th {
  border: none !important;
}

.table-profile td:first-of-type {
  font-weight: bold;
}

.skills-content .media {
  margin: 0 !important;
  padding: 4px !important;
  border: 0 !important;
}

.skills-content .progress {
  height: 4px !important;
}

.custom-tags {
  text-align: center !important;
  display: block;
}

.portfolio-container .card {
  margin-bottom: 2em;
}

.section-heading {
  text-align: center;
  margin-top: 1em;
  margin-bottom: 6em;
}
</style>
