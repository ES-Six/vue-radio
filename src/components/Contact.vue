<template>
  <div>
    <div class="text-container full-size">
      <div class="col-md-12 text-center about-title-container">
        <h1>Contact</h1>
      </div>
      <div class="col-md-12">
        <p>
          Vous pouvez contacter de dévellopeur de ce site web à l'adresse suivante :
          <a href="mailto:brendan.bobis@epitech.eu" target="_blank">brendan.bobis@epitech.eu</a>
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
