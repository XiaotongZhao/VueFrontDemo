<template>
  <v-card class="text-center v-card--testimony">
    <div class="pt-6">
      <v-icon color="black" x-large>mdi-format-quote-close</v-icon>
    </div>
    <v-card-text class="display-1 font-weight-light font-italic mb-3" v-text="blurb" />
    <div class="display-2 font-weight-light mb-2" v-text="author" />
    <div class="body-2 text-uppercase grey--text" v-text="handle" />
    <v-avatar class="elevation-12" color="grey" size="100">
      <v-img :alt="`${author} Testimonial`" :src="avatar" />
    </v-avatar>
    <div />
  </v-card>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component
export default class BaseMaterialTestimony extends Vue {
  @Prop({ default: "" }) readonly author!: string;
  @Prop({ default: "" }) readonly blurb!: string;
  @Prop({ default: "" }) readonly handle!: string;
  @Prop({ default: "https://demos.creative-tim.com/material-dashboard/assets/img/faces/card-profile1-square.jpg" }) readonly avatar!: string;
}
</script>
<style lang="sass">
.v-card--testimony
  padding-bottom: 72px
  margin-bottom: 64px

  .v-avatar
    position: absolute
    left: calc(50% - 64px)
    top: calc(100% - 64px)
</style>
