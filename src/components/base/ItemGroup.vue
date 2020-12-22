<template>
  <v-list-group
    :group="group"
    :prepend-icon="item.icon"
    :sub-group="subGroup"
    append-icon="mdi-menu-down"
    :color="
      barColor !== 'rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.7)'
        ? 'white'
        : 'grey darken-1'
    "
  >
    <template v-slot:activator>
      <v-list-item-icon
        v-if="text"
        class="v-list-item__icon--text"
        v-text="computedText"
      />

      <v-list-item-avatar
        v-else-if="item.avatar"
        class="align-self-center"
        color="white"
        contain
      >
        <v-img
          src="https://demos.creative-tim.com/vuetify-material-dashboard/favicon.ico"
        />
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title v-text="item.title" />
      </v-list-item-content>
    </template>

    <template v-for="(child, i) in children">
      <base-item-sub-group
        v-if="child.children"
        :key="`sub-group-${i}`"
        :item="child"
      />

      <base-item v-else :key="`item-${i}`" :item="child" text />
    </template>
  </v-list-group>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import kebabCase from "lodash/kebabCase";
import { State, Mutation } from "vuex-class";

@Component
export default class ItemGroup extends Vue {
  private inheritAttrs: boolean = false;
  private barColor: string = this.$store.state.barColor;

  @Prop({
    default: {
      avatar: undefined,
      group: undefined,
      title: undefined,
      to: undefined,
      children: [],
    },
  })
  readonly item!: any;
  @Prop({ default: false }) readonly subGroup!: boolean;
  @Prop({ default: false }) readonly text!: boolean;

  get computedText(): string {
    if (!this.item || !this.item.title) return "";

    let text = "";

    this.item.title.split(" ").forEach((val: string) => {
      text += val.substring(0, 1);
    });

    return text;
  }

  get group() {
    return this.genGroup(this.item.children);
  }

  genGroup(children: []) {
    return children
      .filter((item: any) => item.to)
      .map((item: any) => {
        const parent = item.group || this.item.group;
        let group = `${parent}/${kebabCase(item.to)}`;

        if (item.children) {
          group = `${group}|${this.genGroup(item.children)}`;
        }

        return group;
      })
      .join("|");
  }
}
</script>

<style>
.v-list-group__activator p {
  margin-bottom: 0;
}
</style>
