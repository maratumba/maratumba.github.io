<template>
  <div class="mt-4">
    <a :href  ="item.href">
      <div class="card">
        <div class="card-content">
          <div class="level mb-2">
            <div class="level-left">
              <p class="title is-4">{{ item.title}}</p>
            </div>
            <div class="level-right icon is-medium">
              <i class="fas fa-external-link-alt" ></i>
            </div>
          </div>
          <p class="subtitle is-5">{{ item.description }}</p>
        </div>
        <footer class="card-footer has-text-left">
            <p class="card-footer-item ">
                <lazy-tech-icon class="mr-2" is-icon :tech="tech" v-for="tech in item.technologies"  :key="tech"/>
            </p>
        </footer>
      </div>
    </a>
  </div>
</template>

<script lang="ts">
// wtf
import Vue from "vue";
export default Vue.extend({
  props: ["item"],
});
</script>

<style lang="scss" scoped>
.card:hover{
    box-shadow: 0 0.5em 1em -0.125em rgba($scheme-invert, 0.1), 0 0px 0 1px rgba($scheme-invert, 0.02)
}
.card{
    transition: box-shadow 0.5s;
}
</style>