<template>
  <div class="mt-4">
    <nuxt-link :to="{name: 'articles-slug', params: {slug: article.slug}}">
      <div class="card">
        <div class="card-content">
          <p class="title is-4">{{ article.title}}</p>
          <p class="subtitle is-6">{{ article.description }}</p>
        </div>
        <footer class="card-footer has-text-right">
            <p class="card-footer-item ">
                {{ article.tags }}
            </p>
        </footer>
      </div>
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: ["article"],
});
</script>

<style lang="scss">
.card:hover{
    box-shadow: 0 0.5em 1em -0.125em rgba($scheme-invert, 0.1), 0 0px 0 1px rgba($scheme-invert, 0.02)
}
.card{
    transition: box-shadow 0.5s;
}
</style>