export default {
  template: `
    <header>
        <h1 class="logo flex justify-center">Appsus</h1>
        <button @click="isShow = !isShow" title="apps">
            <!-- <i class="fa fa-caret-square-down" aria-hidden="true"></i> -->
        </button>
        <i class="fas fa-grip-horizontal"></i>
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
