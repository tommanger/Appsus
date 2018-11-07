export default {
  props: ["data"],
  template: `
                <div class="txt">
                    <p>{{data.txt}}</p> 
                    <button @click="editNote(data.id)">Edit {{data.id}}</button>

                </div>
    `,
        methods:{
            editNote(noteId){
                console.log(noteId);
                this.$router.push('/keep/'+noteId)
            }
        }
};
