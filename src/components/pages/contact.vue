<template>
  <div>
      <!-- Page Header -->
    <header class="masthead" style="background-image: url(static/img/fire2.jpg)">
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
            <div class="page-heading">
              <h1>欢迎给我留言</h1>
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
          <p>你可以给我留言，后台会收到你的信息，我或许会通过你的联系方式回复你。</p>
          <!-- Contact Form - Enter your email address on line 19 of the mail/contact_me.php file to make this form work. -->
          <!-- WARNING: Some web hosts do not allow emails to be sent through forms to common mail hosts like Gmail or Yahoo. It's recommended that you use a private domain email address! -->
          <!-- To use the contact form, your site must be on a live web host with PHP! The form will not work locally! -->
          <form name="sentMessage" id="contactForm" novalidate>
            <div class="control-group">
              <div class="form-group floating-label-form-group controls">
                <label>Name</label>
                <input v-model="name" type="text" class="form-control" placeholder="不填写的话默认为匿名" id="name" required data-validation-required-message="不填写的话默认为匿名">
                <p class="help-block text-danger"></p>
              </div>
            </div>
            <div class="control-group">
              <div class="form-group floating-label-form-group controls">
                <label>Email Address or Phone Number</label>
                <input v-model="email" type="email" class="form-control" placeholder="填写你的联系方式，手机或E-mail都可以" id="email" required data-validation-required-message="填写你的联系方式，手机或E-mail都可以">
                <p class="help-block text-danger"></p>
              </div>
            </div>
            <div class="control-group">
              <div class="form-group floating-label-form-group controls">
                <label>Message</label>
                <textarea v-model="context" rows="5" class="form-control" placeholder="写下你的留言" id="message" required data-validation-required-message="写下你的留言"></textarea>
                <p class="help-block text-danger"></p>
              </div>
            </div>
            <br>
            <div id="success"></div>
            <div class="form-group">
              <button @click="submit" type="submit" class="btn btn-primary" id="sendMessageButton">确认</button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <hr>
  </div>
</template>

<script>
export default {
   data(){
        return {
            name:'',
            email:'',
            context:''
        }
    },
     methods:{
                submit(){
                var formData = new window.FormData();
                formData.append('name',this.name);
                formData.append('email',this.email); 
                formData.append('context',this.context);
                console.log(formData);              
                this.$http.post("http://119.3.74.205:8080/springboot/contactAdd",formData,{emulateJSON:true})
                .then(resource =>{
                console.log(resource);
                })
                }
            },
}
</script>


<style>

</style>