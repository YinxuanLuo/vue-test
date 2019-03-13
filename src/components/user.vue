 <template>
     <div>
         <div>I'm {{title}}</div>
         <router-link :key="item.id" v-for="item in list" :to="'/user/' + item.id">{{item.name}}</router-link>
         <div>
             用户名：{{userInfo.name}}
             性别：{{userInfo.name}}
             hobbit：{{userInfo.hobbit}}
         </div>
         <router-link :to="{query:{info: 'share'}}">share</router-link>    
         <router-link :to="{query:{info: 'follow'}}">follow</router-link>    
         {{$route.query.info}}
     </div>

 </template>
<script>
var list = [{id:"1",name:"llw",sex:"male",hobbit:"girl"},{id:"2",name:"wd",sex:"female",hobbit:"boy"},{id:"3",name:"dg",sex:"male",hobbit:"???"}]

export default {
    created(){
        var id = this.$route.params.id;
        this.list.forEach((item, index)=>{
            if(item.id == id){
                this.userInfo = this.list[index];
            }
        })
    },
    watch: {
        $route() {
            var id = this.$route.params.id;
            this.list.forEach((item, index)=>{
                if(item.id == id){
                    this.userInfo = this.list[index];
                }
            })
        }
    },
    data () {
        return {
            title : "user",
            list: list,
            userInfo: {}
        }
    }
}
</script>
<style>

</style>

