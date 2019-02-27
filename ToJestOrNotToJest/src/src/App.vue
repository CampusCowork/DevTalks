<template>
  <div id="app">
    <addr></addr>
  </div>
</template>

<script>
import Addr from './components/Addr'

export default {
  name: 'app',

  components: {
    Addr
  }
}
</script>

<style>
@import 'assets/styles/tailwind.postcss';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
