import { keepService } from '../../service/keep-service.js';
import imgNote from './img-note.cmp.js';
import txtNote from './txt-note.cmp.js';
// import noteDetails from './note-details.js';

export default {
    template: `
    <section class="note-container grid">
        <component class="note-item flex" v-for="(note, idx) in notes" 
                        :is="note.type" 
                        :data="note.data">
                    </component>
    </section>
    `,
    data() {
        return {
            notes: null
        }
    },
    methods:{
    
    },
    created() {
        keepService.quary()
            .then(notes => this.notes = notes)
    },
    computed: {
    },
    components:{
        imgNote,
        txtNote,
        // noteDetails
    }
}