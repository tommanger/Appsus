import { keepService } from '../../service/keep-service.js';
import editImg from '../../cmps/keep/img-edit.cmp.js';

    export default {
        template: `
            <section v-if="note">
            <component 
                        :is="note.type" 
                        :note="note">
            </component>

          
          
            <!-- {{note}} -->
                        <!-- <div v-if="note.type === 'imgNote'">
                            <img :src="note.data.imgUrl" :title="note.data.title" />
                            <p class="txt">{{note.data.txt}}</p>
                            <input class="btn-edit-img" >
                            <button class="addImg">Add Image</button>
                            <textarea cols="30" rows="10"></textarea>
                            <input type="text">
                        </div>
                        
                        <div v-if="note.type === 'txtNote'">
                            {{note.data.txt}}
                            <textarea cols="30" rows="10" v-model="note.data.title"></textarea>
                            <input type="text">
                        </div>
        -->

           </section>
        `,
        data() {
            return {
                note: null,
            }
        },
        methods:{
        },
        created() {
            console.log('keep-edit');
            
            keepService.getNoteById(`${this.$route.params.noteId}`) 
                 .then(note => {
                     this.note = note
                    })           
        },
        comments:{
            editImg
        },
        watch: {

        }
    }