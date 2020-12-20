<template>
  <v-list-item
    :href="href"
    :rel="href && href !== '#' ? 'noopener' : undefined"
    :target="href && href !== '#' ? '_blank' : undefined"
    :to="item.to"
    :active-class="`primary ${!isDark ? 'black' : 'white'}--text`"
  >
    <v-list-item-icon
      v-if="text"
      class="v-list-item__icon--text"
      v-text="computedText"
    />

    <v-list-item-icon v-else-if="item.icon">
      <v-icon v-text="item.icon" />
    </v-list-item-icon>

    <v-list-item-content v-if="item.title || item.subtitle">
      <v-list-item-title v-text="item.title" />

      <v-list-item-subtitle v-text="item.subtitle" />
    </v-list-item-content>
  </v-list-item>
</template>
<script lang="ts">
import { Component, Prop, Vue, Mixins } from "vue-property-decorator";
import Themeable from "vuetify/lib/mixins/themeable";

@Component
export default class Item  extends Mixins(Themeable) {
  @Prop({
    default: {
      href: "",
      icon: "",
      subtitle: "",
      title: "",
      to: "",
    },
  })
  readonly item!: ItemModel;

  @Prop({
    default: false,
  })
  readonly text!: Boolean;

  get compuitedText(): string {
    if (!this.item || !this.item.title) return "";

    let text = "";

    this.item.title.split(" ").forEach((val) => {
      text += val.substring(0, 1);
    });

    return text;
  }

  get href(): string {
    return this.item.href || (!this.item.to ? "#" : "");
  }
}

export class ItemModel {
  constructor() {}

  public href: string = "";
  public icon: string = "";
  public subtitle: string = "";
  public title: string = "";
  public to: string = "";
}
</script>
