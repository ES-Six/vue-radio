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

  export default {
    name: 'RadioPlayer',
    data () {
      return {
        app_registered_stations:  [
          {
            logo_png: "static/img/png/logo-france-musique.png",
            logo_webp: "static/img/webp/logo-france-musique.webp",
            alt: "France musique",
            stream_urls: []
          },
          {
            logo_png: "static/img/png/logo-nrj.png",
            logo_webp: "static/img/webp/logo-nrj.webp",
            alt: "NRJ",
            stream_urls: [
              "http://185.52.127.173/fr/30001/mp3_128.mp3?origine=fluxradios"
            ]
          },
          {
            logo_png: "static/img/png/logo-skyrock.png",
            logo_webp: "static/img/webp/logo-skyrock.webp",
            alt: "Skyrock",
            stream_urls: []
          },
          {
            logo_png: "static/img/png/logo-rfi.png",
            logo_webp: "static/img/webp/logo-rfi.webp",
            alt: "rfi",
            stream_urls: []
          },
          {
            logo_png: "static/img/png/logo-rfm.png",
            logo_webp: "static/img/webp/logo-rfm.webp",
            alt: "RFM",
            stream_urls: []
          },
          {
            logo_png: "static/img/png/logo-france-inter.png",
            logo_webp: "static/img/webp/logo-france-inter.webp",
            alt: "France inter",
            stream_urls: []
          },
          {
            logo_png: "static/img/png/logo-nostalgie.png",
            logo_webp: "static/img/webp/logo-nostalgie.webp",
            alt: "Nostalgie",
            stream_urls: []
          },
          {
            logo_png: "static/img/png/logo-virgin-radio.png",
            logo_webp: "static/img/webp/logo-virgin-radio.webp",
            alt: "Virgin radio",
            stream_urls: []
          }
        ]
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
