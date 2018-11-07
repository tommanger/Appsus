import { keepService } from '../../service/keep-service.js';

    export default {
        template: `
            <div>
                {{note}}
           </div>
        `,
        data() {
            return {
                note:null
            }
        },
        methods:{
        },
        created() {
            keepService.getNoteById(`${this.$route.params.noteId}`) 
                 .then(note => this.note = note)           
        },
    }