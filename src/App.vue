<template>
  <div id="app">
    <div class="background-animation">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div class="global-container" v-bind:class="{'text-friendly-background': displayTextFriendlyBackground}">
        <nav-bar></nav-bar>
        <router-view class="main-page-container"/>
        <player></player>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from '@/components/Navbar';
import Player from '@/components/Player';
import EventBus from '@/js/eventBus';

export default {
  name: 'app',
  created() {
    EventBus.$on('set-text-friendly-background', this.setTextFriendlyBackground);
  },
  data () {
    return {
      displayTextFriendlyBackground: false,
    }
  },
  methods: {
    setTextFriendlyBackground(status) {
      this.$data.displayTextFriendlyBackground = status;
    }
  },
  components: {
    'nav-bar': Navbar,
    'player': Player
  }
}
</script>
<style>
  @import 'bootstrap/dist/css/bootstrap.css';
  @import 'bootstrap-vue/dist/bootstrap-vue.css';
  @import './css/style.css';
</style>
