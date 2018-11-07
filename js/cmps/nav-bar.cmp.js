export default {
  template: `
    <header>
    <div @click="isShow = !isShow" class="nav-bar-head">
        <h1 class="logo-nav-bar">APPSUS</h1>
        <button class="btn-nav-bar"  title="apps"><i class="fas fa-caret-square-down"></i></button>
    </div>
        
        <nav v-if="isShow">
            <div class="nav-bar-links">
                <div class="nav-bar-link">
                    
                    <router-link  exact to="/"><i class="fas fa-home nav-bar-icon"></i></router-link> 
                </div>
                <div class="nav-bar-link">
                    
                    <router-link class="nav-bar-link" exact to="/email"><i class="fas fa-envelope-square nav-bar-icon"></i></router-link> 
                </div>
                <div class="nav-bar-link">
                    
                    <router-link class="nav-bar-link" exact to="/keep"><i class="fas fa-file-alt nav-bar-icon"></i></router-link>
                </div>
            </div>
        </nav>
    </header>
    `,
  data() {
    return {
      isShow: false
    };
  }
};
