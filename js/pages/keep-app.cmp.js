import keepNav from '../cmps/keep/keep-navbar.cmp.js'
// import keepList from '../cmps/keep/keep-list.cmp.js'


export default {

    template: `
    <section>
        <keep-nav></keep-nav>
        <router-view></router-view>
    </section>
    `,
    data() {
        return {
        
        }
    },
    methods:{
    
    },
    created() {
        
    },
    components : {
        // keepList,
        keepNav,
    }
}