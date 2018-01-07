<template>
  <b-navbar toggleable="alway" sticky type="dark" class="navbar-bottom">

    <b-collapse is-nav id="player_collaped">
      <!-- Left aligned nav items -->
      <b-navbar-nav>
        <b-nav-item href="#">
          <i v-if="!isPlaying" v-on:click="playRadio()" class="fa fa-play interface-icon"></i>
          <i v-if="isPlaying" v-on:click="stopRadio()" class="fa fa-stop interface-icon"></i>
        </b-nav-item>
        <b-nav-text class="player-volume-slider">
          <vue-slider v-model="volume.value" tooltip="hover" v-bind:min="volume.min" v-bind:max="volume.max" @callback="applyVolume"/>
        </b-nav-text>
        <b-nav-item href="#" class="add-space-to-volume-icon">
          <i v-if="volume.value === 0" class="fa fa-volume-off interface-icon" v-on:click="volume.value = 30;applyVolume()"></i>
          <i v-if="volume.value > 0 && volume.value <= 50" class="fa fa-volume-down interface-icon" v-on:click="volume.value = 0;applyVolume()"></i>
          <i v-if="volume.value > 50" class="fa fa-volume-up interface-icon" v-on:click="volume.value = 0;applyVolume()"></i>
        </b-nav-item>
        <b-nav-item href="#">
          <i v-if="isRecording" v-on:click="stopRecordLiveStream()" class="fa fa-dot-circle-o interface-icon red"></i>
          <i v-if="recordingIsStoping" class="fa fa-dot-circle-o interface-icon orange"></i>
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
  import EventBus from '@/js/eventBus';
  const FileSaver = require('file-saver');

  export default {
    components: {
      VueSlider
    },
    mounted() {
      EventBus.$on('set-radio', this.setRadio);
      EventBus.$on('play-radio', this.playRadio);
      EventBus.$on('stop-radio', this.stopRadio);
      EventBus.$on('apply-volume', this.applyVolume);
      EventBus.$on('start-record-stream', this.startRecordLiveStream);
      EventBus.$on('stop-record-stream', this.stopRecordLiveStream);
    },
    data () {
      return {
        isPlaying: false,
        isRecording: false,
        recordingIsStoping: false,
        volume: {
          value: 40,
          min: 0,
          max: 100
        },
        radio: null,
        player: null,
        playerPlayer: null,
        recorder: null
      }
    },
    methods: {
      setRadio(radio) {
        this.$data.radio = radio;
      },
      playRadio() {
        if (this.$data.radio !== null && this.$data.radio.stream_urls.length > 0 && this.$data.player === null) {
          this.$data.recordingIsStoping = false;
          this.$data.player = new Audio(this.$data.radio.stream_urls[0]);
          this.$data.player.setAttribute("crossOrigin", "anonymous");
          this.applyVolume(this.$data.volume.value);
          this.$data.player.play();
          this.$data.isPlaying = true;
        }
      },
      stopRadio() {
        if (this.$data.player !== null) {
          this.$data.player.setAttribute("src", "");
          this.$data.player.pause();
          this.$data.player = null;
          this.$data.isPlaying = false;
        }
      },
      applyVolume()  {
        if (this.$data.player !== null) {
          this.$data.player.volume = this.$data.volume.value / 100;
        }
      },
      startRecordLiveStream() {
        if (this.$data.isRecording === false && this.$data.recordingIsStoping === false) {
          //Recuperation du context audio cross browser
          window.AudioContext = window.AudioContext || window.webkitAudioContext;
          const audio_context = new AudioContext();

          //Demarage du lecteur dédié à l'enregistrement
          this.$data.recorderPlayer = new Audio(this.$data.radio.stream_urls[0]);
          this.$data.recorderPlayer.setAttribute("crossOrigin", "anonymous");
          this.$data.recorderPlayer.oncanplay = () => {
            //Coupe le son pour le pas déranger l'utilisateur
            //L'enregistrement enregistrera quand même car on enregistre le flux audio et non le son qui sort des haut parleurs
            this.$data.recorderPlayer.muted = true;

            this.$data.recorderPlayer.play();
            //Capture du flux et enregistrement en temps réel avec recorder.js
            this.$data.recorderPlayer.captureStream = this.$data.recorderPlayer.captureStream || this.$data.recorderPlayer.mozCaptureStream;
            const audio_input = audio_context.createMediaStreamSource(this.$data.recorderPlayer.captureStream());
            this.$data.recorder = new Recorder(audio_input);
            this.$data.recorder.record();
            //Démuter sur firefox car firefox enregistre le son en sortie...
            if (this.$data.recorderPlayer.mozCaptureStream) //Sauf sur firefox
              this.$data.recorderPlayer.muted = false;
            //Affichage du symbole enregistrer...
            this.$data.isRecording = true;
          };
        }
      },
      stopRecordLiveStream() {
        if (this.$data.isRecording === true) {
          const vue_context = this;
          const audio_format = "audio/wav"; //mettre "audio/mpeg" pour exporter en MP3
          window.URL = window.URL || window.webkitURL; //Compatibilité entre les navigateurs pour l'export de blobs en URL


          this.$data.isRecording = false;
          this.$data.recordingIsStoping = true;

          //Arrêt du lecteur dédié à l'enregistrement
          this.$data.recorderPlayer.setAttribute("src", "");
          this.$data.recorderPlayer.pause();
          this.$data.recorderPlayer = null;

          //Arrêt de l'enregistreur et export en WAV ou MP3 selon le format choisi
          this.$data.recorder.stop();
          this.$data.recorder.exportWAV(function (blob) {
            const date = new Date();
            const day = (date.getDay() < 10 ? '0'+date.getDay() : date.getDay());
            const month = ((date.getMonth() + 1) < 10 ? '0'+(date.getMonth() + 1) : (date.getMonth() + 1));
            const year = date.getFullYear();
            FileSaver.saveAs(blob, "record_"+day+"-"+month+"-"+year+(audio_format === "audio/wav" ? ".wav" : ".mp3"));
            vue_context.$data.recorder.clear();
            vue_context.$data.recordingIsStoping = false;
          }, audio_format);
        }
      }
    }
  }
</script>
