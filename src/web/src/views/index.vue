<template>
  <section>
    <Header></Header>
  </section>
</template>

<script>
import Header from '@/views/layout/header.vue';
import {commonsAjax} from '@/utils/requery'
export default {
  components:{
    Header
  },
  data(){
    return {
    }
  },
  mounted(){
    commonsAjax('/api/test', '', 'get')
    .then(res=>{
      console.log(res);
    })
    .catch(err=>{
      console.log(err);
    })
  }
}
</script>

<style lang="stylus" scoped>
#app
  width 100%
  height 100%
</style>

