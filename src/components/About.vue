<template>
  <div>
    <div class="text-container full-size">
      <div class="col-md-12 text-center about-title-container">
        <h1>A propos de Vue-Radio</h1>
      </div>
      <div class="col-md-12">
        <p>
          Vue-Radio est une application web progressive permettant d'écouter gratuitement la radio par l'intermédiaire d'une connection internet.<br>
          Cette application web est optimisé au maximum pour vous garantir une experience d'utilisation inégalée que ce soit sur smartphone, tablette ou sur PC.<br>
          Vue-Radio ne diffuse pas de publicité et ne collècte aucune donnée personelle dans le but de réspecter votre vie privée.<br>
          <br>
          Si vous souhaitez contacter l'auteur de cette application ou que vous souhaitez proposer des améliorations, n'hésitez pas à :<br>
          <router-link to="/contact">envoyer un courriel</router-link><br>
          <br>
          Cette web app est open source, consultez et téléchargez les sources ici :<br>
          <a href="https://github.com/andnerb/vue-radio" target="_blank">https://github.com/andnerb/vue-radio</a><br>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
  import EventBus from '@/js/eventBus';

  export default {
    name: 'About',
    mounted() {
      EventBus.$emit('set-text-friendly-background', true);
    },
    beforeDestroy() {
      EventBus.$emit('set-text-friendly-background', false);
    }
  }
</script>
