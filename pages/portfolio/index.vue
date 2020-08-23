<template>
  <div class="container">
  <div class="columns">
    <div class="column is-three-fifths is-offset-one-fifth ">
      <section class="section">
    <div class="container">
      <div class="container">
      <div class="columns is-multiline">
        <div class="column is-12" v-for="(item,i) in items" :key="item.value">
          <portfolio-card :item="item" />
        </div>
      </div>
      </div>
    </div>
      </section>
    </div>
  </div>
  </div>
</template>

<script lang="ts">
import PortfolioCard from '~/components/PortfolioCard.vue';
import Vue from 'vue';

export default Vue.extend({
  components: {
    PortfolioCard,
  },
  data: () => ({
    items: [],
    colors: [
      '#F20530',
      '#730220',
      '#2C2F73',
      '#9CBF78',
      '#BF0436',
    ]
  }),
  async asyncData(ctx) {
    // fetch our article here
    const items = await ctx.app.$content("portfolio")
    .sortBy('createdAt','asc')
    .fetch();
    return { items };
  },
});
</script>

<style>

</style>