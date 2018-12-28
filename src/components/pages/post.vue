<template>
  <div>
      <!-- Page Header -->
    <header class="masthead" style="background-image: url('static/img/post-bg.jpg')">
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
            <div class="post-heading">
              <h1>{{ title }}</h1>
              <h2 class="subheading">{{subhead}}</h2>
              <span class="meta">Posted by
                <a href="#">Jedy</a>
                on {{ createTime | formatDate }}</span>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Post Content -->
    <article>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
            <div class="descBox" v-html='context'></div>
          </div>
        </div>
      </div>
    </article>

    <hr>
  </div>
</template>

<script>
import {formatDate} from '../../../static/js/date.js'
export default {
   data(){
        return {
            title:'',
            subhead:'',
            context:'',
            createTime:''
        }
    },
    filters:{
    formatDate(time){
      let date = new Date(time);
      return formatDate(date,'yyyy-MM-dd');
    }},
    created(){
        this.getWrite();
    },
    methods:{
        getWrite(){
           var id = this.$route.query.id;
            this.$http.get('http://119.3.74.205:8080/springboot/articleSelectById?id='+id).then(result =>{
                console.log(result.body);
                this.title = result.body.message.title;
                this.subhead = result.body.message.subhead;
                this.context = result.body.message.context;
                this.createTime = result.body.message.createTime;
                })
        }
    }
}
</script>


<style>

</style>
