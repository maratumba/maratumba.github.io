<template>
  <a v-if="icon" :href="icon.href" target="_blank" rel="noreferrer nofollow">
    <img :class="{'is-128x128': is128, 'is-64x64': is64, 'is-24x24': is24, fullWidth, 'is-square': isSquare, 'icon': isIcon}" class="image" :src="icon.url" />
  </a>
</template>

<script lang="ts">
import Vue from "vue";

interface Icon {
  url: string,
  type: string,

}

interface Icons {
  [name: string]: Icon
}


const ICONS = {
  vue: {
    url: require('~/assets/media/tech-icons/vue.png'),
    type: "image/png",
    href: "https://vuejs.org"
  },
  vuetify: {
    url: require('~/assets/media/tech-icons/vuetify.svg'),
    type: "image/png",
    href: "https://vuetifyjs.com"
  },
  nuxt: {
    url: require('~/assets/media/tech-icons/nuxt.svg'),
    type: "image/png",
    href: "https://nuxtjs.org"
  },
  nuxtContent: {
    url: require('~/assets/media/tech-icons/nuxtContent.svg'),
    type: "image/png",
    href: "https://content.nuxtjs.org"
  },
  docker: {
    url: require('~/assets/media/tech-icons/docker.svg'),
    type: "image/png",
    href: "https://www.docker.com"
  },
  python: {
    url: require('~/assets/media/tech-icons/python.svg'),
    type: "image/png",
    href: "https://www.python.org"
  },
  django: {
    url: require('~/assets/media/tech-icons/django.svg'),
    type: "image/png",
    href: "https://www.djangoproject.com"
  },
  javascript: {
    url: require('~/assets/media/tech-icons/javascript.png'),
    type: "image/png",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
  },
  typescript: {
    url: require('~/assets/media/tech-icons/typescript.png'),
    type: "image/png",
    href: "https://www.typescriptlang.org/"
  },
  c: {
    url: require('~/assets/media/tech-icons/c.png'),
    type: "image/png",
    href: "https://en.wikipedia.org/wiki/C_(programming_language)"
  },
  html: {
    url: require('~/assets/media/tech-icons/html.svg'),
    type: "image/png",
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML/"
  },
  jenkins: {
    url: require('~/assets/media/tech-icons/jenkins.svg'),
    type: "image/png",
    href: "https://www.jenkins.io/"
  },
  tensorflow: {
    url: require('~/assets/media/tech-icons/tensorflow.svg'),
    type: "image/png",
    href: "https://www.tensorflow.org/"
  },
  bulma: {
    url: require('~/assets/media/tech-icons/bulma.svg'),
    type: "image/png",
    href: "https://www.bulma.io/"
  },
  jira: {
    url: require('~/assets/media/tech-icons/jira.svg'),
    type: "image/png",
    href: "https://www.youtube.com/watch?v=2u0sNRO-QKQ/"
  },
  bash: {
    url: require('~/assets/media/tech-icons/bash.svg'),
    type: "image/png",
    href: "https://www.gnu.org/software/bash/"
  },
  git: {
    url: require('~/assets/media/tech-icons/git.svg'),
    type: "image/png",
    href: "https://git-scm.com/"
  },
  github: {
    url: require('~/assets/media/tech-icons/github.svg'),
    type: "image/png",
    href: "https://www.github.com/"
  },
  angular: {
    url: require('~/assets/media/tech-icons/angular.svg'),
    type: "image/png",
    href: "https://angular.io/"
  },
  graphql: {
    url: require('~/assets/media/tech-icons/graphql.svg'),
    type: "image/png",
    href: "https://graphql.org/"
  },
  faunadb: {
    url: require('~/assets/media/tech-icons/faunadb.png'),
    type: "image/png",
    href: "https://fauna.com/"
  },
  tailwind: {
    url: require('~/assets/media/tech-icons/tailwindcss.png'),
    type: "image/png",
    href: "https://tailwindcss.com/"
  },
}

export default Vue.extend({
  props: {
    tech: String,
    fullWidth: Boolean,
    is128: Boolean,
    is64: Boolean,
    is24: Boolean,
    isSquare: Boolean,
    isIcon: Boolean,
  },
  data: () : {
    icons: Icons,
  } => ({
    icons: ICONS,
  }),
  computed: {
    iconUrl() : String {
      return this.icon ? this.icon.url : '';
      // return ''
    },
    icon(): Icon|null {
      return this.tech && this.icons[this.tech] ? this.icons[this.tech] : null;
    }
  }
})
</script>

<style scoped lang="scss">
a img.icon{
  height: 2em;
}

.fullWidth {
  height: auto;
  width: 100%;
  line-height: 4em;
}
</style>