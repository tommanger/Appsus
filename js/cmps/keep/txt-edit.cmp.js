import { keepService } from "../../service/keep-service.js";
import  utilService from '../../service/util-service.js';

export default {
  template: `
    <section v-if="note" class="edit-img-container">
        <div>
            <p class="txt">{{note.data.title}}</p>
            <p class="txt">{{note.data.txt}}</p>
        </div>
        <div>
                <textarea cols="30" rows="10" v-model="note.data.txt">{{note.data.txt}}</textarea>
                <input type="text" v-model="note.data.title">{{note.data.title}}
        </div>
          <button @click="saveNote">Save</button>
          <button @click="backToList">Cancel</button>
    </section>
    `,
  data() {
    return {
      note: {
            type: 'txtNote',
            data: {
              id : utilService.makeId(),
              time :  moment().format('MMMM Do YYYY, h:mm:ss a'),            
              txt : 'txt 1',
              title: '1',
              isPinned: false
            }
      }
    };
  },
  created() {

    const noteId = this.$route.params.noteId;
    if (noteId) {
      keepService.getNoteById(noteId).then(note => {
        console.log(note);
        
        this.note = note;
      });
    }
  },
  methods: {
    saveNote() {
     keepService.saveNote(this.note);
     this.backToList()
    },
    backToList(){
      this.$router.push('/keep')        
    }
  }
};
