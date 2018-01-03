<template>
  <div>
    <div class="radio-container">
      <a href="#" v-for="(station, index) in app_registered_stations" class="radio">
        <img v-bind:src="station.logo" v-bind:alt="station.alt" class="radio-logo"/>
      </a>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'RadioPlayer',
    data () {
      return {
        app_registered_stations:  [
          
        ]
      }
    },
    methods: {
      playRadioAppStation: (index) => {
        let station = this.$data.app_registered_stations[index];
      }
    }
  }
</script>
