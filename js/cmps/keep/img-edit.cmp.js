import { keepService } from "../../service/keep-service.js";
import  utilService from '../../service/util-service.js';

export default {
  template: `
    <section v-if="note" class="edit-img-container">
        <div>
                <img :src="note.data.imgUrl" :title="note.data.title" />
                <p class="txt">{{note.data.txt}}</p>
        </div>
        <div>
                <input ref="newImg"class="btn-edit-img" @change="saveImg()"/>
                <button  class="addImg" @click="saveImg()">Add Image</button>
                <label>
                  Enter Text
                  <textarea cols="30" rows="10" v-model="note.data.txt">{{note.data.txt}}</textarea>
                </label>
                <label>               
                  Enter Title : 
                <input type="text" v-model="note.data.title">{{note.data.title}}
                </label>
        
              </div>
        <button @click="saveNote">Save</button>
        <button @click="backToList">Cancel</button>

    </section>
    `,
  data() {
    return {
      note: {
          type: 'imgNote',
          data: {
                        id: utilService.makeId(),
                        time: moment().format("MMMM Do YYYY, h:mm:ss a"),
                        imgUrl: "",
                        imgTitle: "",
                        txt: "Enter title",
                        isPinned: false    
          }
      }
    };
  },
  created() {
      console.log("edit img");
    const noteId = this.$route.params.noteId;
    console.log(noteId);
    if (noteId) {
      keepService.getNoteById(noteId).then(note => {
          console.log(note)
        this.note = note;
      });
    }
  },
  methods: {
    saveImg() {
      this.note.data.imgUrl = this.$refs.newImg.value;
    },
    saveNote(){
    keepService.saveNote(this.note);      
        this.backToList();        
    },
    backToList(){
        this.$router.push('/keep')        
      }
  }
};
