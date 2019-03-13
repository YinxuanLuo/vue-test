import Vue from "vue";
import VueRouter from "vue-router";

import home from "../components/home.vue";
import about from "../components/about.vue";
import page from "../components/page.vue";
import user from "../components/user.vue";

import person from "../components/person.vue";
import hobbit from "../components/hobbit.vue";
import com from "../components/com.vue";

import slider from "../components/slider.vue";


Vue.use(VueRouter);
var a =1;
export {
    a
}
var router =  new VueRouter({
    linkActiveClass: "active",
    scrollBehavior(to, from){
        // console.log(to);
        // console.log(from);
        if(to.hash) {
            return {
                selector: to.hash
            }
        }
    },
  routes: [{
    path: "/",
    component: home
  },{
    path: "/home",
    component: home,
    meta: {
        index: 0
    }
  },{
    path: "/page",
    name: "page",
    components: {
        left: slider,
        default: page
    },
    meta: {
        index: 1
    }
  },{
      path: "/about",
      component: about,
      meta: {
          index: 2
      },
      children: [{
          path: "person",
          component: person
      },{
        path: "hobbit",
        component: hobbit
    },{
        path: "com",
        component: com
    }]
  },{
    path: "/user/:id?",
    component: user,
    meta: {
        index: 3,
        login: false
    },
    beforeEnter(to, from, next){
        console.log(to,from,next);
        next();
    }
  },{
      path: "*",
      redirect: "/home"
  },{
      path: "*",
      redirect(to){
        console.log(to.path);
      }
  }],
  mode: "hash"
});
// router.beforeEach((to, from, next) => {
//     console.log(to,from,next);
//     if(to.path == "/user"){
//         if(to.meta.login){
//             next();
//         }else{
//             next('/');
//         }
//     }
//     next();
// })

export default router;