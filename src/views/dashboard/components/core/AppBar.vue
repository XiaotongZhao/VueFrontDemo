<template>
  <v-app-bar id="app-bar" absolute app color="transparent" flat height="75">
    <v-btn
      class="mr-3"
      elevation="1"
      fab
      small
      @click="$store.state.drawer = !$store.state.drawer"
    >
      <v-icon v-if="value"> mdi-view-quilt </v-icon>

      <v-icon v-else> mdi-dots-vertical </v-icon>
    </v-btn>

    <v-toolbar-title
      class="hidden-sm-and-down font-weight-light"
      v-text="$route.name"
    />

    <v-spacer />

    <v-text-field
      :label="$t('search')"
      color="secondary"
      hide-details
      style="max-width: 165px"
    >
      <template v-if="$vuetify.breakpoint.mdAndUp" v-slot:append-outer>
        <v-btn class="mt-n2" elevation="1" fab small>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </template>
    </v-text-field>

    <div class="mx-3" />

    <v-btn class="ml-2" min-width="0" text to="/">
      <v-icon>mdi-view-dashboard</v-icon>
    </v-btn>

    <v-menu
      bottom
      left
      offset-y
      origin="top right"
      transition="scale-transition"
    >
      <template v-slot:activator="{ attrs, on }">
        <v-btn class="ml-2" min-width="0" text v-bind="attrs" v-on="on">
          <v-badge color="red" overlap bordered>
            <template v-slot:badge>
              <span>5</span>
            </template>

            <v-icon>mdi-bell</v-icon>
          </v-badge>
        </v-btn>
      </template>

      <v-list :tile="false" nav>
        <div>
          <app-bar-item v-for="(n, i) in notifications" :key="`item-${i}`">
            <v-list-item-title v-text="n" />
          </app-bar-item>
        </div>
      </v-list>
    </v-menu>

    <v-btn class="ml-2" min-width="0" text to="/pages/user">
      <v-icon>mdi-account</v-icon>
    </v-btn>
  </v-app-bar>
</template>
<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { VHover, VListItem } from "vuetify/lib";
import { mapState, mapMutations } from "vuex";

@Component({
  components: {
    AppBarItem: {
      render(h: any) {
        return h(VHover, {
          scopedSlots: {
            default: ({ hover }: any) => {
              return h(
                VListItem,
                {
                  attrs: this.$attrs,
                  class: {
                    "black--text": !hover,
                    "white--text secondary elevation-12": hover,
                  },
                  props: {
                    activeClass: "",
                    dark: hover,
                    link: true,
                    ...this.$attrs,
                  },
                },
                this.$slots.default
              );
            },
          },
        });
      },
    },
  },
})
export default class DashboardCoreAppBar extends Vue {
  @Prop({ default: true }) readonly value!: boolean;

  private notifications: Array<string> = [
    "Mike John Responded to your email",
    "You have 5 new tasks",
    "You're now friends with Andrew",
    "Another Notification",
    "Another one",
  ];
}
</script>
