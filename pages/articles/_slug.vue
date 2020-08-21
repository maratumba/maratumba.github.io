<template>
  <div>
    <div class="header-wrapper" id="home">
      <section class="hero is-large" :style="{'background-image': `url('${heroImage}')`}">
        <div class="columns hero-body pb-2 px-0">
          <div class="column is-three-fifths is-offset-one-fifth">
            <h1 class="subtitle is-2">
              <span
                class="has-text-white has-text-weight-bold has-background-black-ter px-3"
                v-text="article.title"
              />
            </h1>
          </div>
        </div>
      </section>
    </div>
    <div class="section">
      <div class="columns">
        <div class="column is-three-fifths is-offset-one-fifth my-4">
          <!-- <h1 class="title is-1" v-text="article.title"></h1> -->
          <div class="level align-start">
            <div class="media pb-5">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img :src="avatar" class="is-rounded" alt="Placeholder image" />
                </figure>
              </div>
              <div class="media-content" v-if="user">
                <p class="title is-4">{{ user.fullName }}</p>
                <p class="subtitle is-6 has-text-grey">@{{ user.username }}</p>
              </div>
            </div>
            <span class="tags has-right-text">
              <span class="is-family-monospace has-text-grey">{{ createdAt }}</span>
            </span>
          </div>

          <nuxt-content class="is-size-5" :document="article" />
          <hr>
          <span v-for="(tag,i) in tags" :key="tag">
            #{{tag}}
            <span v-if="i!=tags.length-1">,&nbsp;</span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import moment from 'moment';

interface User {
  username: String;
  fullName: String;
  avatar: String;
}

import Vue from "vue";
import { Article } from "~/models/Article";
export default Vue.extend({
  data: () => ({
    article: {} as Article,
    writers: [] as User[],
  }),
  computed: {
    createdAt(): String {
      return this.article &&  this.article.createdAt ? moment(this.article.createdAt).format('LLL') : '';
    },
    tags(): string[] {
      if (this.article && this.article.tags) {
        return this.article.tags.split(",").map((tag) => tag.trim());
      } else return [];
    },
    heroImage(): string {
      return this.article && this.article.image
        ? require(`~/assets/media/articles/${this.article.image}`)
        : ";";
    },
    avatar(): string {
      return this.writers && this.writers.length >= 1
        ? require(`~/assets/media/avatar/${this.writers[0].avatar}`)
        : ";";
    },
    user() {
      return this.writers && this.writers.length >= 1 ? this.writers[0] : null;
    },
  },
  async asyncData(ctx) {
    // fetch our article here
    const article = await ctx.app
      .$content(`articles/${ctx.route.params.slug}`)
      .where({public: true})
      .sortBy('createdAt', 'desc')
      .fetch();
    const writers = await ctx.app.$content(`users`).fetch();
    return { article, writers: writers.users };
  },
});
</script>

<style lang="scss" scoped>
.align-start {
  align-items: flex-start;
}
.is-outlined {
  border: hsla(0, 0, 50%, 0.2) 1px solid;
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
.section {
  padding-top: 1em;
}
</style>