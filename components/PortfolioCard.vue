<template>
  <div class="mt-4">
    <a :href  ="item.href">
      <div class="card" :class="{'primary-color': !color}" :style="{'background-color': color}">
        <div class="card-content ">
          <!-- <div class="level mb-2"> -->
            <div class="media">
              <div class="media-left" v-if="item.icon">
                <figure class="image is-128x128">
                  <img :src="icon" class="" alt="Placeholder image" />
                  <span class="card-footer-item pt-5">
                    <lazy-tech-icon is24 :tech="tech" v-for="tech in item.technologies"  :key="tech"/>
                  </span>
                </figure>
              </div>
              <div class="media-content no-overflow" v-if="item">
                <p class="title is-4">{{ item.title }}</p>
                <nuxt-content class="subtitle is-6" :document="item"/>
                <!-- <p class="subtitle is-6 has-text-grey">@{{ user.username }}</p> -->
              </div>
            </div>
            <!-- <div class="level-right icon is-medium">
              <i class="fas fa-external-link-alt" ></i>
            </div>
          </div> -->
          <!-- <p class="subtitle is-5">{{ item.description }}</p> -->
        </div>
        <!-- <footer class="card-footer has-text-left">
            <p class="card-footer-item ">
                <lazy-tech-icon class="mr-2" is-icon :tech="tech" v-for="tech in item.technologies"  :key="tech"/>
            </p>
        </footer> -->
      </div>
    </a>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
// import { PortfolioItem } from "~/models/PortfolioItem";
interface PortfolioItem {
  href: string,
  title: string,
  icon: string,
  tags: string[],
  technologies: string[],
}

export default Vue.extend({
  props: {
    item: {
      type: Object as PropType<PortfolioItem>,
    },
    color: {
      // default: '#333'
    }
  },
  computed: { 
    icon(): string{
      return this.item && this.item.icon ? require(`~/assets/media/portfolio/${this.item.icon}`) : '';
    }
  }
});
</script>

<style lang="scss" scoped>
.primary-color {
  background-color: $primary;
}
::v-deep .nuxt-content {
  color: $white-ter;
  ul {
    list-style: square;
    list-style-position: inside
  }
}
.card-title {
  text-overflow: ellipsis;
  overflow: hidden; 
}
.title, .subtitle {
  color: $white-ter;
}
.card-content {
  min-height: 14rem;
}

.card:hover{
    box-shadow: 0 0.5em 1em -0.125em rgba($scheme-invert, 0.5), 0 0px 0 1px rgba($scheme-invert, 0.02)
}
.card{
    transition: box-shadow 0.5s;
    border-radius: 10px;
}
</style>