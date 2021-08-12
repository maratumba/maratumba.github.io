<template>
  <div style="margin-bottom: 2rem;width: 100%;" class="is-flex is-justify-content-center">
    <div>
      <img :src="dynamicImage" :alt="title">
      <div class="text is-size-6">{{ title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    filename: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
  computed: {
    dynamicImage() {
      return require(`~/assets/${this.filename}`);
    }
  }
};
</script>

<style>
.is-justify-content-center {
  justify-content: center;
}
</style>