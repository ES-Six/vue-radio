<template>
  <b-navbar toggleable="md" fixed="top" type="dark" class="navbar-top">

    <b-btn v-b-toggle.vertical-menu variant="transparent" class="vertical-menu-toggle show-top">
      <span class="icon-bar top-bar"></span>
      <span class="icon-bar middle-bar"></span>
      <span class="icon-bar bottom-bar"></span>
    </b-btn>
    <b-collapse id="vertical-menu" v-model="verticalMenuIsCollapsed" v-bind:class="{'opened': !verticalMenuIsCollapsed, 'closed': verticalMenuIsCollapsed}">
      <div class="container">
        <ul class="menu-items">
          <li v-on:click="verticalMenuIsCollapsed = false">
            <a href="#">Enregistrer le direct</a>
          </li>
          <li v-on:click="verticalMenuIsCollapsed = false">
            <a href="#">Parametres</a>
          </li>
          <li v-on:click="verticalMenuIsCollapsed = false">
            <a href="#">A propos</a>
          </li>
          <li v-on:click="verticalMenuIsCollapsed = false">
            <a href="#">Contact</a>
          </li>
          <li v-on:click="verticalMenuIsCollapsed = false">
            <a href="#">Don</a>
          </li>
        </ul>
      </div>
    </b-collapse>

    <b-collapse is-nav id="nav_collapse">
      <!-- Center aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item class="d-none d-md-block radio-app-logo" href="#"><img src="../assets/logo-without-text.png" alt="Logo de Radio-App"></b-nav-item>
      </b-navbar-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#">Share</b-nav-item>
      </b-navbar-nav>

    </b-collapse>

  </b-navbar>
</template>
<script>
  export default {
    data () {
      return {
        verticalMenuIsCollapsed: false
      }
    }
  }
</script>
