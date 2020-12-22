<template>
  <v-snackbar
    v-model="internalValue"
    class="v-snackbar--material"
    v-bind="{
      ...$attrs,
      color: 'transparent',
    }"
  >
    <base-material-alert
      v-model="internalValue"
      :color="$attrs.color"
      :dismissible="dismissible"
      :type="type"
      class="ma-0"
      dark
    >
      <slot />
    </base-material-alert>
  </v-snackbar>
</template>
<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";

@Component
export default class BaseMaterialSnackbar extends Vue {
  @Prop({ default: true }) readonly dismissible!: boolean;
  @Prop({ default: "" }) readonly type!: string;
  @Prop() readonly value!: Boolean;

  private internalValue: boolean = false;

  data() {
    return {
      internalValue: this.value,
    };
  }

  @Watch("internalValue")
  internalValueChange(val: string, oldVal: string) {
    if (val === oldVal) return;

    this.$emit("input", val);
  }

  @Watch("value")
  valueChange(val: boolean, oldVal: boolean) {
    if (val === oldVal) return;

    this.internalValue = val;
  }
}
</script>

<style lang="sass">
.v-snackbar--material
  margin-top: 32px
  margin-bottom: 32px

  .v-alert--material,
  .v-snack__wrapper
    border-radius: 4px

    .v-snack__content
      overflow: visible
      padding: 0
</style>
