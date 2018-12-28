<template>
  <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
      <div class="container">
        <a class="navbar-brand" href="index.html">JEDY</a>
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
          <i class="fas fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <!-- <a class="nav-link" href="index.html">首页</a> -->
              <router-link class="nav-link" to="/index" >首页</router-link>
            </li>
            <li class="nav-item">
              <!-- <a class="nav-link" href="about.html">技术</a> -->
              <router-link class="nav-link" to="/program" >技术</router-link>
            </li>
            <li class="nav-item">
              <!-- <a class="nav-link" href="post.html">杂念</a> -->
              <router-link class="nav-link" to="/fantasy" >杂念</router-link>
            </li>
            <li class="nav-item">
              <!-- <a class="nav-link" href="contact.html">给我留言</a> -->
              <router-link class="nav-link" to="/contact" >给我留言</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
   
</template>

<script>
  
export default {
  methods:{
    
  }
}
</script>


<style>

</style>
