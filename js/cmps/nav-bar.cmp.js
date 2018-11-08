export default {
  template: `
    <header>
    <div v-if="currPage === 'home'" class="nav-bar-head">
        <h1 class="logo-nav-bar">APPSUS</h1>
        <button @click="show" class="btn-nav-bar  btn-home"  title="apps"><i class="fas fa-caret-square-down"></i></button>
    </div>
        
        <nav v-if="isShow">
            <div class="nav-bar-links">
                <div @click="show" class="nav-bar-link">
                    <router-link  exact to="/"><i class="fas fa-home nav-bar-icon  btn-home"></i></router-link> 
                </div>
                <div @click="show" class="nav-bar-link">
                    <router-link class="nav-bar-link" exact to="/email"><i class="fas fa-envelope-square nav-bar-icon btn-home"></i></router-link> 
                </div>
                <div @click="show" class="nav-bar-link">
                    <router-link class="nav-bar-link" exact to="/keep"><i class="fas fa-file-alt nav-bar-icon btn-home"></i></router-link>
                </div>
            </div>
        </nav>
    </header>
    `,
  data() {
    return {
      isShow: false,
      currPage: 'home',
    };
  },
  methods:{
      show(){
        this.isShow = !this.isShow
      }
  },
  created() {

  },
};
