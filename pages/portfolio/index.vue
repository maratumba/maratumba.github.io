<template>
  <div class="columns">
    <div class="column is-three-fifths is-offset-one-fifth has-background-light my-4">
      <div class="columns is-multiline">
        <div class="column is-6" v-for="item in items" :key="item.value">
          <portfolio-card :item="item" />
        </div>
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
  }),
  async asyncData(ctx) {
    // fetch our article here
    const items = await ctx.app.$content("portfolio").fetch();
    return { items };
  },
});
</script>

<style>

</style>