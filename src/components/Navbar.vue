<template>
  <b-navbar toggleable="md" sticky type="dark" class="navbar-top">

    <b-btn v-b-toggle.vertical-menu variant="transparent" class="vertical-menu-toggle show-top">
      <span class="icon-bar top-bar"></span>
      <span class="icon-bar middle-bar"></span>
      <span class="icon-bar bottom-bar"></span>
    </b-btn>
    <b-collapse id="vertical-menu" v-model="verticalMenuIsCollapsed" v-bind:class="{'opened': !verticalMenuIsCollapsed, 'closed': verticalMenuIsCollapsed}">
      <div class="container">
        <ul class="menu-items">
          <li v-on:click="verticalMenuIsCollapsed = false">
            <router-link to="/">Accueil</router-link>
          </li>
          <li v-on:click="verticalMenuIsCollapsed = false;startSaveRadio()">
            <a href="#">Enregistrer le direct</a>
          </li>
          <li v-on:click="verticalMenuIsCollapsed = false">
            <router-link to="/parameters">Parametres</router-link>
          </li>
          <li v-on:click="verticalMenuIsCollapsed = false">
            <router-link to="/about">A propos</router-link>
          </li>
          <li v-on:click="verticalMenuIsCollapsed = false">
            <router-link to="/contact">Contact</router-link>
          </li>
        </ul>
      </div>
    </b-collapse>

    <b-collapse is-nav id="nav_collapse">
      <!-- Center aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item class="d-none d-md-block radio-app-logo" to="/">
          <picture>
            <source srcset="static/img/webp/logo-without-text.webp" type="image/webp">
            <source srcset="static/img/png/logo-without-text.png" type="image/png">
            <img src="static/img/png/logo-without-text.png" alt="logo de Radio-App">
          </picture>
        </b-nav-item>
      </b-navbar-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <!--
        <b-nav-item href="#">Share</b-nav-item>
        -->
      </b-navbar-nav>

    </b-collapse>

  </b-navbar>
</template>
<script>
  import eventBus from '@/js/eventBus';

  export default {
    data () {
      return {
        verticalMenuIsCollapsed: false
      }
    },
    methods: {
      startSaveRadio() {
        eventBus.$emit('start-record-stream');
      },
      stopSaveRadio() {
        eventBus.$emit('stop-record-stream');
      },
    }
  }
</script>
