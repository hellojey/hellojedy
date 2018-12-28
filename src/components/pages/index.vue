<template>
<div>
<!-- Page Header -->
    <header class="masthead" style="background-image: url(static/img/fire2.jpg)">
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
            <div class="site-heading">
              <h1>业力的星球</h1>
              <span class="subheading">逆向人流、独自思考</span>
            </div>
          </div>
        </div>
      </div>
    </header>


    <!-- Main Content -->
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          
          
          <div class="post-preview" v-for="write in writes" v-bind:key="write.id">
            <router-link href="post.html"  :to="{path:'/post', query:{id:write.id}}">
              <h2 class="post-title">
               {{ write.title }}
              </h2>
              <h3 class="post-subtitle">
               {{ write.subhead }}
              </h3>
            </router-link>
            <p class="post-meta">Posted by
              <a href="#">JEDY</a>
              on {{ write.createTime | formatDate }}</p>
          </div>

          <hr>
          
          <!-- Pager -->
          <div class="clearfix">
            <a class="btn btn-primary float-right" href="#" @click="Older">过往文章 &rarr;</a>
          </div>
        </div>
      </div>
    </div>
    <hr>
  </div>
</template>

<script>        
import {formatDate} from '../../../static/js/date.js'
export default {
  data(){
        return {
            writes:[]
        }
    },
    filters:{
    formatDate(time){
      let date = new Date(time);
      return formatDate(date,'yyyy-MM-dd');
    }},
    created(){
        this.visitorInfo();
        this.selectAll();
    },
    methods:{
        visitorInfo(){
          this.$http.get('http://119.3.74.205:8080/springboot/visitorInfo').then(result =>{
                console.log("欢迎");
                })
        },
        selectAll(){
            this.$http.get('http://119.3.74.205:8080/springboot/articleSelectAll').then(result =>{
                this.writes = result.body.message;
                console.log(this.writes);
                })
        },
        Older(){
          alert("刚建站不久,没有更多文章");
        }

    }
}
</script>


<style>

</style>
