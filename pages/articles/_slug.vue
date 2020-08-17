<template>
  <div>
    <div class="header-wrapper" id="home">
      <section class="hero is-large" :style="{'background-image': `url('${heroImage}')`}">
        <div class="columns hero-body pb-2 px-0" >
          <div class="column is-three-fifths is-offset-one-fifth">
            <h1 class="subtitle   is-2">
              <span class="has-text-white has-text-weight-bold has-background-black-ter px-3" v-text="article.title"/>
            </h1>
          </div>
        </div>
      </section>
    </div>
    <div class="section">
      <div class="columns">
        <div class="column is-three-fifths is-offset-one-fifth my-4">
          <!-- <h1 class="title is-1" v-text="article.title"></h1> -->
          <span class="tags"><span v-for="(tag,i) in tags" :key="tag">#{{tag}}<span v-if="i!=tags.length-1">,&nbsp;</span></span></span>
          <nuxt-content class="is-size-5" :document="article" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Article } from "~/models/Article";
export default Vue.extend({
  data: () => ({
    article: {} as Article,
  }),
  computed: {
    tags(): string[] {
      if (this.article && this.article.tags) {
        return this.article.tags.split(",").map(tag => tag.trim());
      } else return [];
    },
    heroImage(): string {
      return this.article && this.article.image ? require(`~/assets/media/articles/${this.article.image}`) : ';'
    }
  },
  async asyncData(ctx) {
    // fetch our article here
    const article = await ctx.app
      .$content(`articles/${ctx.route.params.slug}`)
      .fetch();
    return { article };
  },
});
</script>

<style lang="scss" scoped>
.is-outlined {
  border: hsla(0,0,50%,0.2) 1px solid;
  border-radius: 10px;
  min-height: 60vh;
}
.hero {
  background-size: cover;
  background-position: center;
}
.subtitle {
  margin-top: 20vh;
}
::v-deep .nuxt-content p {
  padding-bottom: 2em !important;
}
</style>