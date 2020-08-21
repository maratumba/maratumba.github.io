<template>
    <div class="container">
  <div>
      <div class="title">
        Yaman Özakın
      </div>
      <div class="columns">
        <div class="column">
        <button class="button is-medium is-outlined is-fullwidth">
          Dev
        </button>
        </div>
        <div class="column">
        <button class="button is-medium is-outlined is-fullwidth">
          Science
        </button>
        </div>
        <div class="column">
        <button class="button is-medium is-outlined is-fullwidth">
          Art & Design
        </button>
        </div>
        <div class="column">
        <button class="button is-medium is-outlined is-fullwidth">
          Tools
        </button>
        </div>
        <div class="column">
        <button class="button is-medium is-outlined is-fullwidth">
          Articles
        </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: $primary;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
