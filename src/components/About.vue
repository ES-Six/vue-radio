<template>
  <div>
    <div class="text-container full-size">
      <div class="col-md-12 text-center about-title-container">
        <h1>A propos de Radio-App</h1>
      </div>
      <div class="col-md-12">
        <p>
          Radio-App est une application web permettant d'écouter gratuitement la radio par l'intermédiaire d'une connection internet.<br>
          Cette application web est optimisé au maximum pour vous garantir une experience d'utilisation inégalée que ce soit sur smartphone, tablette ou sur PC.<br>
          Radio-App ne diffuse pas de publicité et ne collècte aucune donnée personelle dans le but de réspecter votre vie privée.<br>
          <br>
          Si vous souhaitez remercier l'auteur de cette application ou que vous souhaitez participer à maintenir cette application web en ligne vous pouvez faire un don en suivant ce lien : <br>
          <a href="#">Lien vers la page de donation</a>
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
