<template>
  <v-app dark class="background-main">
    <v-main>
      <Loading3/>
      <nuxt />
    </v-main>
  </v-app>
</template>
<style lang="sass">
@import "~/assets/style.sass"
</style>

<script>
import Loading3 from '~/components/Loadings/loading3.vue'
export default {
  components:{
    Loading3
  }
}
</script>
