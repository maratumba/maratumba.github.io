<template>
  <div class="">
    <a :href  ="item.href">
      <div class="card border" :class="{'primary-color': !color}" :style="{'background-color': color}"> 
        <div class="card-image p-4">
          <figure class="image is-1x1">
            <img :src="icon" class="" alt="Placeholder image" />
          </figure>
        </div>
        <div class="card-content ">
          <div class="" v-if="item">
            <p class="title is-6">{{ item.title }}</p>
          </div>
          <span class="card-footer-item pt-5">
            <lazy-tech-icon is24 :tech="tech" v-for="tech in item.technologies"  :key="tech"/>
          </span>
        </div>
      </div>
    </a>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
// import { PortfolioItem } from "~/models/PortfolioItem";
interface PortfolioItem {
  href: string;
  title: string;
  icon: string;
  tags: string[];
  technologies: string[];
}

export default Vue.extend({
  props: {
    item: {
      type: Object as PropType<PortfolioItem>,
    },
    color: {
      // default: '#333'
    },
  },
  computed: {
    icon(): string {
      return this.item && this.item.icon
        ? require(`~/assets/media/portfolio/${this.item.icon}`)
        : "";
    },
  },
});
</script>

<style lang="scss" scoped>
.p-4 {
  padding: 2rem;
}
.border {
  border: 2px #80808030 solid;
}
.primary-color.dark {
  background-color: $primary;
}
::v-deep .nuxt-content {
  .dark {
    color: $white-ter;
  }
  ul {
    list-style: square;
    list-style-position: inside;
  }
}
.card-title {
  text-overflow: ellipsis;
  overflow: hidden;
}
.title.dark,
.subtitle.dark {
  color: $white-ter;
}
.card:hover {
  box-shadow: 0 0.5em 1em -0.125em rgba($scheme-invert, 0.5),
    0 0px 0 1px rgba($scheme-invert, 0.02);
}
.card {
  min-height: 4rem;
  max-height: 20rem;
  transition: box-shadow 0.5s;
  border-radius: 10px;
}
</style>