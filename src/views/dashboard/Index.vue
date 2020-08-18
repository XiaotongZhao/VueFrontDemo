<template>
  <v-app>
    <dashboard-core-app-bar />
    <dashboard-core-drawer />
    <dashboard-core-view />
    <dashboard-core-settings />
  </v-app>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: {
    DashboardCoreAppBar: () => import("./components/core/AppBar.vue"),
    DashboardCoreDrawer: () => import("./components/core/Drawer.vue"),
    DashboardCoreSettings: () => import("./components/core/Settings.vue"),
    DashboardCoreView: () => import("./components/core/View.vue"),
  }
})
export default class DashboardIndex extends Vue {
  private expandOnHover: Boolean = false;
}
</script>
