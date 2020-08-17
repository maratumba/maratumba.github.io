<template>
  <div class="section">
  <div class="columns">
    <div class="column is-three-fifths is-offset-one-fifth my-4">
      <div>
        <article-card
          v-for="article in articles"
          :key="article.slug"
          :article="article"
        >{{article.title}}</article-card>
      </div>
    </div>
  </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ArticleCard from "~/components/Articles/ArticleCard.vue";

export default Vue.extend({
  components: {
    ArticleCard,
  },
  data: () => ({
    someData: "datum",
    articles: [],
  }),
  async asyncData(ctx) {
    // fetch our article here
    const articles = await ctx.app.$content("articles").fetch();
    return { articles };
  },
});
</script>

<style>
</style>