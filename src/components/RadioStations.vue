<template>
  <div>
    <div class="radio-container">
      <a href="#" v-for="(station, index) in app_registered_stations" v-on:click="playRadioAppStation(index)" class="radio">
        <picture>
          <source v-if="station.logo_webp !== null" v-bind:srcset="station.logo_webp" type="image/webp">
          <source v-if="station.logo_png !== null" v-bind:srcset="station.logo_png" type="image/png">
          <img v-if="station.logo_png !== null" v-bind:src="station.logo_png" v-bind:alt="station.alt" class="radio-logo">
        </picture>
      </a>
    </div>
  </div>
</template>
<script>
  import eventBus from '@/js/eventBus';
  import radioStations from "@/js/radioStations";

  export default {
    name: 'RadioPlayer',
    data () {
      return {
        app_registered_stations: radioStations
      }
    },
    methods: {
      playRadioAppStation(index) {
        let station = this.$data.app_registered_stations[index];
        eventBus.$emit('stop-radio');
        eventBus.$emit('set-radio', station);
        eventBus.$emit('play-radio');
      }
    }
  }
</script>
