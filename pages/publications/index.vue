<template>
  <div class="section">
  <div class="columns">
    <div class="column is-three-fifths is-offset-one-fifth my-4">
      <div>
        <publication-card
          class="my-2"
          v-for="publication,i in publications"
          :key="i"
          :publication="publication"
        />
      </div>
    </div>
  </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import PublicationCard from "~/components/publications/PublicationCard.vue";

export default Vue.extend({
  components: {
    PublicationCard,
  },
  data: () => ({
    someData: "datum",
    publications: [],
  }),
  async asyncData(ctx) {
    // fetch our article here
    const publications = await ctx.app
      .$content("publications/citations")
      .fetch();
    return { publications: publications.body };
  },
});
</script>

<style>
</style>