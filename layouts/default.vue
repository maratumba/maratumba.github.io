<template>

  <body class="has-navbar-fixed-top">
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
      <div class="columns">
        <div class="column is-three-fifths is-offset-one-fifth has-background-light my-4">
          <Nuxt/>
        </div>
      </div>
  </body>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data: () => ({
    showMenu: false,
    menuItems: [
      {
        value: 'about',
        text: 'About',
        icon: 'fas fa-info',
        href: '#',
      },
      {
        value: 'portfolio',
        text: 'Portfolio',  
        icon: 'fas fa-grip-horizontal',
        href: '#',
      },
      {
        value: 'articles',
        text: 'Articles',
        icon: 'fas fa-th-list',
        href: '/articles',
      },
    ],
  })
})
</script>

<style lang="scss"> 
a.navbar-item.nuxt-link-exact-active {
  color: $secondary !important;
}
body nav {
  background-color: #333333;
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
