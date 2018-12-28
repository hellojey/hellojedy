<template>
  <div id="app">
    <Nav></Nav>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Nav from './components/public/nav'
import Footer from './components/public/footer'
export default {
  components:{
        Nav,
        Footer
  },
}
</script>

<style>

</style>
