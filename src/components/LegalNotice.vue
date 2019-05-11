<template>
  <div>
    <div class="text-container full-size">
      <div class="col-md-12 text-center about-title-container">
        <h1>Mentions légales</h1>
      </div>
      <div class="col-md-12">
        <p>
          Copyright 2019 vue-radio<br>
          <br>
          Par la présente, la permission est accordée sans aucune charge, à toute personne obtenant une copie de ce logiciel et des fichiers de documentation associés, d'utiliser le Logiciel sans restriction, y compris, sans limitation, les droits d'utiliser, copier, modifier, fusionner, publier, distribuer, sous-licencier et/ou vendre des copies du Logiciel, et d'en permettre l'utilisation aux personnes auxquelles il est fourni, sous réserve des conditions suivantes :<br>
          <br>
          L'avis de droit d'auteur ci-dessus et cet avis d'autorisation doivent être inclus dans toutes les copies ou parties substantielles du Logiciel.<br>
          <br>
          LE LOGICIEL EST FOURNI "TEL QUEL", SANS GARANTIE D'AUCUNE SORTE, EXPRESSE OU IMPLICITE, Y COMPRIS, MAIS SANS S'Y LIMITER, LES GARANTIES DE QUALITÉ MARCHANDE, D'ADAPTATION À UN USAGE PARTICULIER ET DE NON-CONTREFAÇON. EN AUCUN CAS, LES AUTEURS OU LES DÉTENTEURS DE DROITS D'AUTEUR NE PEUVENT ÊTRE TENUS RESPONSABLES DE TOUTE RÉCLAMATION, DOMMAGE OU AUTRE RESPONSABILITÉ, QUE CE SOIT DANS LE CADRE D'UNE ACTION EN RESPONSABILITÉ CONTRACTUELLE, DÉLICTUELLE OU AUTRE, DÉCOULANT DU LOGICIEL OU DE L'UTILISATION OU D'AUTRES TRANSACTIONS DU LOGICIEL OU EN RAPPORT AVEC CELUI-CI.<br>
          <br>
          L'enregistrement du direct est réalisé depuis l'ordinateur de l'utilisateur, par conséquent, l'auteur de ce site ne peut pas être tenu responsable en cas d'utilisation incorrecte de ce site, l'enregistrement du direct est effectué par l'utilisateur dans la cadre de la copie privée.<br>
          <br>
          Vue-radio n'utilise pas de cookie et est une application server-less (qui fonctionne via un simple hébergement web statique). Aucune donnée personelle n'est necessaire à l'utilisation de ce site internet.<br>
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
