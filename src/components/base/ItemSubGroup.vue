<template>
  <base-item-group :item="item" text sub-group />
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class ItemSubGroup extends Vue {
   @Prop({
    default: {
      avatar: undefined,
      group: undefined,
      title: undefined,
      children: []
    },
  })
  readonly item!: Object;
}

</script>