<template>
  <v-tabs
    v-model="internalValue"
    :active-class="`${color} ${$vuetify.theme.dark ? 'black' : 'white'}--text`"
    class="v-tabs--pill"
    hide-slider
    v-bind="$attrs"
  >
    <slot />

    <slot name="items" />
  </v-tabs>
</template>

<script lang="ts">
import { Component, Prop, Vue, Mixins } from "vue-property-decorator";
import Proxyable from 'vuetify/lib/mixins/proxyable'


@Component
export default class MaterialTabs  extends Mixins(Proxyable) {
  @Prop({
    default: 'primary'
  })
  readonly color!: String;
}
</script>


<style lang="sass">
.v-tabs--pill
  .v-tab,
  .v-tab:before
    border-radius: 24px

    &.v-tabs--icons-and-text
      .v-tab,
      .v-tab:before
        border-radius: 4px
</style>
