<template>
  <b-navbar toggleable="alway" fixed="bottom" type="dark" class="navbar-bottom">

    <b-collapse is-nav id="player_collaped">
      <!-- Left aligned nav items -->
      <b-navbar-nav>
        <b-nav-item href="#">
          <i v-if="!is_playing" class="fa fa-play interface-icon"></i>
          <i v-if="is_playing" class="fa fa-stop interface-icon"></i>
        </b-nav-item>
        <b-nav-text class="player-volume-slider">
          <vue-slider v-model="volume.value" tooltip="hover" v-bind:min="volume.min" v-bind:max="volume.max"/>
        </b-nav-text>
        <b-nav-item href="#">
          <i v-if="volume.value === 0" class="fa fa-volume-off interface-icon" v-on:click="volume.value = 30"></i>
          <i v-if="volume.value > 0 && volume.value <= 50" class="fa fa-volume-down interface-icon" v-on:click="volume.value = 0"></i>
          <i v-if="volume.value > 50" class="fa fa-volume-up interface-icon" v-on:click="volume.value = 0"></i>
        </b-nav-item>
      </b-navbar-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto not-for-mobile">
        <b-nav-item href="#">Site de cette radio</b-nav-item>
      </b-navbar-nav>

    </b-collapse>

  </b-navbar>
</template>
<script>
  import VueSlider from 'vue-slider-component';

  export default {
    components: {
      VueSlider
    },
    data () {
      return {
        is_playing: false,
        volume: {
          value: 40,
          min: 0,
          max: 100
        }
      }
    }
  }
</script>
