<template>
  <component :is="publication.Src ? 'a' : 'div'" :src="publication.Src" noreferrer nofollow target="_blank">
      <div class="card mt-4">
        <div class="card-content">
          <div class="content">
            <div class="media">
              <div class="media-left" >
                <figure class="image ml-0 mr-2" >
                  <img :src="thumbSrc" style="width: 6rem; height: 8rem;" v-if="publication.Thumb"/>
                  <div v-else style="width: 6rem; height: 8rem;">
                  </div>
                </figure>
              </div>
              <div class="media-content" :class="{'text-opacity-75': !publication.Src}">
                <div class="title is-5" >{{ publication.Title }} <span v-if="publication.Year">({{ publication.Year }})</span></div>
                <div class="subtitle is-6">
                  <span>{{ publication.Authors }}</span>
                  <span>{{ publication.Publication }}</span>
                  <span>{{ publication.Volume }}</span>
                  <span v-if="publication.Number">({{ publication.Number }})</span><span v-if="publication.Pages">, {{ publication.Pages }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </component>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: ["publication"],
  computed: {
    thumbSrc(){
      return require(`~/assets/media/publication-thumbs/${this.publication.Thumb}`)
    }
  }
});
</script>

<style lang="scss" scoped>
.text-opacity-75 {
  opacity: .75;
}
.extend-left {
  // padding-left: 20px;
  // margin-left: -20px;
}
.title {
    line-height: 1.2em;
}
figure img, figure div {
  height: 100%;
  outline: inset 5px #333;
}
.card:hover{
    box-shadow: 0 0.5em 1em -0.125em rgba($scheme-invert, 0.1), 0 0px 0 1px rgba($scheme-invert, 0.02)
}
.card{
  transition: box-shadow 0.5s;
  background-size: cover;
  background-position: center;
}

</style>