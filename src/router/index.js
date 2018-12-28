import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/pages/index'
import About from '../components/pages/about'
import Post from '../components/pages/post'
import Contact from '../components/pages/contact'
import Program from '../components/pages/program'
import Fantasy from '../components/pages/fantasy'


Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',component:Index},
    {path:'/index',component:Index},
    {path:'/about',component:About},
    {path:'/post',component:Post},
    {path:'/contact',component:Contact},
    {path:'/program',component:Program},
    {path:'/fantasy',component:Fantasy},
  ]
})
