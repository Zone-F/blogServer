<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Header from '@/views/layout/header.vue';
export default {
  components:{
    Header
  },
  data(){
    return {
    }
  }
}
</script>

<style lang="stylus" scoped>
#app
  width 100%
  height 100%
</style>

