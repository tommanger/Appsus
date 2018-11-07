    import { keepService } from '../../service/keep-service.js';

    export default {
        props:['data'],    
        template: `
            <div>
                <router-link>
                    <img :src="data.imgUrl" :title="data.title" />
                    <p class="txt">{{data.txt}}</p>
                    <button @click="editNote(data.id)">Edit {{data.id}}</button>
                    </router-link>
                </div>
        `,
        data() {
            return {

            }
        },
        methods:{
            editNote(noteId){
                console.log(noteId);
                this.$router.push('/keep/'+noteId)
            }
        },
        created() {
            // const 
        },
    }