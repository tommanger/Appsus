


export default {

    template: `
    <section>
        <h1 class="home-logo">Appsus</h1>
        <div class="btns-home-container">
            <div  class="nav-bar-link btn-home">
                <router-link class="nav-bar-link btn-home" exact to="/email"><i class="fas fa-envelope-square nav-bar-icon"></i></router-link> 
            </div>
            <div class="nav-bar-link"> 
                <router-link class="nav-bar-link btn-home" exact to="/keep"><i class="fas fa-file-alt nav-bar-icon"></i></router-link>
            </div>
        </div>
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
}