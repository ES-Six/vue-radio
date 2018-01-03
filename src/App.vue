<template>
  <div id="app">
    <div class="background-animation">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <router-view class="main-page-container"/>
    </div>
    <nav-bar></nav-bar>
    <player></player>
  </div>
</template>
<script>
import Navbar from '@/components/Navbar';
import Player from '@/components/Player';

export default {
  name: 'app',
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
