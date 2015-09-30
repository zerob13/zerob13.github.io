<template>
  <div class="wrapper">
    <component is="{{view}}" class="cube" keep-alive v-transition> </component>
  </div>
</template>

<script>
  module.exports = {
    el: function(){
      return '#app';
    },
    data: function() {
      return {
        view: 'cube'
      }
    },
    components: {
      'cube': require('./components/cube.vue')
    }
  }
</script>

<style src="./main.scss" lang="sass"></style>
