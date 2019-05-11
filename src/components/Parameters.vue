<template>
  <div>
    <div class="text-container full-size">
      <div class="col-md-12 text-center about-title-container">
        <h1>Paramètres</h1>
      </div>
      <div class="col-md-12">
        <ul>
          <li>
            Format d'enregistrement du direct:
            <label>MP3</label>
            <input type="radio" v-model="directRecord" value="audio/mpeg"/>
            <label>WAV</label>
            <input type="radio" v-model="directRecord" value="audio/wav"/>
          </li>
          <li>
            Animation en arrière plan:
            <label>OUI</label>
            <input type="radio" v-model="animate" value="1"/>
            <label>NON</label>
            <input type="radio" v-model="animate" value="0"/>
          </li>
          <li class="spacing">
            <button class="btn btn-danger btn-fixed-size" v-on:click="reset()">Tout Réinitialiser</button>
          </li>
          <li class="spacing">
            <button class="btn btn-success btn-fixed-size" v-on:click="save()">Enregistrer</button>
            <button class="btn btn-danger btn-fixed-size" v-on:click="cancel()">Annuler</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import EventBus from '@/js/eventBus';

  export default {
    name: 'Parameters',
    mounted() {
      EventBus.$emit('set-text-friendly-background', true);
      this.initialize();
    },
    beforeDestroy() {
      EventBus.$emit('set-text-friendly-background', false);
    },
    data () {
      return {
        directRecord: "audio/wav",
        animate: 1
      }
    },
    methods: {
      initialize() {
        if(window.localStorage.getItem('config') === null) {
          window.localStorage.setItem('config', JSON.stringify(this.getDefaultConfig()));
        }
        const config = JSON.parse(window.localStorage.getItem('config'));
        this.$data.directRecord = config.directRecord;
        this.$data.animate = (config.animate ? 1 : 0);
      },
      getDefaultConfig() {
        return {
          directRecord: "audio/wav",
          animate: 1
        };
      },
      apply() {
        const config = JSON.parse(window.localStorage.getItem('config'));
        EventBus.$emit('set-background-animation', config.animate);
      },
      save() {
        window.localStorage.setItem('config', JSON.stringify({
          directRecord: this.$data.directRecord,
          animate: !!+this.$data.animate
        }));
        this.apply();
        window.location.href = "#/";
      },
      cancel() {
        window.location.href = "#/";
      },
      reset() {
        window.localStorage.setItem('config', JSON.stringify(this.getDefaultConfig()));
        this.apply();
        window.location.href = "#/";
      }
    }
  }
</script>
