<template>
  <div class="container" >
    <list class="list">
      <cell class="cell" v-for="(mission,index) in missions">
        <text class="test">测试一下</text>
      </cell>
    </list>
  </div>
</template>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    background-color: #f2f3f4;
  }
  
</style>

<script>
  export default {
    components: {

    },
    data () {
      return {
        missions: [],
        dialog: false,
        height: 667
      }
    },
    created () {
      console.log('test');//test eslint-plugin-vuefix
    },
    methods: {
      
    }
  }
</script>
