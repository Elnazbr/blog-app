<template>
<!-- <div @click="$router.push('/')">jhgjh</div>
<div @click="$router.push('/me')">Обо мне</div> -->
  <nav-bar />
  <router-view></router-view>
</template>

<script>
import NavBar from './components/NavBar.vue'
export default {
  components: { NavBar },

}
</script>

<style>

</style>