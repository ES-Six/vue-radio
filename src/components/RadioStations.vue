<template>
  <div>
    <div class="radio-container">
      <a href="#" v-for="(station, index) in app_registered_stations" v-on:click="playRadioAppStation(index)" class="radio">
        <img v-bind:src="station.logo" v-bind:alt="station.alt" class="radio-logo"/>
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
            logo: "http://static.radio.fr/images/broadcasts/07/f7/3366/c300.png",
            alt: "France musique",
            stream_urls: []
          },
          {
            logo: "http://www.nrj.fr/img/logo-nrj.svg",
            alt: "NRJ",
            stream_urls: [
              "http://185.52.127.173/fr/30001/mp3_128.mp3?origine=fluxradios"
            ]
          },
          {
            logo: "https://cdn-radiotime-logos.tunein.com/s25232d.png",
            alt: "Skyrock",
            stream_urls: []
          },
          {
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/RFI_logo_2013.svg/1200px-RFI_logo_2013.svg.png",
            alt: "rfi",
            stream_urls: []
          },
          {
            logo: "https://static-media.streema.com/media/cache/23/72/23726fa68a7b868a8097c860233d19f4.jpg",
            alt: "RFM",
            stream_urls: []
          },
          {
            logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/8/8d/France_inter_2005_logo.svg/1024px-France_inter_2005_logo.svg.png",
            alt: "France inter",
            stream_urls: []
          },
          {
            logo: "http://www.resaprod.fr/NOSTALGIE-2015.jpg",
            alt: "Nostalgie",
            stream_urls: []
          },
          {
            logo: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Logo-vr.png",
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
