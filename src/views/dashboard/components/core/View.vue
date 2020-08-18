<template>
  <v-content>
    <router-view />
    <dashboard-core-footer />
  </v-content>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: {
    DashboardCoreFooter: () => import('./Footer.vue'),
  }
})
export default class DashboardCoreView extends Vue {
}
</script>