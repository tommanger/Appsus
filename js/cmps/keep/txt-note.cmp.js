export default {
  props: ["data"],
  template: `
                <router-link :to="'keep/txt/'+data.id">
                   <div class="txt">
                        <p>{{data.txt}}</p>
                    </div>
                    <button><i class="fas fa-thumbtack"></i></button>
               </router-link>
    `
};
