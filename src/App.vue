<template>
  <div id="app">
    <div class="background-animation">
      <div id="stars"  v-bind:class="{'animate': animate}"></div>
      <div id="stars2" v-bind:class="{'animate': animate}"></div>
      <div id="stars3" v-bind:class="{'animate': animate}"></div>
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
    EventBus.$on('set-background-animation', this.setBackgroundAnimation);

    if(window.localStorage.getItem('config') !== null) {
      const config = JSON.parse(window.localStorage.getItem('config'));
      this.setBackgroundAnimation(config.animate);
    }
  },
  data () {
    return {
      displayTextFriendlyBackground: false,
      animate: true
    }
  },
  methods: {
    setTextFriendlyBackground(status) {
      this.$data.displayTextFriendlyBackground = status;
    },
    setBackgroundAnimation(animate) {
      this.$data.animate = animate;
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
