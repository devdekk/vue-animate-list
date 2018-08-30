<template>
  <div id="app">
    <h3>Vue.js - Make A List   <icon name="clipboard-list"></icon> </h3>
    <Items/>
  </div>
</template>

<script>
import Items from './components/Items.vue'

export default {
  name: 'app',
  components: {
    Items
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700');
body {
  background-color: #EEEEEE;
  font-family: 'Montserrat', sans-serif;
  display: grid;
  grid-template-rows: auto;
  justify-items: center;
  padding-top: 50px;
}
body, html {
  margin: 0;
  height: 100%;
}
#app {
    width: 50%;
}
nav {
  padding: 20px 20px 20px 0;
}
nav a {
  padding: 10px;
  text-decoration: none;
  background: #fff;
  border-radius: 3px;
  color: rgb(0, 110, 255);
  font-weight: bold;
  margin-right: 15px;
}

h3 {
    text-align:center;
    color:black;
  }
</style>
