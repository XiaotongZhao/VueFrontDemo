<template>
  <section class="mb-12 text-center">
    <h1 class="font-weight-light mb-2 headline" v-text="`Vuetify ${heading}`" />
    <span class="font-weight-light subtitle-1">
      Please checkout the
      <a
        :href="`https://vuetifyjs.com/${link}`"
        rel="noopener"
        target="_blank"
        class="secondary--text"
        style="text-decoration:none;"
      >full documentation</a>
    </span>
  </section>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component
export default class VComponent extends Vue {
  @Prop({ default: "" }) readonly heading!: string;
  @Prop({ default: "" }) readonly link!: string;
}
</script>

