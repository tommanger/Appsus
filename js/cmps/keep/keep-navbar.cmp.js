export default {
    template: `
          <section class="keep-nav flex space-between">
            <h2 class="logo">Keep List</h2>
            <div class="nav-items-container">
            
            <router-link to="/keep/txt">
                <i class="fas fa-pencil-alt nav-item"></i>
                </router-link>
            
                <router-link to="/keep/img">               
                <i class="far fa-images nav-item"></i>
                </router-link> 
            
              </div>
          </section>
      `,
    data() {
      return {
        isShow: false
      };
    }
  };
  