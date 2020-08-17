<template>
  <div class="mt-4">
    <a href="#">
      <div class="card">
        <div class="card-image px-2 py-2">
          <figure class="image is-square">
            <tech-icon :tech="skill" />
          </figure>
        </div>
        <!-- <div class="card-content"> -->
          <p class="subtitle is-6 has-centered-text">{{ text }}</p>
        <!-- </div> -->
      </div>
    </a>
  </div>
</template>

<script lang="ts">

import Vue from "vue";
export default Vue.extend({
  props: ["skill", "text"],
});
</script>

<style scoped lang="scss">
.card:hover{
    box-shadow: 0 0.5em 1em -0.125em rgba($scheme-invert, 0.1), 0 0px 0 1px rgba($scheme-invert, 0.02)
}
.card{
  transition: box-shadow 0.5s;
  border-radius: 10px;
}
</style>