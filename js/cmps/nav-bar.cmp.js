export default {
  template: `
    <header>
        <h1 class="logo">Appsus</h1>
        <button @click="isShow = !isShow" title="apps"><i class="fas fa-caret-square-down"></i></button>
        
        <nav v-if="isShow">

            <router-link exact to="/">Home</router-link> |
            <router-link exact to="/email">Email App</router-link> |
            <router-link exact to="/keep">Keep App</router-link>
            <button>dbgb</button>
        </nav>
    </header>
    `,
    data(){
        return {
            isShow: false,
        }
    }
};
