 <template>
     <div>
         <div class="slider">I'm {{title}}</div>
     </div>
 </template>
<script>
export default {
    data () {
        return {
            title : "slider"
        }
    }
}
</script>
<style scoped>
    .slider{
        float: left;
        width: 100px;
    }
</style>

