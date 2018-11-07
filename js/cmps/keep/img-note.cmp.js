    import { keepService } from '../../service/keep-service.js';

    export default {
        props:['data'],    
        template: `
                <router-link :to="'keep/img/'+data.id">
                    <div>
                        <img :src="data.imgUrl" :title="data.title" />
                        <p class="txt">{{data.txt}}</p>
                    </div>
                    <button @click.stop="data.isPinned = !data.isPinned"><i class="fas fa-thumbtack" style="font-size:2em"></i></button>
                </router-link>
        `,
        created() {
            console.log(this.data);
            
        },
    }