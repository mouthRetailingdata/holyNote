<script setup>
import Toolbar from './components/Toolbar.vue';

</script>

<template>
  <div class="app">
    <Toolbar />
    <router-view />
  </div>
</template>

<style lang="scss" scoped>
.app {
  display: flex;
  height: 100vh;
  width: 100%;
  overflow: hidden;
}
</style>
