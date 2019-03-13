 <template>
    <div>
        <ul>
            <li>
                <router-link to="/about/person">person</router-link>
            </li>
            <li>
                <router-link to="/about/hobbit">hobbit</router-link>
            </li>
            <li>
                <router-link to="/about/com">com</router-link>
            </li>
        </ul>
        <router-view></router-view>
    </div>
 </template>
<script>
export default {
    data () {
        return {
            title : "about"
        }
    }
}
</script>
<style>

</style>

