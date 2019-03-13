<template>
    <div>
        <ul>
            <!-- <li><router-link :to="{path:'/home'}" active-class="a" exact>home</router-link></li>
            <li><router-link :to="{name: 'page'}" active-class="b">page</router-link></li>
            <router-link to="/about" tag="li">about</router-link>
            <li><router-link :to="{path:'/user'}" active-class="a">user</router-link></li> -->

            <li><router-link :to="{path:'/home'}" active-class="a" exact>home</router-link></li>
            <li><router-link :to="{path: '/page'}" active-class="b" exact>page</router-link></li>
            <li><router-link :to="{path: '/about'}" active-class="c" exact>about</router-link></li>
            <li><router-link :to="{path:'/user'}" active-class="d" exact>user</router-link></li>
        </ul>
        <!-- <transition mode="out-in" name="v">
            <router-view></router-view>
        </transition> -->
        <transition  :name="name" >
            <router-view class="center"></router-view>
        </transition>
        <!-- <transition :name="name"> -->
            <router-view name="left"></router-view>
        <!-- </transition> -->
    </div>
</template>
<script>
export default {
    data(){
        return {
            name: "right"
        }
    },
    watch: {
        $route(to, from) {
            debugger
            if(to.meta.index > from.meta.index) {
                this.name = "left"; 
            }else{
                this.name = "right";
            }
        }
    }
}
</script>
<style >
    .center{
        position: absolute;
        width: 100%;
        text-align: center;
    }
    ul{
        background-color: #eee;
    }
    ul li{
        list-style: none;
        height: 100px;
        width: 100px;
        display: inline-block;
        text-align: center;
        line-height: 100px;
    }
    ul li a{
        text-decoration: none;
        
    }
    .active{
        background-color: white;
    }
    .a{
        background-color: red;
    }
    .b{
        background-color: green;
    }
    .c{
        background-color: yellow;
    }
    .d{
        background-color: blue;
    }
    .v-enter{
        opacity: 0;
        transform: translateX(-100%);
    }
    .v-enter-to{
        opacity: 1;
        transform: translateX(0%);
    }
    .v-enter-active{
        transition: all 2000ms ease-in;
    }
    .v-leave{
        opacity: 1;
        transform: translateX(0%);

    }
    .v-leave-to{
        opacity: 0;
        transform: translateX(100%);

    }
    .v-leave-active{
        transition: all 2000ms ease-in;
    }

    .right-enter{
        opacity: 0;
        transform: translateX(-100%);
    }
    .right-enter-to{
        opacity: 1;
        transform: translateX(0%);
    }
    .right-enter-active{
        transition: all 2000ms ease-in;
    }
    .right-leave{
        opacity: 1;
        transform: translateX(0%);

    }
    .right-leave-to{
        opacity: 0;
        transform: translateX(100%);

    }
    .right-leave-active{
        transition: all 2000ms ease-in;
    }
    .left-enter{
        opacity: 0;
        transform: translateX(100%);
    }
    .left-enter-to{
        opacity: 1;
        transform: translateX(0%);
    }
    .left-enter-active{
        transition: all 2000ms ease-in;
    }
    .left-leave{
        opacity: 1;
        transform: translateX(0%);

    }
    .left-leave-to{
        opacity: 0;
        transform: translateX(-100%);

    }
    .left-leave-active{
        transition: all 2000ms ease-in;
    }
</style>


