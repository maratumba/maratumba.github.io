<template>
  <div class="mt-4">
    <nuxt-link :to="{name: 'articles-slug', params: {slug: article.slug}}">
      <div class="card">
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-128x128">
                <img :src="heroImage" alt="Placeholder image">
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-4 black-bar"><span class="has-text-white has-text-weight-bold extend-left has-background-black-ter">{{ article.title}}</span></p>
              <p class="subtitle is-5">{{ article.description }}</p>
            </div>
          </div>
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
  computed: {
    heroImage(): string {
      return this.article && this.article.image ? require(`~/assets/media/articles/${this.article.image}`) : ';'
    }
  }
});
</script>

<style lang="scss" scoped>
.extend-left {
  // padding-left: 20px;
  // margin-left: -20px;
}
.title {
    line-height: 1.2em;
}
figure img {
  height: 100% !important;
  outline: inset 5px #333;
}
.card:hover{
    box-shadow: 0 0.5em 1em -0.125em rgba($scheme-invert, 0.1), 0 0px 0 1px rgba($scheme-invert, 0.02)
}
.card{
  transition: box-shadow 0.5s;
  background-size: cover;
  background-position: center;
}

</style>